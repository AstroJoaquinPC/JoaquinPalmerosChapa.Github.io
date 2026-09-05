# Portfolio

A React + Vite portfolio site, styled as an engineering test log. See setup steps below to run it locally and deploy it to GitHub Pages.

## 1. Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## 2. Before you deploy — edit these

- `src/App.jsx` — swap the placeholder email/GitHub/LinkedIn links in the `<footer>` at the bottom for your real ones, and add real project links if you want the entries to link out to repos or write-ups.
- `vite.config.js` — the `base` path must match your repo name (see step 4).

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 4. Set the Vite base path

In `vite.config.js`, set `base` to match your repo name:

- Repo `github.com/you/portfolio` → `base: '/portfolio/'`
- Repo `github.com/you/you.github.io` (a User Page) → `base: '/'`

Commit and push this change if you edit it after the initial push.

## 5. Enable GitHub Pages

In your repo on GitHub: **Settings → Pages → Source → GitHub Actions**.

The included workflow at `.github/workflows/deploy.yml` builds the site and deploys it automatically on every push to `main`. After the first push, check the **Actions** tab to watch it build — once it's green, your site is live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

(or `https://YOUR_USERNAME.github.io/` if you used a `you.github.io` User Page repo).
