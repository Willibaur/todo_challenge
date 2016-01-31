function addingAndCompletingTaskHelper(title) {
    element(by.model('toDoCtrl.newTask')).sendKeys(title);
    element(by.id('addTask')).click();
    element(by.id(title)).click();
}

module.exports = addingAndCompletingTaskHelper;
