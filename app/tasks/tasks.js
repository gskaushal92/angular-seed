'use strict';

angular.module('myApp.tasks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks', {
    templateUrl: 'tasks/tasks.html',
    controller: 'TasksCtrl'
  });
}])

.controller('TasksCtrl', ['$scope','dataService',function($scope,dataService) {

  $scope.tasks=dataService.getTasks();

  $scope.updateStatus=function(task){
    if(task.Status==='done'){
      task.Status='pending'
    }
    else {
      task.Status='done';
    }
  }

}]);
