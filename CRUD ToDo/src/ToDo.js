function UpdateList(UncompleteItem) {
    if (UncompleteItem === void 0) { UncompleteItem = ''; }
    if (UncompleteItem == '' && !ValidateForm()) {
        return;
    }
    var toDoList = document.getElementById("olToDo");
    var toDoItem = document.getElementById("txtToDo");
    var addItem = document.createElement('li');
    var addLabel = document.createElement('label');
    var addCheckbox = document.createElement('input');
    addCheckbox.type = 'checkbox';
    // Create 'select all' option. Need way to keep at top of list
    // if (toDoList.childElementCount == 0){
    //     addLabel.appendChild(addCheckbox);
    //     addLabel.appendChild(document.createTextNode("Select All"));
    //     addItem.appendChild(addLabel);
    //     toDoList.appendChild(addItem);
    //     arguments.callee();// UpdateList();
    // }
    addLabel.appendChild(addCheckbox);
    if (UncompleteItem != '') {
        addLabel.appendChild(document.createTextNode(UncompleteItem));
    }
    else {
        addLabel.appendChild(document.createTextNode(toDoItem.value));
        toDoItem.value = "";
    }
    addItem.appendChild(addLabel);
    toDoList.appendChild(addItem);
    toDoItem.focus();
    event.preventDefault();
}
function ClearList() {
    var toDoList = document.getElementById("olToDo");
    var completedList = document.getElementById("olCompleted");
    if (toDoList.childElementCount > 0 || completedList.childElementCount > 0) {
        if (confirm("Are you sure you want to clear the entire list?")) {
            toDoList.innerHTML = "";
            completedList.innerHTML = "";
        }
    }
}
function CompleteItems() {
    var toDoList = document.getElementById("olToDo");
    for (var i = 0; i < toDoList.childElementCount; i++) {
        var checkbox = toDoList.children[i].children[0].children[0];
        if (checkbox.checked && toDoList.children[i].childElementCount < 2) {
            // let addLabel: HTMLLabelElement = <HTMLLabelElement> document.createElement('label');
            // addLabel.textContent = " - Complete!"; 
            // addLabel.className = "completeLbl";
            // toDoList.children[i].appendChild(addLabel);
            var toDoList_1 = document.getElementById("olCompleted");
            var addItem = document.createElement('li');
            var addLabelComplete = document.createElement('label');
            var addCheckbox = document.createElement('input');
            addCheckbox.type = 'checkbox';
            addCheckbox.checked = true;
            addCheckbox.setAttribute("onclick", "javascript: UncompleteItem();");
            addLabelComplete.className = 'completedItem';
            addLabelComplete.appendChild(addCheckbox);
            addLabelComplete.appendChild(document.createTextNode(toDoList_1.children[i].children[0].textContent));
            addItem.appendChild(addLabelComplete);
            toDoList_1.appendChild(addItem);
            DeleteItems();
        }
        // checkbox.checked = false;
    }
}
function UncompleteItem() {
    var completedList = document.getElementById("olCompleted");
    for (var i = 0; i < completedList.childElementCount; i++) {
        var checkbox = completedList.children[i].children[0].children[0];
        if (!checkbox.checked) {
            UpdateList(completedList.children[i].children[0].textContent);
            completedList.removeChild(completedList.children[i]);
        }
    }
}
function DeleteItems() {
    var toDoList = document.getElementById("olToDo");
    for (var i = 0; i < toDoList.childElementCount; i++) {
        var checkbox = toDoList.children[i].children[0].children[0];
        if (checkbox.checked) {
            toDoList.removeChild(toDoList.children[i]);
        }
    }
}
function ValidateForm() {
    var RequiredField = document.getElementById("txtToDo");
    if (RequiredField.value.length == 0) {
        alert("Please enter a new to-do item to add to the list.");
        return false;
    }
    return true;
}
//# sourceMappingURL=ToDo.js.map