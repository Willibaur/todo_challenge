describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialise with an empty list task', function () {
    expect(ctrl.taskList.length).toEqual(0);
  });

  describe('#addTask', function () {
    it('adds a tasks to the list', function () {
      ctrl.addTask('Coding');
      expect(ctrl.newTask).toEqual('');
      expect(ctrl.taskList[0].title).toEqual('Coding');
    });
  });

  describe('#removeTask', function () {
    it('removes a selected task', function () {
      ctrl.addTask('Coding');
      ctrl.taskList[0].done = true;
      ctrl.removeTask();
      expect(ctrl.taskList.length).toEqual(0);
    });
  });
});
