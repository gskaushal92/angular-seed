'use strict';

angular.module('myApp.addTask', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addtask', {
    templateUrl: 'addTask/addTask.html',
    controller: 'AddTaskCtrl'
  });
}])

.controller('AddTaskCtrl', ['$scope','dataService','$location',function($scope,dataService,$location) {
  $scope.model={
    'Id':'',
    'Title':'',
    'Status':''
  }
  $scope.status=[
    'Select',
    'done',
    'pending'
  ]
  $scope.taskSubmit=function(){
    dataService.addTask($scope.model);
    $location.path('#!/tasks');
  }
}]);
