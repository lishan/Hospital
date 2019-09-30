'use strict';

angular.module('basic')
  .controller('LoginCtrl',['$scope', '$location', '$rootScope', 'hotkeys', function ($scope, $location, $rootScope, hotkeys) {
    $scope.error = false;

    $scope.login = function(){
      if($scope.user.pass !== undefined) {
        $rootScope.login($scope.user.name, $scope.user.pass);
      }
    };

    hotkeys.bindTo($scope).add({
      combo: 'enter',
      allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
      callback: function() {
        $scope.login();
      }
    });

}]);
