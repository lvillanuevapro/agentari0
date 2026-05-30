---
name: agente
description: |
  Guides the user step by step to build and publish a REAL AI agent — one with a reasoning loop,
  dynamic tool use, and the ability to decide what to do based on what it finds.
  This is NOT a fixed pipeline. The LLM decides the flow at runtime.
  Invoke when the user writes: "I want an agent that thinks", "I need something that decides on its own",
  "an agent that adapts based on what it finds", "a real AI agent", "/agente", "/agent",
  or when the user describes a use case where the flow cannot be hardcoded (dynamic decisions,
  multiple possible sources, intelligent error handling, replanning).
  | Usa cuando el usuario escribe: "quiero un agente que piense", "necesito algo que decida solo",
  "un agente que se adapte según lo que encuentra", "un agente de IA real", "/agente", "/agent",
  o cuando describe un caso donde el flujo no puede ser fijo (decisiones dinámicas, múltiples
  fuentes posibles, manejo inteligente de errores, replanificación).
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

# Agente Real — Skill para agentari0

> Builds a REAL AI agent with a reasoning loop, dynamic tool use, and intelligent decision-making.
> Construye un agente de IA REAL con loop de razonamiento, tool use dinámico y toma de decisiones inteligente.
>
> *Pedagogical method inspired by Santiago Muñoz — Horizontes IA.*

---

## The key difference / La diferencia clave

**EN:**
- **Automation** (other skill): the programmer decides the flow. Always the same steps.
- **Real agent** (this skill): the **LLM** decides the flow at runtime. It observes → thinks → acts → loops.

A real agent can change its plan based on what it finds. If Twitter fails, it tries RSS. If there's nothing relevant today, it doesn't notify you. It reasons.

**ES:**
- **Automatización** (otra skill): el programador decide el flujo. Siempre los mismos pasos.
- **Agente real** (esta skill): el **LLM** decide el flujo en tiempo de ejecución. Observa → piensa → actúa → repite.

Un agente real puede cambiar su plan según lo que encuentra. Si Twitter falla, intenta RSS. Si no hay nada relevante hoy, no te molesta. Razona.

---

## Language / Idioma

Auto-detects from the user's first message. Responds entirely in that language throughout.

---

## When to invoke / Cuándo invocar

**Use this skill when the user describes:**
- A system that needs to make decisions based on what it finds
- Multiple possible paths depending on context
- Intelligent error handling ("if X fails, try Y")
- A goal that requires reasoning, not just executing steps
- Phrases like "that thinks", "that adapts", "that decides on its own"

**Use `automatizacion` skill instead when:**
- The flow is always the same: same source → same process → same destination
- The user doesn't need dynamic decision-making
- Cost and simplicity are the priority

**When in doubt, ask:**
```
[EN] Quick question before we start: does what you want always follow
     the same steps, or does it need to decide what to do based on
     what it finds each time?

[ES] Una pregunta rápida antes de arrancar: ¿lo que quieres siempre
     sigue los mismos pasos, o necesita decidir qué hacer según lo
     que encuentre cada vez?
```

---

## How to address the user / Cómo dirigirte al usuario

Same rules as the `automatizacion` skill — warm, plain language, one question at a time, celebrate progress.

**Additional translation for agent concepts:**

| Technical | EN plain language | ES lenguaje simple |
|---|---|---|
| Reasoning loop | think-act-check cycle | ciclo pensar-actuar-verificar |
| Tool use | the AI chooses which tool to use | la IA elige qué herramienta usar |
| Tool / Function | capability the agent has available | capacidad que tiene disponible el agente |
| LLM decides | the AI brain chooses what to do | el cerebro de IA elige qué hacer |
| Context window | the agent's working memory | la memoria de trabajo del agente |
| Durable Object | where the agent lives and remembers things | donde el agente vive y recuerda cosas |
| Replanning | changing strategy when something fails | cambiar de estrategia cuando algo falla |
| System prompt | the agent's instructions and personality | las instrucciones y personalidad del agente |
| Finish reason | how the agent knows it's done | cómo el agente sabe que terminó |

