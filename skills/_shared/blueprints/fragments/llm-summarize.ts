/**
 * Fragment: LLM Summarize
 * Uses OpenAI GPT-4o-mini to summarize or process a list of items.
 * Customize the system prompt for your specific use case.
 */

import OpenAI from "openai";

const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

export async function llmSummarize(
  items: string[],
  systemPrompt: string,
  env: { OPENAI_API_KEY: string }
): Promise<string> {
  const content = items.join("\n\n---\n\n");

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: content },
    ],
    max_tokens: 1000,
  });

  return response.choices[0].message.content ?? "";
}

// Example system prompt — customize for your use case:
export const EXAMPLE_SYSTEM_PROMPT = `
You are an expert analyst. Given the following content, extract the 3 most
relevant and actionable insights. Be concise and specific.
Format as a numbered list.
`;
