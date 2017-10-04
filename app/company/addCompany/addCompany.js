'use strict'

angular.module('myApp.addCompany',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/addCompany',{
    templateUrl : 'company/addCompany/addCompany.html',
    controller  : 'AddCompanyCtrl'
  })
}])

.controller('AddCompanyCtrl',['$scope','dataService','$location',function($scope,dataService,$location){
    $scope.countries=dataService.getCountries();
    $scope.model={
      'Id':'',
      'duns':'',
      'companyName':'',
      'email':'',
      'phone':'',
      'subsidiary':'',
      'category':'',
      'address':'',
      'country':'',
      'zip':''
    }
    let model=null
    $scope.pageLoad=function(){
      model=JSON.parse(localStorage.getItem('model'))
      if(model){
        $scope.model=model;
      }
    }

    $scope.companySubmit=function(company){
      if(model){
        dataService.editCompany(company)
        $location.path('#!/companies')
      }
      else{
        dataService.addCompany(company)
        $location.path('#!/companies')
      }
    }

}])
