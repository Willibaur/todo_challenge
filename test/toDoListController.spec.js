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

  describe('#filterCompleted', function () {
    it('displays all completed tasks', function () {
      ctrl.addTask('Coding');
      ctrl.addTask('Reading');
      ctrl.addTask('Walking');
      ctrl.taskList[0].done = true;
      ctrl.filterCompleted();
      expect(ctrl.taskList.length).toEqual(1);
    });
  });

  describe('#filterActive', function () {
    it('displays all active tasks', function () {
      ctrl.addTask('Coding');
      ctrl.addTask('Reading');
      ctrl.addTask('Walking');
      ctrl.taskList[0].done = true;
      ctrl.filterActive();
      expect(ctrl.taskList.length).toEqual(2);
    });
  });

  describe('#filterAll', function () {
    it('displays all active tasks', function () {
      ctrl.addTask('Coding');
      ctrl.addTask('Reading');
      ctrl.addTask('Walking');
      ctrl.taskList[0].done = true;
      ctrl.filterCompleted();
      ctrl.filterAll()
      expect(ctrl.taskList.length).toEqual(3);
    });
  });
});
