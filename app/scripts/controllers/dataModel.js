'use strict';

/**
 * Controller of the dataModel
 */
angular.module('basic')
  .controller('DataModelCtrl',['$rootScope', '$scope', '$http', 'spinnerService','uiGridConstants', 'notify', 'moment', '$state',
    function ($rootScope, $scope, $http, spinnerService, uiGridConstants, notify, moment, $state) {
      $rootScope.tab = "dataModel";
      $rootScope.init();

      $scope.$on("$viewContentLoaded", function(){
        spinnerService.show('spinner');
      });

      $scope.options = {
        enableFiltering: true,
        enableColumnResizing: true,
        paginationPageSizes: [25, 50, 100],
        paginationPageSize: 25,
        columnDefs:[{"field": 'id', "displayName" :'编号', "cellClass": highlight, "width": 70},
                   {"field": 'name', "displayName" :'姓名',
                   "cellTooltip": function(row, col){
                     return `输液港型号: ${row.entity.category}\n`+
                             `导管植入方式: ${row.entity.channelInject}\n`+
                             `导管放置位置: ${row.entity.channelLay}\n`+
                             `导管尖端位置: ${row.entity.channelSpin}\n`+
                             `置入长度: ${row.entity.channelLength}\n`+
                             `PORT放置位置: ${row.entity.portLay}\n`+
                             `伤口情况: ${row.entity.heal}\n`+
                             `血管超声: ${row.entity.bloodCheck}\n`+
                             `诊断: ${row.entity.comment}`;
                   },
                   "cellClass": function(row, col){
                     return highlight(row,col) + ' cell-tooltip';
                   }},
                   {"field": 'gender', "displayName" :'性别', "cellClass": highlight, "width": 70,
                   "filter":{
                    "type": uiGridConstants.filter.SELECT,
                    "selectOptions":[{value: "男", label: "男"},{value: "女", label: "女"}]
                   }},
                   {"field": 'age', "displayName" :'年龄', "cellClass": highlight, "width": 70},
                   {"field": 'credit', "displayName" :'ID号', "cellClass": highlight},
                   {"field": 'date1', "displayName" :'置管日期', "cellClass": highlight},
                   {"field": 'name1', "displayName" :'置入医生', "cellClass": highlight},
                   {"field": 'date2', "displayName" :'取港日期', "cellClass": highlight},
                   {"field": 'hospital', "displayName" :'医院名称', "cellClass": highlight},
                   {"field": 'alert', "displayName" :'提醒', "cellClass": highlight, "width": 70},
                   {"name": '操作', "cellTemplate": "action.html", "enableFiltering": false, "width": 150}]

      };

      function highlight(grid, row, col, rowRenderIndex, colRenderIndex){
        if(row.entity.alert === '是'){
          return "gridCenter1";
        }
        return "";
      };

      $scope.deleteRecord = function(record){
        if(confirm("确定删除么?")){
          $http.delete("/api/record/" + record.id).then((response)=>{
            notify({"message": response.data, "duration": 2000});
            spinnerService.show('spinner');
            init();
          }, (err) => {
            notify({"message": err.data, "duration": 2000});
          });
        }
      };

      $scope.record = function(record){
        if(confirm("确定归档么?")){
           $http.post("/api/record/" + record.id).then((response)=>{
                       notify({"message": response.data, "duration": 2000});
                       spinnerService.show('spinner');
                       init();
                     }, (err) => {
                       notify({"message": err.data, "duration": 2000});
                     });
        }
      };

      $scope.modify = function(record){
        $state.go("input", {"record": record});
      };

      function init(){
        $http.get("/api/record").then((response)=>{
          $scope.options.data = response.data;
          doAlertTest();
          spinnerService.close("spinner");
        });
      };
      init();

      function doAlertTest(){
        for(let i in $scope.options.data){
          $scope.options.data[i].alert = "否";
          if($scope.options.data[i].date1 && empty($scope.options.data[i].date2)){
            let days = moment().diff($scope.options.data[i].date1, 'days');
            $scope.options.data[i].alert = days >= 28?"是":"否";
          }
        }
      };

      function empty(date){
        if(date === undefined || date === ""){
          return true;
        }
        return false;
      };
}])
