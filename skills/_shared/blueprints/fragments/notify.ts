/**
 * Fragment: Notify
 * Sends a notification via Pushover (push) or Resend (email).
 * Uncomment the method you want to use.
 */

// --- OPTION 1: Pushover (push notification to iPhone/Android) ---
export async function notifyPushover(
  message: string,
  title: string,
  env: { PUSHOVER_USER: string; PUSHOVER_TOKEN: string }
): Promise<void> {
  const response = await fetch("https://api.pushover.net/1/messages.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: env.PUSHOVER_TOKEN,
      user: env.PUSHOVER_USER,
      title,
      message,
      priority: 0, // -2 silent, -1 quiet, 0 normal, 1 high, 2 emergency
    }),
  });

  if (!response.ok) {
    throw new Error(`Pushover notification failed: ${await response.text()}`);
  }
}

// --- OPTION 2: Email via Resend (free, no extra app needed) ---
export async function notifyEmail(
  message: string,
  subject: string,
  env: { RESEND_API_KEY: string; EMAIL_TO: string; EMAIL_FROM: string }
): Promise<void> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.EMAIL_FROM,
      to: [env.EMAIL_TO],
      subject,
      text: message,
    }),
  });

  if (!response.ok) {
    throw new Error(`Email notification failed: ${await response.text()}`);
  }
}