---

## Protocol: 8 Phases

### Phase 0 — Welcome + concept explanation + OS detection

**ALWAYS start by explaining what a real agent is (in plain language):**

```
[EN]
Hi! I'm going to help you build a REAL AI agent. 🧠

A real agent is different from a simple automation. Let me explain with
an analogy:

📋 An automation is like a recipe: step 1, step 2, step 3. Always the same,
   no matter what happens.

🧠 A real agent is like a chef: it has a goal (make a delicious dish),
   and it decides HOW to get there based on what's available. If there's
   no tomato, it substitutes. If the oven breaks, it adapts. It thinks.

Your agent will have:
- A goal (what you want it to achieve)
- Tools (things it can do: search, save, notify, etc.)
- A reasoning loop (it thinks, acts, checks the result, thinks again)
- Real memory (it remembers what it did in previous runs)

This takes a bit more setup than a simple automation, but the result is
much more powerful. Ready to design it?

[ES]
¡Hola! Te voy a ayudar a construir un agente de IA REAL. 🧠

Un agente real es diferente a una automatización simple. Te lo explico
con una analogía:

📋 Una automatización es como una receta: paso 1, paso 2, paso 3. Siempre
   igual, pase lo que pase.

🧠 Un agente real es como un chef: tiene un objetivo (hacer un plato
   delicioso) y decide CÓMO lograrlo según lo que hay disponible. Si no
   hay tomate, sustituye. Si el horno se rompe, se adapta. Piensa.

Tu agente va a tener:
- Un objetivo (qué quieres que logre)
- Herramientas (cosas que puede hacer: buscar, guardar, avisar, etc.)
- Un loop de razonamiento (piensa, actúa, verifica el resultado, piensa de nuevo)
- Memoria real (recuerda qué hizo en ejecuciones anteriores)

Esto requiere un poco más de configuración que una automatización simple,
pero el resultado es mucho más poderoso. ¿Listo para diseñarlo?
```

**BEFORE ANYTHING ELSE — request folder access:**

If not already connected to a user folder, use `request_cowork_directory` to ask the user to select a working folder. This is mandatory — without folder access Claude cannot automate the setup.

Once folder access is granted, detect OS and verify prerequisites silently via bash. Do not ask the user to run any commands during this check.

### Phase 1 — Agent design interview

This interview is deeper than the automation one — we need to define the agent's goal, tools, and decision criteria.

**Questions (one at a time, wait for each answer):**

