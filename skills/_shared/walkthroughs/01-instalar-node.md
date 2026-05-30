# Instalar Node.js / Install Node.js

**EN:** Node.js is the engine that runs your automation/agent on your computer before publishing it to the internet. Think of it as the "runtime" — the thing that makes your code actually execute.

**ES:** Node.js es el motor que corre tu automatización/agente en tu computadora antes de publicarlo en internet. Piénsalo como el "motor de arranque" — lo que hace que tu código realmente funcione.

---

## Mac

1. Go to https://nodejs.org and download the **LTS** version (the one that says "Recommended For Most Users")
2. Open the downloaded file and follow the installer
3. When done, open **Terminal** (search "Terminal" in Spotlight) and run:
   ```bash
   node --version
   ```
4. You should see something like `v20.x.x` — that means it worked ✅

**ES:** Ve a https://nodejs.org y descarga la versión **LTS** (la que dice "Recommended For Most Users"). Abre el archivo descargado y sigue el instalador. Cuando termine, abre **Terminal** y ejecuta `node --version`. Deberías ver algo como `v20.x.x` ✅

---

## Windows

1. Go to https://nodejs.org and download the **LTS** version
2. Run the `.msi` installer — accept all defaults
3. Open **PowerShell** (search "PowerShell" in Start) and run:
   ```powershell
   node --version
   ```
4. You should see `v20.x.x` ✅

**ES:** Ve a https://nodejs.org, descarga la versión **LTS**, ejecuta el instalador `.msi` aceptando todo. Luego abre **PowerShell** y ejecuta `node --version`. Deberías ver `v20.x.x` ✅

---

## Linux

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version
```

---

## Verification / Verificación

After installing, run both:
```bash
node --version   # should show v20.x.x or higher
npm --version    # should show 10.x.x or higher
```

If both commands return version numbers, you're ready to move on.
Si ambos comandos muestran números de versión, estás listo para continuar.

---

*Part of [agentari0](https://github.com/lvillanuevapro/agentari0)*
