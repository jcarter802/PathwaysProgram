function DisplayWelcomeMsg (){
    var FirstName = document.getElementById("txtFName").value;
    var WelcomeMsg = "Welcome to the Survey Form";
    if (FirstName.length > 0){
        WelcomeMsg += " " + FirstName;
    }
    else{
        WelcomeMsg += " anonymous user";
    }
    WelcomeMsg += "!";
    document.getElementById("lblWelcome").textContent = WelcomeMsg;
}

function ShowCbl(){
    var rbl = document.getElementsByName("rblPets");
    if (rbl.item(0).checked){ // Yes
        document.getElementById("cblPets").style.display = "block";
        document.getElementById("cblNoPets").style.display = "none";
    }
    else{ // No
        document.getElementById("cblPets").style.display = "none";
        document.getElementById("cblNoPets").style.display = "block";
    }
}

function ValidateForm(){
    var validForm = true;
    var RequiredFields = document.getElementsByName("RequiredField");
    for (var i = 0; i < RequiredFields.length; i++){
        if (RequiredFields[i].value.length === 0){
            validForm = false;
        } 
    }
    if (validForm === false) {
        //alert("* Please fill out all required fields before submitting the form.");
        document.getElementById("UserMsg").textContent = "* Please fill out all required fields before submitting the form.";
        return false;
    }
    else {
        document.getElementById("UserMsg").textContent = "Thank you " + document.getElementById("txtFName").value + "," + " your form has been submitted succesfully!";
    }
}
