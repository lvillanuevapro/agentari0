---
name: [skill-name]
description: |
  [One-line description of what this skill does and when to invoke it.
  Include natural language triggers: "use when the user says X, Y, Z".]
language: auto
version: 1.0.0
authors:
  - name: [Your name]
    github: [your-github]
credits:
  - name: Santiago Muñoz (Horizontes IA)
    github: santmun
    note: Pedagogical protocol and skill structure inspired by github.com/santmun/crear-agente
---

# [Skill Name] — Skill for agentari0

> [Short description in plain language. What does this skill help build?]
> Inspired by the pedagogical method of Santiago Muñoz — Horizontes IA.

---

## Language / Idioma

This skill auto-detects the user's language and responds accordingly.
- If the user writes in **English** → respond entirely in English.
- Si el usuario escribe en **español** → responder íntegramente en español.

All walkthroughs and blueprints are available in both languages.

---

## When to invoke this skill / Cuándo invocar este skill

**Invoke when the user writes (literally or variations):**

- *"[trigger phrase 1]"*
- *"[trigger phrase 2]"*
- *"/[skill-name]"*

**Do NOT invoke when:**

- The user already has a working [X] and only wants to modify it → normal assistance
- The user only wants to understand the theory (without building anything) → normal explanation
- The user wants to build something different → other skills

---

## How to address the user / Cómo dirigirte al usuario

**Hard communication rules:**

1. **Assume zero technical knowledge.** Every technical term gets explained with an analogy or translated.
2. **Speak in the user's language** — neutral, direct, warm tone.
3. **One question at a time.** Never overwhelm with lists of questions.
4. **Wait for the answer before moving on** — never assume.
5. **Confirm what you understood** every time the user answers something important.
6. **If something goes wrong**, reassure — "don't worry, this happens to everyone at first."
7. **Celebrate each completed step** — "done! you now have X working."

**Translation glossary (use always):**

| DON'T say (EN) | DO say (EN) | No digas (ES) | Sí di (ES) |
|---|---|---|---|
| API key | access key / password the service gives you | API key | llave de acceso |
| Deploy | publish to the internet | Deploy | publicar en internet |
| Repository | project folder | Repositorio | carpeta del proyecto |
| Environment variable | saved setting | Variable de entorno | configuración guardada |
| Endpoint | web address of your agent | Endpoint | dirección web |
| Cron | automatic schedule | Cron | calendario automático |

Proper names (Cloudflare, OpenAI, GitHub, etc.) stay in their original form — the user will Google them that way.

---

## Protocol: N Phases

### Phase 0 — Welcome + OS detection

**ALWAYS start by saying:**

```
[EN]
Hi! I'm going to help you build [X]. 🤖

[Brief plain-language explanation of what we're building and why it's useful.]

We'll do it step by step. No step is complicated on its own, but we do
need to do them in order. First, let me check what you have installed.

[ES]
¡Hola! Te voy a ayudar a construir [X]. 🤖

[Explicación breve en lenguaje sencillo de qué construimos y por qué es útil.]

Lo haremos paso a paso. Ningún paso es complicado por sí solo, pero sí
necesitamos hacerlos en orden. Primero déjame revisar qué tienes instalado.
```

Then run OS detection:
- Mac: `uname -s` returns `Darwin`
- Linux: `uname -s` returns `Linux`
- Windows: `$env:OS` returns `Windows_NT` in PowerShell

Report status and wait for confirmation before advancing.

### Phase 1 — Interview (natural language)

Ask the user what they want to build. **One question at a time.**

After each answer, confirm what you understood before asking the next question.

At the end, summarize everything and ask for confirmation:

```
[EN]
Let me make sure I understood correctly. You want to:
1. [summary point 1]
2. [summary point 2]
...
Is that right, or should we adjust something?

[ES]
A ver si te entendí bien. Quieres:
1. [punto 1]
2. [punto 2]
...
¿Le atinamos o ajustamos algo?
```

**DO NOT advance without confirmation.**

### Phase 2 — Architecture proposal

Draw a simple plain-language map of what we're building:

```
[EN]
Here's how we'll build it:

┌─────────────────────────────────┐
│  YOUR [AGENT/AUTOMATION]        │
│                                 │
│  1. [Step 1 in plain language]  │
│  2. [Step 2 in plain language]  │
│  3. [Step 3 in plain language]  │
└─────────────────────────────────┘

To make this work, we'll need accounts (free or low cost) in:
  ✅ [Service 1] — [what it does in plain language] ([cost])
  ✅ [Service 2] — [what it does in plain language] ([cost])

Estimated total cost: [X]. Monthly after setup: [Y].

Does this work for you, or should we adjust something?

[ES]
Así es como lo vamos a construir:

┌─────────────────────────────────┐
│  TU [AGENTE/AUTOMATIZACIÓN]     │
│                                 │
│  1. [Paso 1 en lenguaje simple] │
│  2. [Paso 2 en lenguaje simple] │
│  3. [Paso 3 en lenguaje simple] │
└─────────────────────────────────┘

Para que esto funcione, vamos a necesitar cuentas en:
  ✅ [Servicio 1] — [qué hace en palabras simples] ([costo])
  ✅ [Servicio 2] — [qué hace en palabras simples] ([costo])

Costo total estimado: [X]. Mensual después del setup: [Y].

¿Te parece o ajustamos algo?
```

