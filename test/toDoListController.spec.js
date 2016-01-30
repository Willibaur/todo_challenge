describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialise with an empty task', function () {
    expect(ctrl.addTask).toBeUndefined();
    expect(ctrl.returnList).toBeUndefined();
  });

  describe('when adding a task', function () {
    var items = ["ToDo-weekend-challenge"];

    xit('displays task', function () {
      expect(ctrl.returnList.items).toEqual(items);
    });
  });
});
