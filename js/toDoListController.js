toDoList.controller('ToDoListController', [function() {

  var self      = this;
  self.taskList = [];

  self.addTask = function (newTask) {
    self.taskList.push({title: newTask, done:false});
    self.newTask = "";
  }

  self.removeTask = function () {
    var oldList = self.taskList;
    self.taskList = [];

    for (var i = 0; i < oldList.length; i++) {
      if (!oldList[i].done) {
        self.taskList.push(oldList[i]);
      }
    }
  }

}]);
