# Automatización / Automation

> Builds a scheduled pipeline that runs automatically on the internet — no programming required.
> Construye un pipeline programado que corre automáticamente en internet — sin saber programar.

## What does this skill do? / ¿Qué hace esta skill?

**EN:** Guides you step by step to build and publish an automated pipeline. You describe what you want to automate in plain language, and Claude selects the right stack, gets all the credentials, generates the code, and publishes it — without you needing to understand the technical details.

**ES:** Te guía paso a paso para construir y publicar una automatización. Describes en lenguaje normal qué quieres automatizar, y Claude selecciona el stack correcto, obtiene todas las credenciales, genera el código, y lo publica — sin que necesites entender los detalles técnicos.

## ⚠️ Automation vs. Agent / Automatización vs. Agente

**EN:** This skill builds **automations** — fixed pipelines where the flow is always the same. If you need a system that *reasons and decides dynamically*, use the `agente` skill.

**ES:** Esta skill construye **automatizaciones** — pipelines fijos donde el flujo es siempre el mismo. Si necesitas un sistema que *razone y decida dinámicamente*, usa la skill `agente`.

## What can you build? / ¿Qué puedes construir?

- Daily news brief from your industry sources
- Alert when a website changes or goes down
- Daily content ideas based on trends
- Automatic lead finder
- Email classifier by importance
- Any scheduled task that follows fixed steps

## Estimated cost / Costo estimado

| Service | Cost | Type |
|---|---|---|
| Cloudflare Workers | Free | 100K executions/day free |
| OpenAI (if using AI) | ~$5 one-time | Lasts several months |
| Apify (if scraping JS sites) | Free tier | $5 free credit/month |
| Notifications (optional) | $0–5 one-time | Pushover or free email |
| **Total/month** | **~$0.10–5** | Depends on usage |

## How to use / Cómo usar

```bash
# Install (Mac/Linux)
git clone https://github.com/lvillanuevapro/agentari0.git ~/.claude/skills/agentari0

# Install (Windows PowerShell)
git clone https://github.com/lvillanuevapro/agentari0.git "$env:USERPROFILE\.claude\skills\agentari0"
```

Then open Claude Code and write:
- `/automatizacion` or `/automation`
- `"I want to automate [X]"` / `"Quiero automatizar [X]"`

## Files / Archivos

```
automatizacion/
├── SKILL.md                          # Main conversational protocol
├── README.md                         # This file
├── walkthroughs/                     # Step-by-step guides per service
│   ├── 01-instalar-node.md
│   ├── 02-cloudflare-cuenta.md
│   ├── 03-openai-cuenta.md
│   ├── 04-apify-cuenta.md
│   ├── 05-notion-integracion.md
│   ├── 06-notificaciones.md
│   └── troubleshooting.md
└── blueprints/                       # Reusable code templates
    ├── pipeline-base.ts
    ├── wrangler-template.jsonc
    └── fragments/
        ├── scrape-static.ts
        ├── scrape-js.ts
        ├── llm-summarize.ts
        ├── save-notion.ts
        └── notify.ts
```

---

*Part of [agentari0](https://github.com/lvillanuevapro/agentari0)*
*Pedagogical method inspired by [Santiago Muñoz](https://horizontesia.com) — [Horizontes IA](https://skool.com/horizontes-ia)*
