var rowData = [];
var closeValue = "";
var day = "";

async function getStockInfo(){  

    rowData = [];

    var superSecureAccessKeyEncyrption = "806KLIJWO0OLM0DN";
    var stockSymbol = document.getElementById("txtSymbol").value;

    if (stockSymbol.length == 0){
        alert("Please enter a stock symbol.");
        return true;
    }
    var interval = document.getElementById("ddlInterval").options[document.getElementById("ddlInterval").selectedIndex].value;
    var apiString = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&outputsize=full&adjusted=false&symbol=" + stockSymbol + "&interval=" + interval + "min&apikey=" + superSecureAccessKeyEncyrption;
  
    var response = await fetch(apiString);

    if (response.status >= 200 && response.status  < 300){
        var jsonData = await response.json();
        // If entered stock is not found, response is 200 code with error message. 
        if (jsonData['Error Message'] != undefined && jsonData['Error Message'].length > 0){
            alert('The symbol entered is not recognized as a valid stock.');
            return true;
        }

        for (row in jsonData['Time Series (' + interval + 'min)']){
            closeValue = jsonData['Time Series (' + interval + 'min)'][row]['4. close'];
            day = moment(row).format(' M/DD/YY h:mm A');
            rowData.push({"Close": closeValue, "Date": day});
        }

        // Data is delivered date desc from API. Reverse array before graphing for left-to-right reading.
        rowData = rowData.reverse();
        graphData();
    }
    else {
        alert('An error occurred while retrieving the requested data.')
    }
    return true;
}

function graphData(){
    // Clear all chart instances to display new chart
    for (chart in Chart.instances){
        Chart.instances[chart].destroy();
    } 
    new Chart(document.getElementById('stockChart'), {
        type: 'line',
        data: {
            labels: rowData.map(row => row.Date),
            datasets: [{
                label: 'USD',
                data: rowData.map(row => row.Close),
                pointStyle: false,
            }]
        },
        options: {
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        scaleMode: 'xy',
                    },
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'xy',
                        scaleMode: 'xy'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '$' + Math.floor(value*100)/100;
                        },
                        maxTicksLimit: 6.1,
                    }
                },
                x: {
                    ticks: {
                        major: {
                            enabled: true
                        },
                        maxTicksLimit: 6.1,
                    }
                }
            },
            legend: {
                labels: {
                    pointStyle: false
                }
            }
        }
    });  
}

document.addEventListener("DOMContentLoaded", function(){
    // getStockInfo()
    document.getElementById('txtSymbol').focus();
    document.getElementById('txtSymbol').addEventListener("keypress", function(e){
        if (e.key === "Enter"){
            getStockInfo();
        }
    });
});

