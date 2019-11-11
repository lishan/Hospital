'use strict';

angular.module('basic')
  .controller('LoginCtrl',['$scope', '$location', '$rootScope', 'hotkeys', '$http', '$cookies', '$state',
   function ($scope, $location, $rootScope, hotkeys, $http, $cookies, $state) {
    $rootScope.tab = "login";
    $scope.error = false;

    if($cookies.get("user") !== undefined){
      $state.go("dataModel");
    }

    $scope.login = function(){
      $http.post("/api/user/login", {name: $scope.user.name, password: $scope.user.pass})
        .then(function(user){
         let expireDate = new Date();
         expireDate.setDate(expireDate.getDate() + 1);
         $cookies.put('user', user.data.name, { expires: expireDate });
         $cookies.put('role', user.data.role, { expires: expireDate });
         console.log($cookies.get("user")["name"]);
         $state.go("dataModel");
      }, function(err){
         console.log(err);
         $scope.error = true;
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
