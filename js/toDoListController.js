toDoList.controller('ToDoListController', [function() {

  var self      = this;
  self.taskList = [];
  self.oldList = [];

  self.addTask = function (newTask) {
    self.taskList.push({title: newTask, done:false});
    self.newTask = "";
  }

  self.removeTask = function () {
    self.oldList  = self.taskList;
    self.taskList = [];

    for (var i = 0; i < self.oldList.length; i++) {
      if (!self.oldList[i].done) {
        self.taskList.push(self.oldList[i]);
      }
    }
  }

  self.filterComplete = function () {
    self.oldList = self.taskList;
    self.taskList = [];

    for (var i = 0; i < self.oldList.length; i++) {
      if (self.oldList[i].done) {
        self.taskList.push(self.oldList[i]);
      }
    }
  }

}]);
