/**
 * Hugging Face trending models fetched via the HF Hub API.
 *
 * Strategy: fetch recently updated models sorted by downloads/likes,
 * filter for notable AI models.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface HfModel {
  id: string; // e.g. "meta-llama/Llama-3.1-8B"
  author: string;
  likes: number;
  downloads: number;
  tags: string[];
  pipelineTag: string;
  lastModified: string;
  url: string;
}

export interface HfData {
  models: HfModel[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const HF_FETCH_LIMIT = 30;
const API_URL = "https://huggingface.co/api/models";

// ---------------------------------------------------------------------------
// Response type
// ---------------------------------------------------------------------------

interface HfApiModel {
  _id: string;
  id: string;
  author?: string;
  likes: number;
  downloads: number;
  tags?: string[];
  pipeline_tag?: string;
  lastModified?: string;
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

export async function fetchHfData(): Promise<HfData> {
  try {
    // Fetch trending models (sorted by likes, recently modified)
    const params = new URLSearchParams({
      sort: "likes7d",
      direction: "-1",
      limit: String(HF_FETCH_LIMIT),
      full: "false",
    });

    const resp = await fetch(`${API_URL}?${params}`, {
      headers: { "User-Agent": "agents-radar/1.0" },
    });

    if (!resp.ok) {
      console.error(`  [hf] HTTP ${resp.status}`);
      return { models: [], fetchSuccess: false };
    }

    const raw = (await resp.json()) as HfApiModel[];

    const models: HfModel[] = raw.map((m) => ({
      id: m.id,
      author: m.author ?? m.id.split("/")[0] ?? "unknown",
      likes: m.likes,
      downloads: m.downloads,
      tags: m.tags ?? [],
      pipelineTag: m.pipeline_tag ?? "",
      lastModified: m.lastModified ?? "",
      url: `https://huggingface.co/${m.id}`,
    }));

    console.log(`  [hf] ${models.length} trending models`);
    return { models, fetchSuccess: models.length > 0 };
  } catch (err) {
    console.error(`  [hf] fetch failed: ${err}`);
    return { models: [], fetchSuccess: false };
  }
}
