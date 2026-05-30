# Agente Real / Real Agent

> Builds a REAL AI agent with a reasoning loop, dynamic tool use, and intelligent decision-making.
> Construye un agente de IA REAL con loop de razonamiento, tool use dinámico y toma de decisiones inteligente.

## What makes it "real"? / ¿Qué lo hace "real"?

**EN:** Most things called "agents" are actually fixed pipelines — they always follow the same steps. A real agent has an **Observe → Think → Act → Loop** cycle where the LLM decides what to do at each step based on what it found.

**ES:** La mayoría de las cosas que se llaman "agentes" son en realidad pipelines fijos — siempre siguen los mismos pasos. Un agente real tiene un ciclo **Observar → Pensar → Actuar → Repetir** donde el LLM decide qué hacer en cada paso según lo que encontró.

## Automation vs. Agent / Automatización vs. Agente

| | Automation / Automatización | Real Agent / Agente Real |
|---|---|---|
| Flow | Always the same / Siempre igual | Decided at runtime / Decidido en ejecución |
| On failure | Stops / Para | Tries another way / Intenta otro camino |
| Memory | Basic | Real, persistent |
| Notifies when | Always / Siempre | Only when relevant / Solo cuando es relevante |
| Cost | Lower / Menor | Higher (more LLM calls) / Mayor |
| Complexity | Simple | More setup / Más configuración |

**Use this skill when:** the flow cannot be hardcoded. The agent needs to reason.
**Use `automatizacion` when:** always the same steps. Simpler and cheaper.

## Estimated cost / Costo estimado

| Service | Cost | Type |
|---|---|---|
| Cloudflare Workers | Free | 100K executions/day free |
| OpenAI GPT-4o-mini | ~$5 one-time | More calls than automation, still low cost |
| Apify (if scraping) | Free tier | $5 free credit/month |
| Notifications | $0–5 one-time | |
| **Total/month** | **~$1–10** | More than automation, worth it for the capability |

## How to use / Cómo usar

```bash
# Install (Mac/Linux)
git clone https://github.com/lvillanuevapro/agentari0.git ~/.claude/skills/agentari0

# Install (Windows PowerShell)
git clone https://github.com/lvillanuevapro/agentari0.git "$env:USERPROFILE\.claude\skills\agentari0"
```

Then open Claude Code and write:
- `/agente` or `/agent`
- `"I want a real AI agent that [X]"` / `"Quiero un agente de IA real que [X]"`
- `"something that thinks and decides on its own"` / `"algo que piense y decida solo"`

## Files / Archivos

```
agente/
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
    ├── agent-skeleton.ts             # Base agent with reasoning loop
    ├── wrangler-template.jsonc
    ├── tools/
    │   ├── scrape.ts
    │   ├── rss.ts
    │   ├── memory.ts
    │   ├── notify.ts
    │   └── save-notion.ts
    └── prompts/
        └── system-template.ts
```

---

*Part of [agentari0](https://github.com/lvillanuevapro/agentari0)*
*Pedagogical method inspired by [Santiago Muñoz](https://horizontesia.com) — [Horizontes IA](https://skool.com/horizontes-ia)*
