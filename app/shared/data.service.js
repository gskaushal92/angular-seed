'use strict';

angular.module('myApp.dataService', [])

.service('dataService',function(){
  let self = this;
  let tasks=[
     {'Id':'1','Title':'Go to Market 99','Status':'done'},
     {'Id':'2','Title':'Email to manager','Status':'pending'},
     {'Id':'3','Title':'Push code to GitHub','Status':'done'},
     {'Id':'4','Title':'Go for running','Status':'done'},
     {'Id':'5','Title':'Go to movie','Status':'pending'},
   ]
  self.getTasks=function(){
    return tasks
  }
  self.addTask=function(task){
    task.Id=tasks.length + 1;
    tasks.push(task);
  }

});
