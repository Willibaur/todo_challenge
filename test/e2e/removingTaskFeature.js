describe('ToDo List', function () {
  var addingTask = require("./helpers/addingTaskHelper");
  var addingAndCompletingTask =
                        require("./helpers/addingAndCompletingTaskHelper");

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  describe('Removes', function () {
    it('a single task', function () {
      addingAndCompletingTask("Coding");
      element(by.id('removeTask')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
    });

    describe('multiple tasks when they are', function () {
      it('consecutive', function () {
        addingAndCompletingTask("Coding");
        addingAndCompletingTask("Reading");
        element(by.id('removeTask')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
      });

      it('alternate', function () {
        addingAndCompletingTask("Coding");
        addingTask("Reading");
        addingAndCompletingTask("Walking");
        element(by.id('removeTask')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 1');
      });
    });
  });
});
