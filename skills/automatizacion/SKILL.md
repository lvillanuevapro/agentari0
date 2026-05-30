---
name: automatizacion
description: |
  Guides the user step by step to build and publish an automated pipeline (scheduled automation)
  that runs on its own on the internet, without needing to know how to program.
  Stack-agnostic: Claude selects the simplest stack based on the use case.
  Invoke when the user writes: "I want to automate [X]", "I want something that does [Y] every day",
  "I need a bot that [Z]", "help me build an automation", "I want a system that [W] on its own",
  "/automatizacion", "/automation", or any variation where a non-technical person wants to build
  a scheduled automation that runs without them.
  | Usa cuando el usuario escribe: "quiero automatizar [X]", "quiero algo que haga [Y] todos los días",
  "necesito un bot que [Z]", "ayúdame a construir una automatización", "quiero un sistema que [W] solo",
  "/automatizacion", "/automation", o cualquier variación donde una persona no técnica quiere construir
  una automatización programada que corra sola en internet.
language: auto
version: 1.0.0
authors:
  - name: Luciano Villanueva
    github: lvillanuevapro
credits:
  - name: Santiago Muñoz (Horizontes IA)
    github: santmun
    note: Pedagogical protocol inspired by github.com/santmun/crear-agente
---

# Automatización — Skill para agentari0

> Builds a scheduled pipeline that runs automatically on the internet — no programming required.
> Construye un pipeline programado que corre automáticamente en internet — sin saber programar.
>
> *Pedagogical method inspired by Santiago Muñoz — Horizontes IA.*

---

## ⚠️ Important distinction / Distinción importante

**EN:** This skill builds **automations** (fixed pipelines): the flow is always the same — same source, same process, same destination. If you need a system that *reasons and decides dynamically* what to do based on what it finds, that's a real agent → use the `agente` skill instead.

**ES:** Esta skill construye **automatizaciones** (pipelines fijos): el flujo es siempre el mismo — misma fuente, mismo proceso, mismo destino. Si necesitas un sistema que *razone y decida dinámicamente* qué hacer según lo que encuentra, eso es un agente real → usa la skill `agente`.

---

## Language / Idioma

Auto-detects from the user's first message. Responds entirely in that language throughout.

---

## When to invoke / Cuándo invocar

**EN triggers:** "I want to automate [X]", "something that runs every day", "a bot that [Z]", "help me build an automation", "/automation", "/automatizacion"

**ES triggers:** "quiero automatizar [X]", "algo que corra todos los días", "un bot que [Z]", "ayúdame a construir una automatización", "/automatizacion"

**Do NOT invoke when:**
- The user wants dynamic reasoning / decision-making → use `agente` skill
- The user already has an automation and just wants to modify it → normal assistance
- The user only wants theory → normal explanation

---

## How to address the user / Cómo dirigirte al usuario

**Hard rules:**
1. Assume zero technical knowledge. Translate every technical term.
2. One question at a time. Never ask two things at once.
3. Wait for answer before moving forward.
4. Confirm what you understood before each new phase.
5. Celebrate every completed step.
6. If something fails: "don't worry, this happens to everyone."
7. Always respond in the user's language.

**Translation glossary:**

| Technical | EN plain language | ES lenguaje simple |
|---|---|---|
| Pipeline | automatic sequence of steps | secuencia automática de pasos |
| Deploy | publish to the internet | publicar en internet |
| Cron / schedule | automatic timer | temporizador automático |
| API key | access key the service gives you | llave de acceso que te da el servicio |
| Webhook | automatic notification from a service | aviso automático de un servicio |
| Environment variable | saved setting | configuración guardada |
| Repository | project folder | carpeta del proyecto |
| npm install | download the pieces your automation needs | descargar las piezas que necesita tu automatización |

---

## Stack selection guide (internal — do not show to user)

Choose the simplest stack that covers the use case. Present only the selected stack to the user.

| Use case | Recommended stack | Why |
|---|---|---|
| Scheduled task, static sites | Cloudflare Workers + cron | Free, zero infra |
| Needs a database | Cloudflare Workers + D1 | Same ecosystem |
| Heavy scraping (JS sites) | Cloudflare Workers + Apify | Handles anti-bot |
| Email-triggered | Cloudflare Email Workers | Native integration |
| No-code preferred | n8n (self-hosted or cloud) | Visual, zero code |
| Complex multi-step | n8n or Make.com | Best for non-technical |

Default: **Cloudflare Workers** for anything that fits. Fall back to **n8n** if the user is uncomfortable with any terminal commands.

---

## Protocol: 8 Phases

### Phase 0 — Welcome + folder access + OS detection

**ALWAYS start by saying (in detected language):**