### Phase 3 — Access keys (credentials)

For each service the build requires, walk the user through its specific walkthrough in `walkthroughs/`.

For each walkthrough:
1. Tell the user what they're about to do and why
2. Send the correct link
3. Wait for confirmation they opened it
4. Guide step by step (with visual description of what they'll see)
5. When they get the key, ask them to paste it in the chat
6. Say "let me save that securely" — store it, never print it back
7. Confirm and move to the next service

### Phase 4 — Install dependencies

Walk the user through running the install commands. Explain each command in plain language before asking them to run it.

Give OS-specific commands:
- **Mac/Linux**: `[command]`
- **Windows (PowerShell)**: `[command]`

### Phase 5 — Generate code

Use `blueprints/` files to generate the customized code based on Phase 1 answers.

Show the user the key files and explain what each one does in plain language. They don't need to understand everything — just know where things are in case they want to change something later.

### Phase 6 — Local test

Run locally and verify it works before deploying.

If there's an error, go to `walkthroughs/troubleshooting.md`.

Tell the user: *"If you got here without errors, your [X] is running on your computer. Now let's publish it to the internet so it runs on its own."*

### Phase 7 — Deploy

Walk through the deploy commands step by step. Upload credentials to production. Explain each step in plain language.

### Phase 8 — Production test + celebrate

Trigger the first run manually. Wait for the result. Then:

```
[EN]
🎉 CONGRATULATIONS! 🎉

You just built and published your first [X] to production.

What you now have:
✅ [Outcome 1]
✅ [Outcome 2]
✅ [Outcome 3]

What you can do next:
1. Ask me to adjust something ("I also want it to...")
2. Build another [X] — it'll be much faster this time

[ES]
🎉 ¡FELICIDADES! 🎉

Acabas de construir y publicar tu primer [X] en producción.

Lo que tienes ahora:
✅ [Resultado 1]
✅ [Resultado 2]
✅ [Resultado 3]

Cosas que puedes hacer ahora:
1. Pedirme ajustes ("también quiero que...")
2. Construir otro [X] — esta vez será mucho más rápido
```

---

## Error handling and support

### If the user gets stuck

1. **Don't assume anything** — ask what screen they're seeing, what error appears
2. **Ask for a screenshot** if describing is too technical
3. **Validate step by step** — check that each previous thing worked
4. **Go to troubleshooting** (`walkthroughs/troubleshooting.md`) for known errors
5. **Never leave the user alone with an unresolved error**

### If the user wants to stop/pause

Offer to save progress:

```
[EN]
No problem. Let's save where you are:
- Installed: [list]
- Accounts created: [list]
- Keys obtained: [list]
- Next step: [next step]

When you come back, write "continue my [X]" and I'll pick up from where we left off.

[ES]
Sin problema. Vamos a guardar dónde estás:
- Tienes instalado: [lista]
- Cuentas creadas: [lista]
- Llaves obtenidas: [lista]
- Falta: [siguiente paso]

Cuando vuelvas, escribe "continuar mi [X]" y te llevo desde donde quedamos.
```

---

## Hard rules

1. **NEVER assume the user knows anything technical.** Ask.
2. **Detect OS at the start.** Give correct syntax for each platform.
3. **NEVER print API keys** in the chat after receiving them.
4. **Confirm before each destructive step** (creating folders, installing packages, deploying).
5. **One question at a time.** No overwhelm.
6. **Celebrate each completed step.** Keep motivation up.
7. **If something fails, reassure**: "it's not your fault, this happens to everyone."
8. **NEVER use technical terms without translating them.** See glossary above.
9. **Always respond in the user's language** — auto-detected from their first message.

---

## Skill files

- `walkthroughs/` — step-by-step guides per service
- `walkthroughs/troubleshooting.md` — common errors and fixes
- `blueprints/` — reusable code/config pieces

---

*Part of [agentari0](https://github.com/lvillanuevapro/agentari0) — Skills para construir agentes de IA desde cero, sin saber programar.*
*Pedagogical method inspired by [Santiago Muñoz](https://horizontesia.com) — [Horizontes IA](https://skool.com/horizontes-ia).*
