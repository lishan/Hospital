'use strict';

angular.module('basic')
  .controller('LoginCtrl',['$scope', '$location', '$rootScope', 'hotkeys', '$http', function ($scope, $location, $rootScope, hotkeys, $http) {
    $scope.error = false;

    $scope.login = function(){
      if($scope.user.pass !== undefined) {
        $rootScope.login($scope.user.name, $scope.user.pass);
      }
    };

    $http.get("/api/user/test").then(function(data){
      console.log(data);
    });

    hotkeys.bindTo($scope).add({
      combo: 'enter',
      allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
      callback: function() {
        $scope.login();
      }
    });

}]);