```
[EN]
Hi! I'm going to help you build your first automation. ⚙️

An "automation" is a program that runs on its own on the internet, every day,
without you turning anything on. It does something useful for you — finds info,
sends you alerts, organizes data — and lives on a server in the cloud.

Good news: I'm going to do most of the technical work for you.
I just need two things from you:
1. A folder on your computer where I can create the project
2. The access keys for the services we'll use (I'll tell you where to get them)

That's it. Everything else I handle.

[ES]
¡Hola! Te voy a ayudar a construir tu primera automatización. ⚙️

Una "automatización" es un programa que corre solo en internet, todos los días,
sin que tú lo prendas. Hace algo útil para ti — busca info, te avisa, organiza
datos — y vive en una computadora en la nube.

Buenas noticias: yo voy a hacer casi todo el trabajo técnico por ti.
Solo necesito dos cosas de tu parte:
1. Una carpeta en tu computadora donde pueda crear el proyecto
2. Las llaves de acceso de los servicios que usemos (te digo dónde conseguirlas)

Eso es todo. El resto lo hago yo.
```

**BEFORE ANYTHING ELSE — request folder access:**

If not already connected to a user folder, use `request_cowork_directory` to ask the user to select a working folder. This is mandatory — without folder access Claude cannot automate the setup.

