describe('ToDo List', function () {
  var addingTask = require("./helpers/addingTaskHelper");

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });


  describe('Removes a task for', function () {
    it('a single task', function () {
      addingTask("Coding");
      element(by.id('Coding')).click();
      element(by.id('removeTask')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
    });

    describe('multiple tasks when they are', function () {
      it('consecutive', function () {
        addingTask("Coding");
        element(by.id('Coding')).click();
        addingTask("Reading");
        element(by.id('Reading')).click();
        element(by.id('removeTask')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
      });

      it('alternate', function () {
        addingTask("Coding");
        element(by.id('Coding')).click();
        addingTask("Reading");
        addingTask("Walking");
        element(by.id('Walking')).click();
        element(by.id('removeTask')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 1');
      });
    });
  });
});
