// Restores the URL saved by 404.html for GitHub Pages SPA routing.
// Must run before React hydrates so the correct route is active.
(function () {
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
})();
