describe('ToDo List', function () {
  beforeEach(function() {
    browser.get('http://localhost:8080')
  });


  describe('Removes a task for', function () {
    it('a single task', function () {
      element(by.model('toDoCtrl.newTask')).sendKeys('Coding');
      element(by.id('addTask')).click();
      element(by.id('Coding')).click();
      element(by.id('removeTask')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
    });

    describe('multiple tasks when they are', function () {
      it('consecutive', function () {
        element(by.model('toDoCtrl.newTask')).sendKeys('Coding');
        element(by.id('addTask')).click();
        element(by.id('Coding')).click();
        element(by.model('toDoCtrl.newTask')).sendKeys('Reading');
        element(by.id('addTask')).click();
        element(by.id('Reading')).click();
        element(by.id('removeTask')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 0');
      });

      it('alternate', function () {
        element(by.model('toDoCtrl.newTask')).sendKeys('Coding');
        element(by.id('addTask')).click();
        element(by.id('Coding')).click();
        element(by.model('toDoCtrl.newTask')).sendKeys('Walking');
        element(by.id('addTask')).click();
        element(by.model('toDoCtrl.newTask')).sendKeys('Reading');
        element(by.id('addTask')).click();
        element(by.id('Reading')).click();
        element(by.id('removeTask')).click();

      expect(element(by.id('totalTasks')).getText()).toEqual('Total tasks: 1');

      });
    });
  });
});
