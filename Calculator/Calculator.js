function ValidateForm(){   
    document.getElementById("UserMsg").textContent = ""; 
    var RequiredFields = document.getElementsByName("RequiredField");
    var min = parseInt(RequiredFields[0].value);
    var max = parseInt(RequiredFields[1].value);
    var newValue = parseInt(RequiredFields[2].value);
    for (var i = 0; i < RequiredFields.length; i++){
        if (RequiredFields[i].value.length === 0 || (i == 2 && (newValue < min || newValue > max))){
            document.getElementById("UserMsg").textContent = "* Please enter a minimum and maximum value and a number within that range.";
            return false;
        } 
    }
    return true;
}

function UpdateRange(type){
    if (type == "min"){
        document.getElementById("txtNewValue").setAttribute("min", document.getElementById("txtMinimum").value);
        document.getElementById("txtMaximum").setAttribute("min", document.getElementById("txtMinimum").value);
    }
    else if (type == "max"){
        document.getElementById("txtNewValue").setAttribute("max", document.getElementById("txtMaximum").value);
        document.getElementById("txtMinimum").setAttribute("max", document.getElementById("txtMaximum").value);
    }
}

function UpdateList(){
    if (ValidateForm()){
        var tableRef = document.getElementById("numberList");
        (tableRef.insertRow(tableRef.rows.length-1)).innerHTML = document.getElementById("txtNewValue").value;
        var theNumbers = [];
        var count = tableRef.rows.length ;
        for (aRow = 0; aRow < count; aRow++){     // for each row/number in the table
        theNumbers.push(parseInt(((tableRef.rows[aRow]).innerHTML)));  // add the number in the row in the table to the array
        }
        // next sort the array of numbers
        theNumbers.sort((function(a, b){return a - b}));
        // Obtain Mean
        var Mean = theNumbers.reduce((a,b) => a + b, 0) / theNumbers.length;
        document.getElementById("lblMean").textContent = String(Mean); 
        document.getElementById("lblMedian").textContent = String(CalculateMedian(theNumbers));
        document.getElementById("lblMode").textContent = String(CalculateMode(theNumbers));
    }
}

function CalculateMode(theNumbers){
    var CountHash = {};
    theNumbers.forEach(function(i){
        if (CountHash[i] == undefined){
            CountHash[i] = 0;
        }
        CountHash[i]++;
    });

    var Keys = Object.keys(CountHash);
    var Mode = Keys[0];
    var ModeCount = CountHash[Keys[0]];

    for (var i = 1; i < Keys.length; i++) {
        var Value = CountHash[Keys[i]];
        if (Value > ModeCount) {
            ModeCount = Value;
            Mode = Keys[i];
        }
    }
    return Mode;
}

function CalculateMedian(theNumbers){
    var Median;
    var MiddleIndex = Math.floor(theNumbers.length/2);
    console.log(MiddleIndex);
    if (theNumbers.length % 2){
        Median = theNumbers[MiddleIndex];
    }
    else {
        Median = (theNumbers[MiddleIndex-1]+theNumbers[MiddleIndex])/2;
    }
    return Median;
}

function ClearList(){
    if (document.getElementById("numberList").rows.length > 0){
        if (confirm('Are you sure you want to clear the list?')){
            document.getElementById("numberList").innerHTML = "";
        }
    }

}