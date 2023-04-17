async function RequestQuote(){
    var apiString = "https://api.quotable.io/quotes/random?minLength="

    var ddlLength = document.getElementById("ddlLength");
    var quoteLength = ddlLength.options[ddlLength.selectedIndex].value;

    if (quoteLength == 's'){
        apiString += "0&maxLength=25";
    }
    else if (quoteLength == ' m'){
        apiString += "26&maxLength=100";
    }
    else {
        apiString += "101&maxLength=250";
    }

    var response = await fetch(apiString);

    var jsonData = await response.json();

    document.getElementById("quoteText").innerHTML = "\"" + jsonData[0].content + "\""; // json.stringify(jsonData);
    document.getElementById("quoteAuthor").innerHTML = "- " + jsonData[0].author;
}