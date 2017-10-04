'use strict'

angular.module('myApp.addCompany',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/addCompany',{
    templateUrl : 'company/addCompany/addCompany.html',
    controller  : 'AddCompanyCtrl'
  })
}])

.controller('AddCompanyCtrl',['$scope','dataService',function($scope,dataService){
    $scope.countries=dataService.getCountries();
}])
