describe('ToDo List', function () {
  var addingTask = require("./helpers/addingTaskHelper");
  var addingAndCompletingTask =
                        require("./helpers/addingAndCompletingTaskHelper");


  beforeEach(function() {
    browser.get('http://localhost:8080')
  });

  describe('Filters by active task when', function () {
    it('a single task', function () {
      addingAndCompletingTask("Coding");
      element(by.id('activeFilter')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
    });

    describe('multiple tasks when they are', function () {
      it('consecutive', function () {
        addingTask("Coding");
        addingTask("Reading");
        addingAndCompletingTask("Walking")
        element(by.id('activeFilter')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 2');
      });

      it('alternate', function () {
        addingTask("Reading");
        addingAndCompletingTask("Coding");
        addingTask("Walking");
        element(by.id('activeFilter')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 2');
      });
    });
  });
});
