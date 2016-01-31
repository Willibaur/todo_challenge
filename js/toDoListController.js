toDoList.controller('ToDoListController', [function() {

  var self      = this;
  self.taskList = [];

  self.addTask = function (newTask) {
    self.taskList.push({title: newTask, done:false});
    self.newTask = "";
  }

}]);
