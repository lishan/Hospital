'use strict';

/**
 * @ngdoc overview
 * @name basicApp
 * @description
 * # basicApp
 *
 * Main module of the application.
 */
angular
  .module('basic', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngFileUpload',
    'ui.bootstrap',
    'ui-notification',
    'angularSpinner',
    'ui.select',
    'cfp.hotkeys',
    'ui.bootstrap.datetimepicker',
    'angularMoment',
    'chart.js',
    'smart-table'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('login', {
        url:"/",
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('dataModel', {
        url:"/dataModel",
        templateUrl: 'views/dataModel.html',
        controller: 'DataModelCtrl'
      })
      .state('input', {
        url:"/input",
        templateUrl: 'views/input.html',
        controller: 'InputCtrl'
      })
      .state('unknown', {
        url:"/unknown",
        templateUrl: '404.html'
      });
      $urlRouterProvider.otherwise("/unknown");
  }).run(function($rootScope, $cookies, $state){
    $rootScope.logout = function() {
      $rootScope.username = undefined;
      $cookies.put("user", undefined);
      $state.go("login");
    };
    $rootScope.init = function(){
      if($cookies.get("user")){
        $rootScope.username = $cookies.get("user");
      }else{
        $rootScope.username === undefined;
      }
    };
  });
