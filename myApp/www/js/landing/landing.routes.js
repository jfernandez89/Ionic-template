/**
 * @Date: 09/02/2016
 * @author: Javier Fernandez - jfernandez
 *
 * Landing Routes
 * @param {type} angular
 * @returns {angular.module}
 */

(function () {
  define(['./landing.module', 'text!./landing.html'], function (module, landingTemplate) {
    'use strict';
    module.config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

      $stateProvider
        .state('landing', {
          url: '/landing',
          template: landingTemplate,
          resolve: {//the stateProvider resolve this

          },
          controller: 'LandingController',
          controllerAs: 'LandingCtrl'
        });
    }
  });
})();
