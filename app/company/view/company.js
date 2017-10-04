'use strict'

angular.module('myApp.company',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/companies',{
    templateUrl : 'company/view/company.html',
    controller  : 'CompanyCtrl'
  })
}])

.controller('CompanyCtrl',['$scope','dataService',function($scope,dataService){
  $scope.companies=dataService.getCompanies();
}])
