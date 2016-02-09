/**
 * @Date: 09/02/2016
 * @author: Javier Fernandez - jfernandez
 */

(function () {
  define(['./landing.module'], function (module) {
    'use strict';

    module.controller('LandingController', LandingController);

    LandingController.$inject = ['$log', '$stateParams'];

    function LandingController($log, $stateParams) {

      //It reference the controller, using Jhon Papa style.
      var vm = this;

      //Calls to the function.
      activate();

      function activate() {
      }
    }
  });
})();
