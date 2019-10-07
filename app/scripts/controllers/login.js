'use strict';

angular.module('basic')
  .controller('LoginCtrl',['$scope', '$location', '$rootScope', 'hotkeys', '$http', function ($scope, $location, $rootScope, hotkeys, $http) {
    $rootScope.tab = "login";
    $scope.error = false;

    $scope.login = function(){
      $http.post("/api/user/login", {name: $scope.user.name,password: $scope.user.pass})
        .then(function(user){
         console.log(user);
      });
    };

    hotkeys.bindTo($scope).add({
      combo: 'enter',
      allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
      callback: function() {
        $scope.login();
      }
    });

}]);
