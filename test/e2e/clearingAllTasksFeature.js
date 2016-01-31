describe('ToDo List', function () {
  var addingTask = require("./helpers/addingTaskHelper");
  var addingAndCompletingTask =
                        require("./helpers/addingAndCompletingTaskHelper");


  beforeEach(function() {
    browser.get('http://localhost:8080')
  });

  describe('Clears tasks when', function () {
    describe('a single task is added and', function () {
      it('marked as completed', function () {
        addingAndCompletingTask("Coding");
        element(by.id('clearAll')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
      });

      it('not marked as completed', function () {
        addingTask("Coding");
        element(by.id('clearAll')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
      });
    });

    describe('multiple tasks are added and they are', function () {
      describe('consecutive and', function () {
        it('some of them are marked as completed', function () {
          addingTask("Coding");
          addingTask("Reading");
          addingAndCompletingTask("Walking")
          element(by.id('clearAll')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
        });

        it('all of them are marked as completed', function () {
          addingAndCompletingTask("Coding");
          addingAndCompletingTask("Reading");
          addingAndCompletingTask("Walking")
          element(by.id('clearAll')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
        });

      });

      it('alternate', function () {
        addingTask("Reading");
        addingAndCompletingTask("Coding");
        addingTask("Walking");
        element(by.id('clearAll')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
      });
    });
  });
});
