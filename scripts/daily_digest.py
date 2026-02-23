#!/usr/bin/env python3
"""
Daily digest for anthropics/claude-code GitHub repository.
Fetches recent issues and PRs, summarizes with the Anthropic SDK,
then creates a GitHub issue with the digest.

Uses standard Anthropic SDK env vars:
  ANTHROPIC_API_KEY   - API key (works for both Anthropic and Kimi Code)
  ANTHROPIC_BASE_URL  - Override API endpoint (e.g. https://api.kimi.com/coding/)
  ANTHROPIC_MODEL     - Model name to use (default: claude-sonnet-4-6)
"""

import os
import sys
from datetime import datetime, timedelta, timezone
from typing import Any

import anthropic
import requests

GITHUB_TOKEN = os.environ["GITHUB_TOKEN"]
DIGEST_REPO = os.environ.get("DIGEST_REPO", "")
TARGET_REPO = "anthropics/claude-code"
MODEL = os.environ.get("ANTHROPIC_MODEL", "claude-sonnet-4-6")

GITHUB_HEADERS = {
    "Authorization": f"Bearer {GITHUB_TOKEN}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
}


def fetch_recent_items(item_type: str, since: datetime) -> list[dict[str, Any]]:
    """Fetch issues or pulls updated since the given datetime."""
    url = f"https://api.github.com/repos/{TARGET_REPO}/{item_type}"
    params = {
        "state": "all",
        "sort": "updated",
        "direction": "desc",
        "per_page": 50,
        "since": since.isoformat(),
    }
    resp = requests.get(url, headers=GITHUB_HEADERS, params=params, timeout=30)
    resp.raise_for_status()
    return resp.json()


def fetch_recent_releases(since: datetime) -> list[dict[str, Any]]:
    """Fetch releases published since the given datetime."""
    url = f"https://api.github.com/repos/{TARGET_REPO}/releases"
    resp = requests.get(url, headers=GITHUB_HEADERS, params={"per_page": 10}, timeout=30)
    resp.raise_for_status()
    return [
        r for r in resp.json()
        if datetime.fromisoformat(r["published_at"].replace("Z", "+00:00")) >= since
    ]


def format_item(item: dict[str, Any]) -> str:
    number = item["number"]
    title = item["title"]
    state = item["state"]
    user = item["user"]["login"]
    labels = ", ".join(l["name"] for l in item.get("labels", []))
    created = item["created_at"][:10]
    updated = item["updated_at"][:10]
    comments = item.get("comments", 0)
    reactions = item.get("reactions", {}).get("+1", 0)
    body = (item.get("body") or "")[:300].replace("\n", " ").strip()
    url = item["html_url"]

    label_str = f" [{labels}]" if labels else ""
    return (
        f"#{number} [{state.upper()}]{label_str} {title}\n"
        f"  作者: @{user} | 创建: {created} | 更新: {updated} | 评论: {comments} | 👍: {reactions}\n"
        f"  链接: {url}\n"
        f"  摘要: {body}{'...' if len(body) == 300 else ''}\n"
    )


def build_prompt(issues: list, prs: list, releases: list, date_str: str) -> str:
    issues_text = "\n".join(format_item(i) for i in issues) or "无"
    prs_text = "\n".join(format_item(p) for p in prs) or "无"
    if releases:
        releases_text = "\n".join(
            f"- {r['tag_name']}: {r['name']}\n  {(r.get('body') or '')[:300]}"
            for r in releases
        )
    else:
        releases_text = "无"

    return f"""你是一位专注于 AI 开发工具的技术分析师。请根据以下 GitHub 数据，生成 {date_str} 的 Claude Code 社区动态日报。

# 数据来源: github.com/anthropics/claude-code

## 最新 Releases（过去24小时）
{releases_text}

## 最新 Issues（过去24小时内更新，共{len(issues)}条）
{issues_text}

## 最新 Pull Requests（过去24小时内更新，共{len(prs)}条）
{prs_text}

---

请生成一份结构清晰的中文日报，包含以下部分：

1. **今日速览** - 用2-3句话概括今天最重要的动态
2. **版本发布** - 如有新版本，总结更新内容；无则省略
3. **社区热点 Issues** - 挑选3-5个最值得关注的 Issue，说明为什么重要、社区反应如何
4. **重要 PR 进展** - 挑选3-5个重要的 PR，说明功能或修复内容
5. **功能需求趋势** - 从所有 Issues 中提炼出社区最关注的功能方向（如 IDE 集成、性能、新模型支持等）
6. **开发者关注点** - 总结开发者反馈中的痛点或高频需求

语言要求：简洁专业，适合技术开发者阅读。每个条目附上 GitHub 链接。
"""


def call_llm(prompt: str) -> str:
    # anthropic SDK 自动读取 ANTHROPIC_API_KEY 和 ANTHROPIC_BASE_URL 环境变量
    client = anthropic.Anthropic()
    message = client.messages.create(
        model=MODEL,
        max_tokens=4096,
        messages=[{"role": "user", "content": prompt}],
    )
    return message.content[0].text


def create_github_issue(title: str, body: str) -> str:
    url = f"https://api.github.com/repos/{DIGEST_REPO}/issues"
    resp = requests.post(
        url,
        headers=GITHUB_HEADERS,
        json={"title": title, "body": body, "labels": ["digest"]},
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()["html_url"]


def save_digest_file(content: str, date_str: str) -> str:
    filename = f"digests/{date_str}.md"
    os.makedirs("digests", exist_ok=True)
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)
    return filename


def main():
    now = datetime.now(timezone.utc)
    since = now - timedelta(hours=24)
    date_str = (now + timedelta(hours=8)).strftime("%Y-%m-%d")  # CST date

    base_url = os.environ.get("ANTHROPIC_BASE_URL", "api.anthropic.com")
    print(f"[{now.isoformat()}] 开始抓取 {TARGET_REPO} 动态 | LLM endpoint: {base_url} | model: {MODEL}")

    issues_raw = fetch_recent_items("issues", since)
    issues = [i for i in issues_raw if "pull_request" not in i]
    prs = fetch_recent_items("pulls", since)
    releases = fetch_recent_releases(since)

    print(f"  Issues: {len(issues)}, PRs: {len(prs)}, Releases: {len(releases)}")

    if not issues and not prs and not releases:
        print("过去24小时无新动态，跳过生成。")
        sys.exit(0)

    prompt = build_prompt(issues, prs, releases, date_str)
    print("  调用 LLM 生成摘要...")
    summary = call_llm(prompt)

    digest_header = (
        f"# Claude Code 社区日报 {date_str}\n\n"
        f"> 数据来源: [{TARGET_REPO}](https://github.com/{TARGET_REPO}) "
        f"| 生成时间: {now.strftime('%Y-%m-%d %H:%M')} UTC\n\n"
    )
    digest_footer = (
        f"\n\n---\n*本日报由 [claude-code-digest](https://github.com/{DIGEST_REPO}) 自动生成。*"
    )
    full_digest = digest_header + summary + digest_footer

    filepath = save_digest_file(full_digest, date_str)
    print(f"  已保存到 {filepath}")

    if DIGEST_REPO:
        issue_url = create_github_issue(f"📋 Claude Code 社区日报 {date_str}", full_digest)
        print(f"  已创建 Issue: {issue_url}")

    print("完成!")


if __name__ == "__main__":
    main()
