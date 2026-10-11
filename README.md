# Melon Dev — Vercel (fixed)

## Deploy
1. Upload the project to a Git repository.
2. Import it at https://vercel.com/new.
3. Deploy using the default settings.

## Routes
- `/` — landing page.
- `/raw` — plain-text response from `api/raw.js`.
- `/dump` — a standalone notice page displaying “Fuck You”.

## Fix for “Function Runtimes must have a valid version”
The previous `vercel.json` specified a runtime version in a format Vercel did not accept. This version removes that custom runtime declaration and lets Vercel detect the Node.js runtime for `api/raw.js`.

## Important limitations
The page blocks some common context-menu and keyboard shortcuts as a casual deterrent only. A website cannot reliably disable F12 or prevent someone from downloading HTML/JavaScript; anything sent to a browser can be inspected. Do not put secrets or private keys in client-side code. The `/dump` page is a normal route and does not detect or automatically trigger on a user dumping the site.
