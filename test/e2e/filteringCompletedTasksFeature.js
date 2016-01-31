describe('ToDo List', function () {
  var addingTask = require("./helpers/addingTaskHelper");
  var addingAndCompletingTask =
                        require("./helpers/addingAndCompletingTaskHelper");


  beforeEach(function() {
    browser.get('http://localhost:8080')
  });

  describe('Filters', function () {
    it('a single task', function () {
      addingAndCompletingTask("Coding");
      element(by.id('completedFilter')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 1');
    });

    describe('multiple tasks when they are', function () {
      it('consecutive', function () {
        addingAndCompletingTask("Coding");
        addingAndCompletingTask("Reading");
        addingAndCompletingTask("Walking")
        element(by.id('completedFilter')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 3');
      });

      it('alternate', function () {
        addingAndCompletingTask("Coding");
        addingTask("Reading");
        addingAndCompletingTask("Walking");
        element(by.id('completedFilter')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 2');
      });
    });
  });
});
