/**
 * Pre-paint theme hydration — reads the saved preference and sets
 * `data-theme` on <html> before React mounts so the first frame of
 * the page matches the user's chosen theme (no flash of dark/light).
 *
 * Kept as an external file (rather than an inline <script>) so the
 * production CSP can be `script-src 'self'` without `'unsafe-inline'`.
 * The small extra request cost is worth a tighter policy.
 *
 * Storage key `nt_theme` matches the value written by the theme toggle
 * in the SPA; keep them in sync when either changes.
 */
(function () {
  try {
    var t = localStorage.getItem("nt_theme");
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (_) {}
})();
