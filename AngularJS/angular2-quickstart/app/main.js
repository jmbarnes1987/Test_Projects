(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
	//ng.platform.browser.bootstrap(app.AppComponent2);
	//ng.platform.browser.bootstrap(app.AppComponent3);
  });
})(window.app || (window.app = {}));