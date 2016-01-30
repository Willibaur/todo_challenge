describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialise with an empty list task', function () {
    expect(ctrl.taskList.length).toEqual(0);
  });

});
