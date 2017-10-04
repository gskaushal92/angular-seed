'use strict'

angular.module('myApp.company',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/companies',{
    templateUrl : 'company/view/company.html',
    controller  : 'CompanyCtrl'
  })
}])

.controller('CompanyCtrl',['$rootScope','$scope','$location','dataService',function($rootScope,$scope,$location,dataService){
  $scope.companies=dataService.getCompanies();

  $scope.addCompany=function(){
    $rootScope.isEdit=0;
        localStorage.setItem('model',JSON.stringify(null));
  }
  $scope.deleteCompany=function(company){
    dataService.deleteCompany(company)
    $scope.companies=dataService.getCompanies();
  }

  $scope.updateCompany=function(company){
    $rootScope.isEdit=1;
    localStorage.setItem('model',JSON.stringify(company));
    console.log($location.path());
    $location.path('/addCompany')
  }

}])