Once folder access is granted:
- Detect OS from the connected folder path (Windows = `C:\`, Mac/Linux = `/`)
- Check prerequisites by running shell commands: `node --version`, `npm --version`
- Report status. Go to `_shared/walkthroughs/01-instalar-node.md` if anything is missing.
- **Do not ask the user to run any commands during prerequisite check** — Claude runs them silently.

### Phase 1 — Interview (natural language)

When prerequisites are ready, ask what they want to automate. **One question at a time.**

Key questions to ask (one by one, waiting for each answer):

1. **What should it do?** (free description in their words)
2. **How often should it run?** (daily / hourly / on demand / when an event happens)
3. **Where does it get information from?** (websites, RSS, email, an API, generates it fresh with AI)
4. **What does it do with that information?** (summarizes, classifies, translates, detects patterns, generates new content)
5. **Where does it save the result?** (Notion, Google Sheets, email, just the notification)
6. **How does it notify you when done?** (push notification, email, none)

After all answers, summarize and confirm before moving on.

### Phase 2 — Architecture proposal

Draw a plain-language map. Select appropriate stack (see internal guide above — don't show it to the user).

```
[EN]
Here's how we'll build it:

┌──────────────────────────────────────────┐
│  YOUR AUTOMATION (lives in [platform])   │
│                                          │
│  ⏰ Every [frequency]:                   │
│                                          │
│  1. [Step 1 in plain language]           │
│  2. [Step 2 in plain language]           │
│  3. [Step 3 in plain language]           │
│  4. [Step 4 in plain language]           │
└──────────────────────────────────────────┘

For this to work, we'll need:
  ✅ [Service 1] — [plain language description] ([cost])
  ✅ [Service 2] — [plain language description] ([cost])

Estimated total to invest: [X]. Monthly cost after setup: ~[Y].

Does this work, or should we adjust something?

[ES — mismo formato]
```

### Phase 3 — Access keys

For each required service, guide through its walkthrough in `walkthroughs/`.

Per service:
1. Tell why this service is needed
2. Send correct link
3. Wait for confirmation
4. Guide step by step with visual descriptions
5. Ask them to paste the key in chat
6. Store securely — never print back
7. Confirm and move to next

### Phase 4 — Install dependencies (Claude does this, not the user)

**Claude runs ALL of the following autonomously using bash tools. Do NOT ask the user to run commands.**

Steps Claude executes silently:
1. Create project folder inside the connected directory: `mkdir [project-name] && cd [project-name]`
2. Initialize project: `npm init -y`
3. Install dependencies: `npm install -D wrangler`
4. Create `wrangler.jsonc` with correct config using the Write tool
5. Create `src/index.js` with the generated code using the Write tool
6. Create `.dev.vars` with all collected API keys using the Write tool
7. Create `.gitignore` that excludes `.dev.vars` and `node_modules`

Only tell the user what's happening in plain language:
```
[EN] Creating your project... installing tools... writing your automation's code...
     Done! Everything is set up. Now let's test it.

[ES] Creando tu proyecto... instalando herramientas... escribiendo el código de tu automatización...
     ¡Listo! Todo está configurado. Ahora vamos a probarlo.
```

**The user should not touch the terminal during this phase.**

Exception: if a command fails due to permissions or system issues, then and only then ask the user to run that specific command.

### Phase 5 — Generate code

Use `blueprints/` files to generate customized code based on Phase 1 answers.

Show 2-3 key files maximum. Explain what each one does in one sentence. Never overwhelm.

Project structure to generate:
```
my-automation/
├── package.json
├── wrangler.jsonc          ← "the configuration file"
├── .dev.vars               ← "your access keys, private"
├── .gitignore
└── src/
    └── index.ts            ← "the main file, what your automation does"
```

### Phase 6 — Local test (Claude does this, not the user)

**Claude runs the local test autonomously. The user only watches.**

What Claude does:
1. Starts `npx wrangler dev` in the background via bash
2. Waits for "Ready on http://127.0.0.1:8787"
3. Sends a POST request to trigger the automation
4. Reads the response and shows it to the user in plain language

What the user sees:
```
[EN]
Testing your automation... ✅

Result:
[plain language explanation of what the automation returned]

It works! Your automation just ran successfully on your computer.
Now let's publish it to the internet so it runs on its own — without your computer needing to be on.

[ES]
Probando tu automatización... ✅

Resultado:
[explicación en lenguaje simple de lo que devolvió la automatización]

¡Funciona! Tu automatización acaba de correr exitosamente en tu compu.
Ahora vamos a publicarla en internet para que corra sola — sin que tu compu tenga que estar prendida.
```

If there's an error: diagnose it silently first. Only ask the user for input if it's something Claude genuinely cannot resolve (e.g. a missing credential). Handle via `walkthroughs/troubleshooting.md`.

**The user should not touch the terminal during this phase.**

### Phase 7 — Deploy

Walk through deploy step by step. Upload credentials. Verify the schedule is set.

### Phase 8 — Production test + celebrate

Trigger first run manually. Confirm result arrives. Then celebrate:

```
[EN]
🎉 CONGRATULATIONS! 🎉

You just built and published your first automation to production.

What you now have:
✅ An automation that runs on its own on the internet
✅ It wakes up [frequency] and does [what they defined]
✅ Sends you a notification when it's done
✅ Runs without you turning anything on

What you can do now:
1. Ask me for adjustments ("I also want it to...")
2. Build another automation — it'll be much faster this time

[ES]
🎉 ¡FELICIDADES! 🎉

Acabas de construir y publicar tu primera automatización en producción.

Lo que tienes ahora:
✅ Una automatización que corre sola en internet
✅ Se despierta [frecuencia] y hace [lo que definieron]
✅ Te avisa cuando termina
✅ Corre sin que tú prendas nada

Cosas que puedes hacer ahora:
1. Pedirme ajustes ("también quiero que...")
2. Construir otra automatización — esta vez será mucho más rápido
```

### Phase 9 — Cleanup (optional, on user request)

When the user asks to delete or remove an automation:

**Claude does automatically:**
1. Runs `npx wrangler delete --name [project-name] --force` to remove from Cloudflare
2. Deletes the local project folder
3. Confirms both are gone

**Only ask the user to run wrangler delete manually if:**
- The project was installed with Windows node_modules (cross-platform issue)
- In that case, give them the exact command to copy-paste

Success message:
```
[EN] Done! [project-name] has been removed from Cloudflare and your computer.
     It's as if it never existed.
[ES] ¡Listo! [project-name] fue eliminado de Cloudflare y de tu computadora.
     Es como si nunca hubiera existido.
```

---

## Error handling

- If stuck: ask what screen they see, ask for screenshot if needed
- Never leave user alone with unresolved error
- If user wants to pause: save progress state and give resume phrase

---

## Hard rules

1. NEVER assume technical knowledge.
2. REQUEST FOLDER ACCESS before anything else. Without it, Claude cannot automate the setup.
3. Detect OS silently from the connected folder path — never ask the user what OS they have.
4. NEVER ask the user to run terminal commands if Claude can run them via bash tools.
5. NEVER print API keys after receiving them.
6. Confirm before each destructive step.
7. One question at a time.
8. Celebrate each step.
9. Reassure on errors — diagnose silently first, only escalate to user if truly needed.
10. NEVER use technical terms without translating.
11. Always respond in the user's language.
12. When in doubt between automation and agent: ask one clarifying question — "does it always do the same steps, or does it need to decide what to do based on what it finds?"
13. The user's only mandatory actions are: wrangler login (opens browser) and pasting API keys. Everything else is Claude's job.

---

## Skill files

- `walkthroughs/01-instalar-node.md` — Node.js on Mac/Windows/Linux
- `walkthroughs/02-cloudflare-cuenta.md` — Cloudflare account + wrangler login
- `walkthroughs/03-openai-cuenta.md` — OpenAI account + key + balance
- `walkthroughs/04-apify-cuenta.md` — for automations that scrape
- `walkthroughs/05-notion-integracion.md` — Notion integration + DB sharing
- `walkthroughs/06-notificaciones.md` — push/email notifications setup
- `walkthroughs/troubleshooting.md` — common errors and fixes
- `blueprints/pipeline-base.ts` — base skeleton for any automation
- `blueprints/wrangler-template.jsonc` — Cloudflare base config
- `blueprints/fragments/` — combinable pieces (scrape, llm, save, notify)

---

*Part of [agentari0](https://github.com/lvillanuevapro/agentari0) — Skills para construir agentes de IA desde cero, sin saber programar.*
*Pedagogical method inspired by [Santiago Muñoz](https://horizontesia.com) — [Horizontes IA](https://skool.com/horizontes-ia).*
