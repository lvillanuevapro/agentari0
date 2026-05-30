/**
 * Fragment: Scrape JS-rendered Sites via Apify
 * Use for: Twitter/X, LinkedIn, Instagram, or any site that requires JavaScript.
 * Requires: APIFY_TOKEN in your .dev.vars
 */

export async function scrapeTwitter(
  searchQuery: string,
  maxTweets: number = 20,
  env: { APIFY_TOKEN: string }
): Promise<{ text: string; author: string; url: string }[]> {
  // Start Apify actor run
  const runResponse = await fetch(
    `https://api.apify.com/v2/acts/apidojo~tweet-scraper/runs?token=${env.APIFY_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        searchTerms: [searchQuery],
        maxTweets,
        languageFilter: "", // e.g. "en" for English only
      }),
    }
  );

  const run = await runResponse.json() as { data: { id: string } };
  const runId = run.data.id;

  // Wait for completion (poll every 5s, max 60s)
  for (let i = 0; i < 12; i++) {
    await new Promise((r) => setTimeout(r, 5000));
    const statusRes = await fetch(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${env.APIFY_TOKEN}`
    );
    const status = await statusRes.json() as { data: { status: string } };
    if (status.data.status === "SUCCEEDED") break;
  }

  // Get results
  const dataRes = await fetch(
    `https://api.apify.com/v2/actor-runs/${runId}/dataset/items?token=${env.APIFY_TOKEN}`
  );
  const tweets = await dataRes.json() as any[];

  return tweets.map((t) => ({
    text: t.full_text ?? t.text ?? "",
    author: t.user?.screen_name ?? "",
    url: `https://twitter.com/i/web/status/${t.id_str}`,
  }));
}
