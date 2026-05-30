/**
 * Fragment: Save to Notion
 * Saves a result entry to a Notion database.
 * Requires: NOTION_TOKEN and NOTION_DATABASE_ID in your .dev.vars
 */

export async function saveToNotion(
  content: string,
  title: string,
  env: { NOTION_TOKEN: string; NOTION_DATABASE_ID: string }
): Promise<void> {
  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.NOTION_TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: env.NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: title } }],
        },
        Date: {
          date: { start: new Date().toISOString().split("T")[0] },
        },
      },
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [{ type: "text", text: { content } }],
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Notion save failed: ${error}`);
  }
}
