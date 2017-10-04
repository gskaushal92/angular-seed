'use strict';

angular.module('myApp.dataService', [])

.service('dataService',function(){
  let self = this;
  self.companies=[
     {'Id':'1',
     'duns':'1234',
     'companyName':'Ness',
     'email':'abc@ness.com',
     'phone':'1234567890',
     'subsidiary':false,
     'category':'IT',
     'address':'Test',
     'country':'India',
     'zip':'123456'
     },
     {'Id':'2',
     'duns':'12345',
     'companyName':'Infosys',
     'email':'abc@infosys.com',
     'phone':'1234567890',
     'subsidiary':1,
     'category':'IT',
     'address':'Test',
     'country':'India',
     'zip':'123456'}
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
  self.addCompany=function(company){
    self.companies.Id=self.companies.length + 1;
    self.companies.push(company);
  }
  self.editCompany=function(company){
    self.companies[self.companies.findIndex(el => el.Id === company.Id)] = company;
  }
  self.deleteCompany=function(company){
    const tempCompanies = self.companies.filter((item) => item.Id !== company.Id);
    self.companies=tempCompanies;
  }
});
