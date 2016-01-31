function addingTaskHelper(title) {
    element(by.model('toDoCtrl.newTask')).sendKeys(title);
    element(by.id('addTask')).click();
}

module.exports = addingTaskHelper;
