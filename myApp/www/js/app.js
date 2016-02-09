/**
 * @Date: 09/02/2016
 * @author: Javier Fernandez - jfernandez
 * @returns {myAPP}
 */

(function () {

  define(['angular',
    './landing/main' //References the main.js file (require.js)
  ], function (angular) {
    'use strict';

    //Initializes the first module
    var myApp = angular.module('myApp',
      [
        'ionic',
        'app.landing' //This is the identifier of the module
      ]);

    return myApp;

  });
})();

