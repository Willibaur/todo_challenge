toDoList.controller('ToDoListController', [function() {

  var self      = this;
  self.taskList = [];
  self.filteredTasklist = [];
  self.oldList = [];


  self.addTask = function (newTask) {
    self.filterAll();
    self.taskList.push({title: newTask, done:false});
    self.newTask = "";
    self.filteredTasklist = self.taskList;
  }

  self.removeTask = function () {
    self.filterAll();
    self.oldList  = self.taskList;
    self.taskList = [];

    for (var i = 0; i < self.oldList.length; i++) {
      if (!self.oldList[i].done) {
        self.taskList.push(self.oldList[i]);
      }
    }
    self.filteredTasklist = self.taskList;
  }

  self.filterCompleted = function () {
    self.oldList = self.filteredTasklist;
    self.taskList = [];

    for (var i = 0; i < self.oldList.length; i++) {
      if (self.oldList[i].done) {
        self.taskList.push(self.oldList[i]);
      }
    }
  }

  self.filterActive = function () {
    self.oldList = self.filteredTasklist;
    self.taskList = [];

    for (var i = 0; i < self.oldList.length; i++) {
      if (!self.oldList[i].done) {
        self.taskList.push(self.oldList[i]);
      }
    }
  }

  self.filterAll = function () {
    self.taskList = self.filteredTasklist;
  }

  self.countTasks = function () {
    return self.taskList.length;
  }
}]);
