/**
 * @Date: 09/02/2016
 * @author: Javier Fernandez - jfernandez
 */


(function () {

  require.config({
    paths: {
      angular: '../lib/ionic/js/ionic.bundle.min',
      text: '../lib/requirejs-text/text'
    },
    shim: {
      angular: {
        exports: 'angular'
      }
    }
  });

  require([
    'angular',
    'app'
  ], function (angular, app) {
    'use strict';
    app.run(function ($ionicPlatform, $state) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }

        $state.go('landing');
      });
    });

    angular.element().ready(function () {
      angular.bootstrap(document, ['myApp']);
    });

  });
})();



