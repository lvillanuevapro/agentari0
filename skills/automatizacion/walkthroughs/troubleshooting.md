# Troubleshooting — Automatización / Automation

---

## EN — Common errors and fixes

### "command not found: node"
Node.js is not installed. Go to `01-instalar-node.md` and follow the steps for your OS.

### "command not found: wrangler"
Run: `npm install -g wrangler`

### "Error: No account id"
You haven't logged in to Cloudflare. Run: `npx wrangler login` and authorize in the browser that opens.

### "Error: Missing required field"
One of your access keys is missing or wrong. Check your `.dev.vars` file — make sure all keys are there with no extra spaces.

### "fetch failed" or "could not reach [URL]"
The site you're trying to scrape may be blocking the request. Options:
1. Try with Apify (see `04-apify-cuenta.md`)
2. Check if the URL is correct
3. Try running locally first: does it work on your machine?

### The automation runs but nothing arrives
1. Check that the notification service (Pushover/email) credentials are correct
2. Check the Cloudflare dashboard logs: Workers → your worker → Logs
3. Make sure the cron schedule is set correctly in `wrangler.jsonc`

### "TypeError: Cannot read properties of undefined"
The scrape returned empty. The site structure may have changed, or the site blocked the request. Check the URL manually in your browser first.

---

## ES — Errores comunes y soluciones

### "command not found: node"
Node.js no está instalado. Ve a `01-instalar-node.md` y sigue los pasos para tu sistema operativo.

### "command not found: wrangler"
Ejecuta: `npm install -g wrangler`

### "Error: No account id"
No iniciaste sesión en Cloudflare. Ejecuta: `npx wrangler login` y autoriza en el browser que se abre.

### "Error: Missing required field"
Falta una de tus llaves de acceso o está mal escrita. Revisa tu archivo `.dev.vars` — asegúrate de que todas las llaves estén ahí, sin espacios extra.

### "fetch failed" o "could not reach [URL]"
El sitio que intentas scrapear puede estar bloqueando la solicitud. Opciones:
1. Intentar con Apify (ver `04-apify-cuenta.md`)
2. Verificar que la URL es correcta
3. Intentar correr localmente primero: ¿funciona en tu máquina?

### La automatización corre pero no llega nada
1. Verificar que las credenciales del servicio de notificación están correctas
2. Revisar los logs en el dashboard de Cloudflare: Workers → tu worker → Logs
3. Asegurarse de que el horario (cron) está bien configurado en `wrangler.jsonc`

### "TypeError: Cannot read properties of undefined"
El scrape devolvió vacío. La estructura del sitio puede haber cambiado, o el sitio bloqueó la solicitud. Primero revisa la URL manualmente en tu browser.

---

*If you can't resolve it: describe the error and what you were doing to Claude, paste the full error message.*
*Si no puedes resolverlo: describe el error y qué estabas haciendo, pega el mensaje completo del error.*
