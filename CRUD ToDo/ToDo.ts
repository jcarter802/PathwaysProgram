function UpdateList(){
    if (ValidateForm()){
        let toDoList: HTMLUListElement = <HTMLUListElement> document.getElementById("olToDo"); 
        let toDoItem: HTMLInputElement = <HTMLInputElement> document.getElementById("txtToDo");  
        let addItem: HTMLLIElement = <HTMLLIElement> document.createElement('li');
        let addLabel: HTMLLabelElement = <HTMLLabelElement> document.createElement('label');
        let addCheckbox: HTMLInputElement = <HTMLInputElement> document.createElement('input');
        addCheckbox.type = 'checkbox';
        addLabel.appendChild(document.createTextNode(toDoItem.value));
        addItem.appendChild(addCheckbox);
        addItem.appendChild(addLabel);
        toDoList.appendChild(addItem);
        toDoItem.value = "";
        toDoItem.focus();
    }
    event.preventDefault();
}


function ClearList(){
    let toDolist: HTMLUListElement = <HTMLUListElement> document.getElementById("olToDo");
    toDolist.innerHTML="";
}

function CompleteItems(){
    let toDolist: HTMLUListElement = <HTMLUListElement> document.getElementById("olToDo");
    for (let i: number = 0; i < toDolist.childElementCount; i++){
        let checkbox: HTMLInputElement = <HTMLInputElement> toDolist.children[i].children[0];
        if (checkbox.checked && toDolist.children[i].childElementCount < 3){
            let addLabel: HTMLLabelElement = <HTMLLabelElement> document.createElement('label');
            addLabel.textContent = " - Complete!"; 
            addLabel.className = "completeLbl";
            toDolist.children[i].appendChild(addLabel);
            checkbox.checked = false;
        }
    }
}

function DeleteItems(){
    let toDolist: HTMLUListElement = <HTMLUListElement> document.getElementById("olToDo");
    for (let i: number = 0; i < toDolist.childElementCount; i++){
        let checkbox: HTMLInputElement = <HTMLInputElement> toDolist.children[i].children[0];
        if (checkbox.checked){
            toDolist.removeChild(toDolist.children[i]);
        }
    }
}

function ValidateForm(){   
    document.getElementById("UserMsg").textContent = ""; 
    let RequiredField: HTMLInputElement = <HTMLInputElement> document.getElementById("txtToDo");  
    if (RequiredField.value.length == 0){
        document.getElementById("UserMsg").textContent = "* Please enter a new to-do item to add to the list.";
        return false;
    } 
    return true;
}