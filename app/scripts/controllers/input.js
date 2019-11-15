'use strict';

angular.module('basic')
  .controller('InputCtrl',['$scope', '$location', '$rootScope', 'hotkeys', '$http', '$state', 'notify', '$stateParams',
    function ($scope, $location, $rootScope, hotkeys, $http, $state, notify, $stateParams) {
      $rootScope.tab = "input";

      $scope.submit = () => {
        if($scope.record.date1){
          $scope.record.date1 = getStrDate($scope.record.date1);
        }
        if($scope.record.date2){
          $scope.record.date2 = getStrDate($scope.record.date2);
        }
        if($scope.record.id){
          $http.put("/api/record", $scope.record)
                                .then(function(response){
                                  notify({"message": response.data, "duration": 2000});
                                  $state.go("dataModel");
                              });
        }else{
          $http.post("/api/record", $scope.record)
                      .then(function(response){
                        notify({"message": response.data, "duration": 2000});
                        $state.go("dataModel");
                    });
        }
      };

      if($stateParams.record){
        $scope.record = $stateParams.record;
        $scope.record.date1 = new Date($scope.record.date1);
      }else{
        $scope.record = {
          "gender": "女"
        };
      }

      $scope.popup = [false, false];

      $scope.open = function(index){
        $scope.popup[index] = true;
      };

      function getStrDate(date) {
        if(date instanceof Date){
          let month = date.getMonth() + 1;
          return date.getFullYear() + "/" + month + "/" + date.getDate();
        }else{
          return date;
        }
      };

}]);