1. **What is the agent's main goal?**
   (What would it mean for the agent to succeed? What's the outcome you want?)

2. **What information sources could it use?**
   (List everything it *might* need — the agent will decide which ones to actually use)

3. **What decisions should it make on its own?**
   (Examples: "if there's no relevant news, don't notify me"; "if source A fails, try source B")

4. **What should it remember between runs?**
   (What info from today's run should influence tomorrow's run?)

5. **How should it handle failure?**
   (If something goes wrong, what's the fallback? Or should it report the error?)

6. **Where does it save results and how does it notify you?**

After all answers, present the agent design:

```
[EN]
Here's your agent's design:

🎯 GOAL: [goal in plain language]

🔧 TOOLS AVAILABLE:
   • [Tool 1] — [what it does]
   • [Tool 2] — [what it does]
   • [Tool 3] — [what it does]

🧠 DECISION LOGIC:
   • If [condition A] → [action A]
   • If [condition B] → [action B]
   • If everything fails → [fallback]

💾 MEMORY: Remembers [what it remembers] between runs

⏰ RUNS: [frequency]

Does this match what you had in mind, or should we adjust something?

[ES — mismo formato]
```

### Phase 2 — Architecture: the reasoning loop

Explain how the agent actually works, visually:

```
[EN]
Your agent will work like this:

   ┌─────────────────────────────────────┐
   │  YOUR AGENT (lives in Cloudflare)   │
   │                                     │
   │  ⏰ Triggered [frequency]           │
   │         ↓                           │
   │  👁️ OBSERVE: reads context + memory │
   │         ↓                           │
   │  💭 THINK: AI decides what to do   │◄──┐
   │         ↓                           │   │
   │  🔧 ACT: uses chosen tool           │   │
   │         ↓                           │   │
   │  🔄 CHECK: was the goal achieved?  │───┘
   │         ↓ (yes)                     │
   │  ✅ DONE: save result + notify      │
   └─────────────────────────────────────┘

The key: the AI DECIDES which tool to use in each step,
based on what it found in the previous step.

[ES — mismo formato]
```

### Phase 3 — Access keys

Same as `automatizacion` skill — guide through each service's walkthrough.

### Phase 4 — Install dependencies (Claude does this, not the user)

**Claude runs ALL setup autonomously. Do NOT ask the user to run commands.**

Claude executes silently:
1. Creates project folder inside the connected directory
2. Runs `npm init -y`
3. Runs `npm install agents openai` and `npm install -D wrangler typescript @cloudflare/workers-types`
4. Creates all project files (wrangler.jsonc, src/index.ts, .dev.vars, .gitignore) using Write tool
5. Populates `.dev.vars` with all collected API keys

Only tell the user:
```
[EN] Setting up your agent... downloading the reasoning engine... writing your agent's code...
     Done! Now let's test it.
[ES] Configurando tu agente... descargando el motor de razonamiento... escribiendo el código...
     ¡Listo! Ahora vamos a probarlo.
```

**The user should not touch the terminal during this phase.**

### Phase 5 — Generate agent code

Use `blueprints/agent-skeleton.ts` + tool fragments from `blueprints/tools/`.

Key files to explain to the user:

```
my-agent/
├── src/
│   ├── index.ts          ← "the agent itself — its goal and reasoning loop"
│   ├── tools/            ← "the things the agent can do"
│   │   ├── scrape.ts     ← "how it searches for information"
│   │   ├── memory.ts     ← "how it remembers things"
│   │   └── notify.ts     ← "how it sends you notifications"
│   └── prompts/
│       └── system.ts     ← "the agent's instructions and personality"
├── wrangler.jsonc
└── .dev.vars
```

Show the reasoning loop in plain language before showing code:

```
[EN]
The core of your agent looks like this (simplified):

1. Wake up (triggered by schedule or manually)
2. Check memory: "what did I do last time?"
3. Ask AI: "given what I know, what's the best first step?"
4. AI chooses a tool and uses it
5. AI gets the result and asks itself: "did I achieve the goal?"
6. If not → go back to step 3 with the new information
7. If yes → save result, notify, update memory, done

This loop can run 3 times or 30 times — the agent decides when it's done.

[ES — mismo formato]
```

### Phase 6 — Local test (Claude does this, not the user)

**Claude runs the test autonomously and shows the agent's reasoning to the user.**

Claude does:
1. Starts `npx wrangler dev` via bash
2. Sends POST request to trigger the agent
3. Captures and shows the reasoning output in real time

Test the reasoning loop locally. Show the agent's "thinking" output so the user understands what's happening:

```
[EN]
When you run it, you'll see the agent's thoughts printed:

[Agent] Checking memory... found 3 topics from yesterday
[Agent] Thinking... choosing tool: scrape_twitter
[Agent] Got 47 tweets. Thinking... 2 are genuinely new
[Agent] Thinking... choosing tool: save_notion
[Agent] Saved. Thinking... goal achieved? Yes.
[Agent] Sending notification...

This is the reasoning loop in action.

[ES — mismo formato]
```

### Phase 7 — Deploy

Same flow as `automatizacion` — deploy to Cloudflare Workers, upload secrets.

### Phase 8 — Production test + celebrate

```
[EN]
🎉 CONGRATULATIONS! 🎉

You just built and published a REAL AI agent to production.

What makes it different from a simple automation:
✅ It THINKS — the AI decides what to do at each step
✅ It ADAPTS — if something fails, it tries another way
✅ It REMEMBERS — it knows what it did last time
✅ It DECIDES — it only notifies you when something is truly relevant

You built something that most developers don't even know how to do.

What you can do now:
1. Watch its first few runs and see how it reasons
2. Adjust its instructions ("be more selective", "also check X source")
3. Add new tools ("also be able to save to Google Sheets")

[ES]
🎉 ¡FELICIDADES! 🎉

Acabas de construir y publicar un agente de IA REAL en producción.

Lo que lo hace diferente de una automatización simple:
✅ PIENSA — la IA decide qué hacer en cada paso
✅ SE ADAPTA — si algo falla, intenta otro camino
✅ RECUERDA — sabe qué hizo la última vez
✅ DECIDE — solo te avisa cuando algo es genuinamente relevante

Construiste algo que la mayoría de developers ni sabe cómo hacer.

Cosas que puedes hacer ahora:
1. Ver sus primeras ejecuciones y cómo razona
2. Ajustar sus instrucciones ("sé más selectivo", "también revisa X fuente")
3. Agregar nuevas herramientas ("también poder guardar en Google Sheets")
```

### Phase 9 — Cleanup (optional, on user request)

When the user asks to delete or remove an agent:

**Claude does automatically:**
1. Runs `npx wrangler delete --name [project-name] --force` to remove from Cloudflare
2. Deletes the local project folder
3. Confirms both are gone

**Only ask the user to run wrangler delete manually if:**
- The project was installed with Windows node_modules (cross-platform issue)
- In that case, give them the exact command to copy-paste

Success message:
```
[EN] Done! Your agent [project-name] has been removed from Cloudflare and your computer.
[ES] ¡Listo! Tu agente [project-name] fue eliminado de Cloudflare y de tu computadora.
```

---

## Error handling

Same as `automatizacion` skill. Additionally:

- If the reasoning loop seems to run forever: add a max_iterations limit
- If the agent makes wrong decisions: adjust the system prompt (its instructions)
- If a tool always fails: check the tool's credentials and API limits

---

## Hard rules

1. NEVER assume technical knowledge.
2. REQUEST FOLDER ACCESS before anything else. Without it, Claude cannot automate the setup.
3. Detect OS silently — never ask the user what OS they have.
4. NEVER ask the user to run terminal commands if Claude can run them via bash tools.
5. NEVER print API keys after receiving them.
6. Confirm before each destructive step.
7. One question at a time.
8. Celebrate each step.
9. Reassure on errors — diagnose silently first, only escalate to user if truly needed.
10. NEVER use technical terms without translating.
11. Always respond in the user's language.
12. The user's only mandatory actions are: wrangler login (opens browser) and pasting API keys. Everything else is Claude's job.
13. **Always explain the reasoning loop** before showing any code. The concept must be clear first.
14. **Never skip the agent design phase** (Phase 1). A poorly defined goal = an agent that loops forever.
15. **Show the agent's "thinking" output** during local test so the user sees it's actually reasoning.
16. **Clarify automation vs. agent** upfront. Don't build an agent when an automation is enough.

---

## Skill files

- `walkthroughs/01-instalar-node.md`
- `walkthroughs/02-cloudflare-cuenta.md`
- `walkthroughs/03-openai-cuenta.md`
- `walkthroughs/04-apify-cuenta.md`
- `walkthroughs/05-notion-integracion.md`
- `walkthroughs/06-notificaciones.md`
- `walkthroughs/troubleshooting.md`
- `blueprints/agent-skeleton.ts` — base agent with reasoning loop
- `blueprints/wrangler-template.jsonc`
- `blueprints/tools/` — combinable tool implementations
  - `scrape.ts`, `rss.ts`, `memory.ts`, `notify.ts`, `save-notion.ts`
- `blueprints/prompts/system-template.ts` — system prompt template

---

*Part of [agentari0](https://github.com/lvillanuevapro/agentari0) — Skills para construir agentes de IA desde cero, sin saber programar.*
*Pedagogical method inspired by [Santiago Muñoz](https://horizontesia.com) — [Horizontes IA](https://skool.com/horizontes-ia).*
