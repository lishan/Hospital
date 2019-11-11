'use strict';

/**
 * Controller of the dataModel
 */
angular.module('basic')
  .controller('DataModelCtrl',['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $rootScope.tab = "dataModel";
    $rootScope.init();
    $http.get("/api/record").then((data)=>{
      $scope.data = data.data;
      $scope.itemsByPage = 10;
      $scope.currentPage = 1;
      $scope.dataNumber = $scope.data.length;
      $scope.numberOfPages = Math.ceil($scope.dataNumber/$scope.itemsByPage);
    });
}])
