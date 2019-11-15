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
    'cgNotify',
    'sarsha.spinner',
    'ui.bootstrap',
    'cfp.hotkeys',
    'angularMoment',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.resizeColumns'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
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
        controller: 'InputCtrl',
        params:{
          record: null
        }
      })
      .state('unknown', {
        url:"/unknown",
        templateUrl: '404.html'
      });
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
