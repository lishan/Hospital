'use strict';

angular.module('basic')
  .controller('InputCtrl',['$scope', '$location', '$rootScope', 'hotkeys', '$http', function ($scope, $location, $rootScope, hotkeys, $http) {
    $rootScope.tab = "input";
    $scope.submit = () => {
      $http.post("/api/record", {name: $scope.record.name,comment: $scope.record.comment})
        .then(function(response){
          console.log(response);
      });
    }

}]);
