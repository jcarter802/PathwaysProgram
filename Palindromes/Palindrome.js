function ValidateForm(){
    var rbl = document.getElementsByName("rblListOptions");
    if (document.getElementById("txtWord").length === 0 || (!rbl.item(0).checked && !rbl.item(1).checked)){
        document.getElementById("UserMsg").textContent = "* Please enter a word and select the method to verify it with.";
    }
    else {
        VerifyPalindromes();
    }
    event.preventDefault();
}

function VerifyPalindromes(){
    var rbl = document.getElementsByName("rblListOptions");
    let word = document.getElementById("txtWord").value.toLowerCase();      
    if (rbl.item(0).checked) {      
        if (word.split("").reverse().join("") === word){
            document.getElementById("txtHeinz").textContent += document.getElementById("txtWord").value + " is a Palindrome\n";
        }
        else {
            document.getElementById("txtHeinz").textContent += document.getElementById("txtWord").value + " is not a Palindrome\n";
        }
    }
    else{
        if (Palindrominator(word)){
            document.getElementById("txtFlynn").textContent += document.getElementById("txtWord").value + " is a Palindrome\n";
        }
        else {
            document.getElementById("txtFlynn").textContent += document.getElementById("txtWord").value + " is not a Palindrome\n";
        }
    }
    document.getElementById("UserMsg").textContent = "";
    document.getElementById("txtWord").value = "";
    rbl.item(0).checked = false;
    rbl.item(1).checked = false;
}

function Palindrominator(word){
    let Palindrome = true
    let letterArray = word.split("");
    for (var i = 0; i < word.length/2; i++){
        if (letterArray[i] != letterArray[word.length-i-1]){
            Palindrome = false;
        }
    }
    return Palindrome;
}

function ClearList(TargetList){
    if (TargetList === 'H' && document.getElementById("txtHeinz").value.length >0){
        if (confirm('Are you sure you want to clear the Heinz list?')){
            document.getElementById("txtHeinz").value = "";
        }
    }
    else if (TargetList === 'F' && document.getElementById("txtFlynn").value.length > 0) {
        if (confirm('Are you sure you want to clear the Flynn list?')){
            document.getElementById("txtFlynn").value = "";
        }
    }

}