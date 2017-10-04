'use strict';

angular.module('myApp.dataService', [])

.service('dataService',function(){
  let self = this;
  self.companies=[
     {'Id':'1','duns':'1234','companyName':'Ness','country':'India','email':'abc@ness.com','category':'IT'},
     {'Id':'2','duns':'12345','companyName':'Infosys','country':'India','email':'abc@infosys.com','category':'IT'}
   ];
   self.countries=[
     {'code':'','country':'Select'},
     {'code':'India','country':'India'},
     {'code':'US','country':'US'},
     {'code':'UK','country':'UK'},
     {'code':'Australia','country':'Australia'}
   ];
  self.getCountries=function(){
    return self.countries;
  }
  self.getCompanies=function(){
    return self.companies;
  }
  self.addTask=function(company){
    self.companies.Id=companies.length + 1;
    self.companies.push(company);
  }
  self.deleteTask=function(company){
    const tempCompanies = self.companies.filter((item) => item.Id !== company.Id);
    self.companies=tempCompanies;
  }
});
