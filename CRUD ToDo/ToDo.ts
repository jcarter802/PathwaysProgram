function UpdateList(UncompleteItem = ''){
    if (UncompleteItem == '' && !ValidateForm()){
        return;
    }
    let toDoList: HTMLUListElement = <HTMLUListElement> document.getElementById("olToDo"); 
    let toDoItem: HTMLInputElement = <HTMLInputElement> document.getElementById("txtToDo");  
    let addItem: HTMLLIElement = <HTMLLIElement> document.createElement('li');
    let addLabel: HTMLLabelElement = <HTMLLabelElement> document.createElement('label');
    let addCheckbox: HTMLInputElement = <HTMLInputElement> document.createElement('input');
    addCheckbox.type = 'checkbox';
    // Create 'select all' option. Need way to keep at top of list
    // if (toDoList.childElementCount == 0){
    //     addLabel.appendChild(addCheckbox);
    //     addLabel.appendChild(document.createTextNode("Select All"));
    //     addItem.appendChild(addLabel);
    //     toDoList.appendChild(addItem);
    //     arguments.callee();// UpdateList();
    // }
    addLabel.id = 'cbli' +  String(toDoList.childElementCount);
    addLabel.appendChild(addCheckbox);
    if (UncompleteItem != ''){
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

function ClearList(){
    let toDoList: HTMLUListElement = <HTMLUListElement> document.getElementById("olToDo");
    let completedList: HTMLUListElement = <HTMLUListElement> document.getElementById("olCompleted");
    if (toDoList.childElementCount > 0 || completedList.childElementCount > 0){
        if (confirm("Are you sure you want to clear the entire list?")){
            toDoList.innerHTML="";
            completedList.innerHTML="";
        }
    }
}

function CompleteItems(){
    let toDoList: HTMLUListElement = <HTMLUListElement> document.getElementById("olToDo");
    for (let i: number = 0; i < toDoList.childElementCount; i++){
        let checkbox: HTMLInputElement = <HTMLInputElement> toDoList.children[i].children[0].children[0];
        if (checkbox.checked && toDoList.children[i].childElementCount < 2){
            // let addLabel: HTMLLabelElement = <HTMLLabelElement> document.createElement('label');
            // addLabel.textContent = " - Complete!"; 
            // addLabel.className = "completeLbl";
            // toDoList.children[i].appendChild(addLabel);
            let toDoList: HTMLUListElement = <HTMLUListElement> document.getElementById("olCompleted");  
            let addItem: HTMLLIElement = <HTMLLIElement> document.createElement('li');
            let addLabelComplete: HTMLLabelElement = <HTMLLabelElement> document.createElement('label');
            let addCheckbox: HTMLInputElement = <HTMLInputElement> document.createElement('input');
            addCheckbox.type = 'checkbox';
            addCheckbox.checked = true;
            addCheckbox.setAttribute( "onclick", "javascript: UncompleteItem();" );
            addLabelComplete.className = 'completedItem';
            addLabelComplete.appendChild(addCheckbox);
            let originalLabel: HTMLLabelElement = <HTMLLabelElement> document.getElementById('cbli' + i);
            addLabelComplete.appendChild(document.createTextNode(originalLabel.textContent));
            addItem.appendChild(addLabelComplete);
            toDoList.appendChild(addItem);
            DeleteItems();
        }
        // checkbox.checked = false;
    }
}

function UncompleteItem(){
    let completedList: HTMLUListElement = <HTMLUListElement> document.getElementById("olCompleted");
    for (let i: number = 0; i < completedList.childElementCount; i++){
        let checkbox: HTMLInputElement = <HTMLInputElement> completedList.children[i].children[0].children[0];
        if (!checkbox.checked){
            UpdateList(completedList.children[i].children[0].textContent);
            completedList.removeChild(completedList.children[i]);
        }
    }
    
}

function DeleteItems(){
    let toDoList: HTMLUListElement = <HTMLUListElement> document.getElementById("olToDo");
    for (let i: number = 0; i < toDoList.childElementCount; i++){
        let checkbox: HTMLInputElement = <HTMLInputElement> toDoList.children[i].children[0].children[0];
        if (checkbox.checked){
            toDoList.removeChild(toDoList.children[i]);
        }
    }
}

function ValidateForm(){   
    let RequiredField: HTMLInputElement = <HTMLInputElement> document.getElementById("txtToDo");  
    if (RequiredField.value.length == 0){
        alert("Please enter a new to-do item to add to the list.");
        return false;
    } 
    return true;
}