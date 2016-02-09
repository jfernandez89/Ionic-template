/**
 * @Date: 09/02/2016
 * @author: Javier Fernandez - jfernandez
 *
 * Landing Service
 * @param {type} angular
 * @returns {angular.module}
 */

(function () {
  define(['./landing.module'], function (module) {
    'use strict';

    module.service("LandingService", LandingService);

    LandingService.$inject = ['CommonService'];

    function LandingService(CommonService) {

      var service = this;

      return service;
    }

  });

})();

