function ValidateForm(){
    var validForm = true;

    var rbl = document.getElementsByName("rblListOptions");
    if (document.getElementById("txtWordTerm").length === 0 || (!rbl.item(0).checked && !rbl.item(1).checked)){
        validForm = false;
    }

    if (validForm === false) {
        //alert("* Please fill out all required fields before submitting the form.");
        document.getElementById("UserMsg").textContent = "* Please enter a term/word and select the list it belongs in.";
    }
    else {
        if (rbl.item(0).checked) {
            document.getElementById("skiTerms").textContent += document.getElementById("txtWordTerm").value + "\n";
        }
        else{
            document.getElementById("nonsenseWords").textContent += document.getElementById("txtWordTerm").value + "\n";
        }
        document.getElementById("UserMsg").textContent = "";
        document.getElementById("txtWordTerm").value = "";
        rbl.item(0).checked = false;
        rbl.item(1).checked = false;
    }
    event.preventDefault();
}

function ClearList(TargetList){
    if (TargetList === 'S' && document.getElementById("skiTerms").value.length >0){
        if (confirm('Are you sure you want to clear the ski terms list?')){
            document.getElementById("skiTerms").value = "";
        }
    }
    else if (TargetList === 'N' && document.getElementById("nonsenseWords").value.length > 0) {
        if (confirm('Are you sure you want to clear the nonsense words list?')){
            document.getElementById("nonsenseWords").value = "";
        }
    }

}