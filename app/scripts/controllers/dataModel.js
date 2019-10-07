'use strict';

/**
 * Controller of the dataModel
 */
angular.module('basic')
  .controller('DataModelCtrl',['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $rootScope.tab = "dataModel";
    $http.get("/api/record").then((data)=>{
      $scope.data = data.data;
      console.log($scope.data);
    })
}])
