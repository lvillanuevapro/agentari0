# Troubleshooting — Agente Real / Real Agent

---

## EN — Common errors and fixes

### The agent loops forever and never finishes
The goal is not clear enough, or the "done" tool is missing.
Fix: review the system prompt. Add a clear stopping condition: "when you have found 3 relevant items, you are done."

### "Maximum context length exceeded"
The agent ran too many iterations and filled its memory.
Fix: add `max_iterations = 10` (or similar) to stop the loop if it runs too long.

### The agent always chooses the same tool
The tool descriptions are not distinct enough. The LLM needs clear descriptions to choose correctly.
Fix: make each tool's description more specific about WHEN to use it vs. the others.

### The agent makes a decision you disagree with
This is a system prompt issue, not a code issue. The agent is doing what its instructions say.
Fix: adjust the system prompt to be more specific: "only notify if the relevance score is above 7/10."

### "Durable Object not found" or state errors
The Durable Object is not properly configured in `wrangler.jsonc`.
Fix: check that the `durable_objects` binding is declared and that the class name matches exactly.

### Agent runs successfully locally but fails in production
Usually a missing secret in production.
Fix: run `npx wrangler secret list` and compare with your `.dev.vars` file. Upload any missing ones.

### The agent notifies even when there's nothing relevant
The system prompt is not strict enough about the notification condition.
Fix: add explicit criteria: "only call send_notification if you found at least one item that is genuinely new and important. If nothing qualifies, call done without notifying."

---

## ES — Errores comunes y soluciones

### El agente loopea para siempre y nunca termina
El objetivo no está suficientemente claro, o falta la herramienta "done" (terminado).
Solución: revisar el system prompt. Agregar una condición de parada clara: "cuando hayas encontrado 3 items relevantes, terminaste."

### "Maximum context length exceeded"
El agente hizo demasiadas iteraciones y llenó su memoria.
Solución: agregar `max_iterations = 10` (o similar) para detener el loop si corre demasiado.

### El agente siempre elige la misma herramienta
Las descripciones de las herramientas no son suficientemente distintas. El LLM necesita descripciones claras para elegir correctamente.
Solución: hacer la descripción de cada herramienta más específica sobre CUÁNDO usarla versus las otras.

### El agente toma una decisión con la que no estás de acuerdo
Es un problema del system prompt, no del código. El agente hace lo que sus instrucciones dicen.
Solución: ajustar el system prompt para ser más específico: "solo notificar si el score de relevancia es mayor a 7/10."

### "Durable Object not found" o errores de estado
El Durable Object no está bien configurado en `wrangler.jsonc`.
Solución: verificar que el binding `durable_objects` esté declarado y que el nombre de la clase coincida exactamente.

### El agente funciona bien localmente pero falla en producción
Generalmente falta algún secret en producción.
Solución: ejecutar `npx wrangler secret list` y comparar con tu archivo `.dev.vars`. Subir los que falten.

### El agente notifica aunque no haya nada relevante
El system prompt no es suficientemente estricto sobre la condición de notificación.
Solución: agregar criterios explícitos: "solo llama a send_notification si encontraste al menos un item genuinamente nuevo e importante. Si nada califica, llama a done sin notificar."

---

*If you can't resolve it: describe the error, paste the agent's output/thinking, and what you were trying to do.*
*Si no puedes resolverlo: describe el error, pega el output/razonamiento del agente, y qué estabas intentando hacer.*
