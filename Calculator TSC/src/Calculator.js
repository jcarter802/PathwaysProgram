function UpdateList() {
    if (ValidateForm()) {
        var tableRef = document.getElementById("numberList");
        var newValue = document.getElementById("txtNewValue");
        (tableRef.insertRow(tableRef.rows.length - 1)).innerHTML = newValue.value;
        var theNumbers = [];
        var count = tableRef.rows.length;
        for (var aRow = 0; aRow < count; aRow++) { // for each row/number in the table
            theNumbers.push(parseInt(((tableRef.rows[aRow]).innerHTML))); // add the number in the row in the table to the array
        }
        // next sort the array of numbers
        theNumbers.sort((function (a, b) { return a - b; }));
        // Obtain Mean
        var Mean = theNumbers.reduce(function (a, b) { return a + b; }, 0) / theNumbers.length;
        document.getElementById("lblMean").textContent = String(Mean);
        document.getElementById("lblMedian").textContent = String(CalculateMedian(theNumbers));
        document.getElementById("lblMode").textContent = String(CalculateMode(theNumbers));
    }
}
function CalculateMode(theNumbers) {
    var CountHash = {};
    theNumbers.forEach(function (i) {
        if (CountHash[i] == undefined) {
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
function CalculateMedian(theNumbers) {
    var Median;
    var MiddleIndex = Math.floor(theNumbers.length / 2);
    console.log(MiddleIndex);
    if (theNumbers.length % 2) {
        Median = theNumbers[MiddleIndex];
    }
    else {
        Median = (theNumbers[MiddleIndex - 1] + theNumbers[MiddleIndex]) / 2;
    }
    return Median;
}
function ClearList() {
    var tableRef = document.getElementById("numberList");
    if (tableRef.rows.length > 0) {
        if (confirm('Are you sure you want to clear the list?')) {
            document.getElementById("numberList").innerHTML = "";
            document.getElementById("lblMean").textContent = "";
            document.getElementById("lblMedian").textContent = "";
            document.getElementById("lblMode").textContent = "";
        }
    }
}
function ValidateForm() {
    document.getElementById("UserMsg").textContent = "";
    var RequiredFields = document.getElementsByName("RequiredField");
    var minText = RequiredFields[0];
    var maxText = RequiredFields[1];
    var newValueText = RequiredFields[2];
    var min = parseInt(minText.value);
    var max = parseInt(maxText.value);
    var newValue = parseInt(newValueText.value);
    if (newValueText.value.length == 0 || newValue < min || newValue > max) {
        document.getElementById("UserMsg").textContent = "* Please enter a minimum and maximum value and a number within that range.";
        return false;
    }
    return true;
}
function UpdateRange(type) {
    var minimum = document.getElementById("txtMinimum");
    var maximum = document.getElementById("txtMaximum");
    if (type == "min") {
        document.getElementById("txtNewValue").setAttribute("min", minimum.value);
        document.getElementById("txtMaximum").setAttribute("min", minimum.value);
    }
    else if (type == "max") {
        document.getElementById("txtNewValue").setAttribute("max", maximum.value);
        document.getElementById("txtMinimum").setAttribute("max", maximum.value);
    }
}
//# sourceMappingURL=Calculator.js.map