import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchRecentItems, fetchRecentReleases, type RepoConfig } from "../github.ts";

const TEST_REPO: RepoConfig = {
  id: "test",
  repo: "owner/repo",
  name: "Test Repo",
};

const TEST_ISSUE = {
  number: 1,
  title: "Test issue",
  state: "open",
  user: { login: "octocat" },
  labels: [],
  created_at: "2026-03-19T00:00:00Z",
  updated_at: "2026-03-19T00:00:00Z",
  comments: 0,
  html_url: "https://github.com/owner/repo/issues/1",
};

const TEST_PR = {
  ...TEST_ISSUE,
  number: 2,
  title: "Test PR",
  updated_at: "2026-03-19T00:00:00Z",
};

const TEST_RELEASE = {
  tag_name: "v1.0.0",
  name: "v1.0.0",
  published_at: "2026-03-19T00:00:00Z",
};

describe("GitHub fetch helpers", () => {
  const originalToken = process.env["GITHUB_TOKEN"];

  beforeEach(() => {
    process.env["GITHUB_TOKEN"] = "test-token";
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    if (originalToken === undefined) {
      delete process.env["GITHUB_TOKEN"];
    } else {
      process.env["GITHUB_TOKEN"] = originalToken;
    }
  });

  it("retries transient GitHub API failures before succeeding", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValueOnce(new Response("server error", { status: 500 }))
        .mockResolvedValueOnce(
          new Response(JSON.stringify([TEST_ISSUE]), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }),
        ),
    );

    const promise = fetchRecentItems(TEST_REPO, "issues", new Date("2026-03-18T00:00:00Z"));

    await vi.runAllTimersAsync();

    await expect(promise).resolves.toEqual([TEST_ISSUE]);
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("filters pull requests client-side by updated_at", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify([
            TEST_PR,
            {
              ...TEST_PR,
              number: 3,
              updated_at: "2026-03-17T00:00:00Z",
            },
          ]),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          },
        ),
      ),
    );

    const items = await fetchRecentItems(TEST_REPO, "pulls", new Date("2026-03-18T00:00:00Z"));
    expect(items).toHaveLength(1);
    expect(items[0]?.number).toBe(2);
  });

  it("filters releases by published_at", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify([
            TEST_RELEASE,
            {
              ...TEST_RELEASE,
              tag_name: "v0.9.0",
              name: "v0.9.0",
              published_at: "2026-03-17T00:00:00Z",
            },
          ]),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          },
        ),
      ),
    );

    const releases = await fetchRecentReleases("owner/repo", new Date("2026-03-18T00:00:00Z"));
    expect(releases).toEqual([TEST_RELEASE]);
  });
});
