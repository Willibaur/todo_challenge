describe('ToDo List', function () {
  beforeEach(function() {
    browser.get('http://localhost:8080')
  });

  it('has a title', function () {
    expect(browser.getTitle()).toEqual('ToDo List');
  });

  it('adds a new task', function () {
    element(by.model('toDoCtrl.newTask')).sendKeys('Coding');
    element(by.className('btn')).click();

    expect(element(by.className('list-group')).getText()).toEqual('Coding');
  });
});
