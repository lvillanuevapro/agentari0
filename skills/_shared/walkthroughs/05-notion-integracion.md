# Notion Integration / Integración con Notion

**EN:** Notion is where your automation/agent will save its results. Think of it as a smart notebook that your agent can write to automatically.

**ES:** Notion es donde tu automatización/agente va a guardar sus resultados. Piénsalo como una libreta inteligente en la que tu agente puede escribir automáticamente.

---

## Do you need Notion? / ¿Necesitas Notion?

Only if you want results saved to a database you can browse later. If you only want notifications, you can skip this.

Solo si quieres guardar resultados en una base de datos que puedas revisar después. Si solo quieres notificaciones, puedes saltarte esto.

---

## Step 1 — Create account (if you don't have one) / Crear cuenta

Go to https://notion.so and sign up for free. The free plan is enough.
Ve a https://notion.so y regístrate gratis. El plan gratuito alcanza.

---

## Step 2 — Create an integration / Crear una integración

1. Go to / Ve a https://www.notion.so/my-integrations
2. Click **+ New integration**
3. Name it (e.g. "agentari0")
4. Select your workspace
5. Click **Submit**
6. Copy the **Internal Integration Token** — it starts with `ntn_...`
7. Paste it in the chat when asked

---

## Step 3 — Create a database and share it / Crear una base de datos y compartirla

1. In Notion, create a new page and add a **Database** (full page or inline)
2. Give it a name (e.g. "Results — My Agent")
3. Click the **•••** menu (top right) → **Connections** → find your integration → **Confirm**
4. Copy the database URL — the ID is the part after the last `/` and before `?`
   Example: `https://notion.so/myworkspace/`**`abc123def456...`**`?v=...`
5. Paste the database ID in the chat when asked

**ES:** En Notion, crea una nueva página y agrega una **Base de datos**. Dale un nombre (ej. "Resultados — Mi Agente"). Haz clic en el menú **•••** (arriba a la derecha) → **Connections** → busca tu integración → **Confirm**. Copia la URL de la base de datos — el ID es la parte después del último `/` y antes del `?`. Pega el ID en el chat cuando te lo pida.

---

## Cost / Costo

**Free** — the Notion free plan is more than enough. ✅

---

*Part of [agentari0](https://github.com/lvillanuevapro/agentari0)*
