// Files placed in the public/ folder are served as-is, but Vite doesn't
// automatically prefix raw string paths with the app's base path (unlike
// imported assets). This helper does that manually so images and models
// resolve correctly both locally (base "/") and on GitHub Pages
// (base "/JoaquinPalmerosChapa.Github.io/").
export function asset(path) {
  const base = import.meta.env.BASE_URL
  const clean = String(path).replace(/^\/+/, '')
  return base.replace(/\/+$/, '/') + clean
}
