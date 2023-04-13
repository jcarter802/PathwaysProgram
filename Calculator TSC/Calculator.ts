function UpdateList(){
    if (ValidateForm()){
        let tableRef: HTMLTableElement = <HTMLTableElement> document.getElementById("numberList");
        let newValue: HTMLInputElement = <HTMLInputElement> document.getElementById("txtNewValue");      
        (tableRef.insertRow(tableRef.rows.length-1)).innerHTML = newValue.value;
        let theNumbers: number[] = [];
        let count: number = tableRef.rows.length;
        for (let aRow: number = 0; aRow < count; aRow++){     // for each row/number in the table
        theNumbers.push(parseInt(((tableRef.rows[aRow]).innerHTML)));  // add the number in the row in the table to the array
        }
        // next sort the array of numbers
        theNumbers.sort((function(a, b){return a - b}));
        // Obtain Mean
        let Mean: number = theNumbers.reduce((a,b) => a + b, 0) / theNumbers.length;
        document.getElementById("lblMean").textContent = String(Mean); 
        document.getElementById("lblMedian").textContent = String(CalculateMedian(theNumbers));
        document.getElementById("lblMode").textContent = String(CalculateMode(theNumbers));
    }
}

function CalculateMode(theNumbers){
    let CountHash: {} = {};
    theNumbers.forEach(function(i){
        if (CountHash[i] == undefined){
            CountHash[i] = 0;
        }
        CountHash[i]++;
    });

    let Keys: string[] = Object.keys(CountHash);
    let Mode: string = Keys[0];
    let ModeCount: string = CountHash[Keys[0]];

    for (let i: number = 1; i < Keys.length; i++) {
        let Value: string = CountHash[Keys[i]];
        if (Value > ModeCount) {
            ModeCount = Value;
            Mode = Keys[i];
        }
    }
    return Mode;
}

function CalculateMedian(theNumbers){
    let Median: number;
    let MiddleIndex: number = Math.floor(theNumbers.length/2);
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
    let tableRef: HTMLTableElement = <HTMLTableElement> document.getElementById("numberList");
    if (tableRef.rows.length > 0){
        if (confirm('Are you sure you want to clear the list?')){
            document.getElementById("numberList").innerHTML = "";
            document.getElementById("lblMean").textContent = ""; 
            document.getElementById("lblMedian").textContent = "";
            document.getElementById("lblMode").textContent = "";
        }
    }

}

function ValidateForm(){   
    document.getElementById("UserMsg").textContent = ""; 
    let RequiredFields: NodeListOf<HTMLElement> = document.getElementsByName("RequiredField");   
    let minText: HTMLInputElement = <HTMLInputElement> RequiredFields[0];
    let maxText: HTMLInputElement = <HTMLInputElement> RequiredFields[1];
    let newValueText: HTMLInputElement = <HTMLInputElement> RequiredFields[2];

    let min: number = parseInt(minText.value);
    let max: number = parseInt(maxText.value);
    let newValue: number = parseInt(newValueText.value);
    if (newValueText.value.length == 0 || newValue < min || newValue > max){
        document.getElementById("UserMsg").textContent = "* Please enter a minimum and maximum value and a number within that range.";
        return false;
    } 
    return true;
}

function UpdateRange(type){    
    let minimum: HTMLInputElement = <HTMLInputElement> document.getElementById("txtMinimum");      
    let maximum: HTMLInputElement = <HTMLInputElement> document.getElementById("txtMaximum");  
    if (type == "min"){
        document.getElementById("txtNewValue").setAttribute("min", minimum.value);
        document.getElementById("txtMaximum").setAttribute("min", minimum.value);
    }
    else if (type == "max"){
        document.getElementById("txtNewValue").setAttribute("max", maximum.value);
        document.getElementById("txtMinimum").setAttribute("max", maximum.value);
    }
}
