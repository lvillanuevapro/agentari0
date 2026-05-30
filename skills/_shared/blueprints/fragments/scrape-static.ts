/**
 * Fragment: Scrape Static Site
 * Fetches and parses HTML from a static website (no JavaScript required).
 * Works with: news sites, blogs, most public websites.
 * Does NOT work with: Twitter, LinkedIn, SPAs — use scrape-js.ts for those.
 */

export async function scrapeStatic(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; agentari0-bot/1.0; +https://github.com/lvillanuevapro/agentari0)",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  const html = await response.text();

  // Basic HTML to text — strips tags, cleans whitespace
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 5000); // limit to 5K chars to control token usage
}

/**
 * Scrape RSS feed — returns array of {title, link, description}
 * Works with any standard RSS/Atom feed.
 */
export async function scrapeRSS(
  feedUrl: string
): Promise<{ title: string; link: string; description: string }[]> {
  const response = await fetch(feedUrl);
  const xml = await response.text();

  const items: { title: string; link: string; description: string }[] = [];
  const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);

  for (const match of itemMatches) {
    const item = match[1];
    const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/)?.[1] ?? "";
    const link = item.match(/<link>(.*?)<\/link>/)?.[1] ?? "";
    const description = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/)?.[1] ?? "";
    items.push({ title, link, description: description.slice(0, 500) });
  }

  return items.slice(0, 20); // max 20 items
}
