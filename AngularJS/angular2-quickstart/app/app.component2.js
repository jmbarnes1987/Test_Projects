(function(app) {
  app.AppComponent2 =
    ng.core.Component({
      selector: 'my-app2',
      template: '<h1>My Second Angular 2 App!</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));

(function(app) {
  app.AppComponent3 =
    ng.core.Component({
      selector: 'my-app3',
      template: '<h1>My Third Angular 2 App!</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));