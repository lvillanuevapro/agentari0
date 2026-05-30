# agentari0

> Skills para construir agentes de IA desde cero, sin saber programar.
> Skills to build AI agents from scratch, without knowing how to program.

---

## ¿Qué es esto? / What is this?

**ES:** Una colección de skills para Claude Code que guían a cualquier persona — sin importar su nivel técnico — a construir automatizaciones y agentes de IA reales, paso a paso, en su idioma.

**EN:** A collection of Claude Code skills that guide anyone — regardless of technical level — to build real automations and AI agents, step by step, in their language.

---

## La distinción más importante / The most important distinction

La mayoría de las cosas que se llaman "agentes" no lo son. Hay dos tipos de cosas muy distintas:
Most things called "agents" are not really agents. There are two very different things:

| | Automatización / Automation | Agente Real / Real Agent |
|---|---|---|
| Flujo / Flow | Fijo, siempre igual / Fixed, always the same | Decidido en ejecución / Decided at runtime |
| Si algo falla / On failure | Para / Stops | Intenta otro camino / Tries another way |
| Memoria / Memory | Básica / Basic | Real, persistente / Real, persistent |
| Cuándo avisa / When it notifies | Siempre / Always | Solo cuando es relevante / Only when relevant |
| Costo / Cost | Menor / Lower | Mayor / Higher |

**Usa `automatizacion`** cuando el flujo es siempre el misma. Simple, barato, suficiente para el 80% de los casos.
**Use `automatizacion`** when the flow is always the same. Simple, cheap, enough for 80% of cases.

**Usa `agente`** cuando el sistema necesita razonar y decidir dinámicamente qué hacer.
**Use `agente`** when the system needs to reason and dynamically decide what to do.

---

## Skills disponibles / Available skills

### ⚙️ [`automatizacion`](./skills/automatizacion/)
Construye un pipeline programado que corre solo en internet.
Builds a scheduled pipeline that runs on its own on the internet.

**Ejemplos / Examples:**
- Resumen diario de noticias / Daily news brief
- Alerta si un sitio web cambia / Alert when a website changes
- Generador de ideas de contenido / Content idea generator
- Clasificador de emails / Email classifier

### 🧠 [`agente`](./skills/agente/)
Construye un agente de IA real con loop de razonamiento y tool use dinámico.
Builds a real AI agent with a reasoning loop and dynamic tool use.

**Cuándo usarlo / When to use it:**
- El flujo no puede ser fijo — depende de lo que encuentre / The flow can't be fixed — depends on what it finds
- Necesita manejar errores inteligentemente / Needs to handle errors intelligently
- Debe recordar y aprender entre ejecuciones / Must remember and learn between runs

### 📋 [`_template`](./skills/\_template/)
Plantilla base para crear nuevas skills siguiendo el estándar de agentari0.
Base template for creating new skills following the agentari0 standard.

---

## Instalación / Installation

```bash
# Mac / Linux
git clone https://github.com/lvillanuevapro/agentari0.git ~/.claude/skills/agentari0

# Windows (PowerShell)
git clone https://github.com/lvillanuevapro/agentari0.git "$env:USERPROFILE\.claude\skills\agentari0"
```

Luego abre Claude Code en cualquier proyecto y escribe:
Then open Claude Code in any project and write:

- `/automatizacion` — para construir una automatización
- `/agente` — para construir un agente real
- O simplemente describe lo que quieres en lenguaje natural / Or just describe what you want in natural language

---

## Requisitos / Requirements

- **Claude Code** — descarga gratis desde / download free from https://claude.com/code
- **Git** — https://git-scm.com
- **Node.js** v20+ — https://nodejs.org (las skills te ayudan a instalarlo / skills help you install it)

---

## Cómo contribuir / How to contribute

¿Quieres agregar una nueva skill? Usa la plantilla en `skills/_template/` como base.
Want to add a new skill? Use the template in `skills/_template/` as your starting point.

Cada skill necesita:
Each skill needs:
- `SKILL.md` — el protocolo conversacional / the conversational protocol
- `README.md` — descripción en lenguaje simple / plain language description
- `walkthroughs/` — guías paso a paso por servicio / step-by-step guides per service
- `walkthroughs/troubleshooting.md` — errores comunes / common errors
- `blueprints/` — código/config reutilizable / reusable code/config

---

## Créditos / Credits

El método pedagógico de este repositorio está inspirado en el trabajo de **Santiago Muñoz** ([Horizontes IA](https://horizontesia.com)):

The pedagogical method of this repository is inspired by the work of **Santiago Muñoz** ([Horizontes IA](https://horizontesia.com)):

- Repositorio original / Original repo: [santmun/crear-agente](https://github.com/santmun/crear-agente)
- Comunidad / Community: [Horizontes IA en Skool](https://skool.com/horizontes-ia)
- Twitter: [@tazeebtw](https://twitter.com/tazeebtw)

agentari0 extiende ese método con la distinción entre automatizaciones y agentes reales, soporte bilingüe, y un template para construir nuevas skills.

agentari0 extends that method with the distinction between automations and real agents, bilingual support, and a template for building new skills.

---

## Licencia / License

MIT — úsalo, modifícalo, distribúyelo. Si lo compartes, da crédito.
MIT — use it, modify it, distribute it. If you share it, give credit.
