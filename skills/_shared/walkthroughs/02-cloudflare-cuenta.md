# Cloudflare Account + Wrangler / Cuenta Cloudflare + Wrangler

**EN:** Cloudflare is the company that will host your automation/agent. Think of it as renting space on a computer that's always on — for free, for our use case.

**ES:** Cloudflare es la empresa que va a alojar tu automatización/agente. Piénsalo como rentar espacio en una computadora que siempre está prendida — gratis, para nuestro caso de uso.

---

## Step 1 — Create account / Crear cuenta

1. Go to / Ve a https://dash.cloudflare.com/sign-up
2. Enter your email and a password
3. Verify your email (check your inbox)
4. You don't need to add a domain — just create the account

---

## Step 2 — Log in with Wrangler / Iniciar sesión con Wrangler

Wrangler is Cloudflare's tool for publishing your code from the terminal.
Wrangler es la herramienta de Cloudflare para publicar tu código desde la terminal.

Run / Ejecuta:
```bash
npx wrangler login
```

A browser window will open asking you to authorize. Click **Allow**.
Se abrirá una ventana del browser pidiendo autorización. Haz clic en **Allow**.

When the browser says "You have logged in" — done ✅
Cuando el browser diga "You have logged in" — listo ✅

---

## Step 3 — Verify / Verificar

```bash
npx wrangler whoami
```

Should show your email address.
Debería mostrar tu dirección de email.

---

## Cost / Costo

Cloudflare Workers free tier includes 100,000 requests per day. For one automation/agent running once a day, you'll never exceed this.

El plan gratuito de Cloudflare Workers incluye 100,000 solicitudes por día. Para una automatización/agente que corre una vez al día, nunca lo superarás.

**Cost: $0/month** ✅

---

*Part of [agentari0](https://github.com/lvillanuevapro/agentari0)*
