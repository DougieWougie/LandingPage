// Runs before first paint (classic blocking script, allowed by the CSP's
// script-src 'self') so dark-mode visitors never see a light flash.
// Mirrors the logic in src/hooks/useTheme.js.
(function () {
  var theme;
  try { theme = localStorage.getItem('theme'); } catch (e) { /* storage blocked */ }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
})();
