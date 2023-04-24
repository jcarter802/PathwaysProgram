var rowData = [];
var closeValue = "";
var day = "";
var chartList = [];

async function getStockInfo(freshData){  

    if (!freshData && localStorage.getItem('apiData') != null){
        rowData = JSON.parse(localStorage.getItem('apiData'));
        graphData();
        return true;
    }
    else {
        rowData = [];
    }
    // https://positionstack.com/dashboard
    var superSecureAccessKeyEncyrption = "806KLIJWO0OLM0DN";
    var stockSymbol = document.getElementById("txtSymbol").value;
    var interval = document.getElementById("ddlInterval").options[document.getElementById("ddlInterval").selectedIndex].value;
    var apiString = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&outputsize=full&symbol=" + stockSymbol + "&interval=" + interval + "min&apikey=" + superSecureAccessKeyEncyrption;
  
    var response = await fetch(apiString);

    if (response.status >= 200 && response.status  < 300){
        var jsonData = await response.json();
        if (jsonData['Error Message'] != undefined && jsonData['Error Message'].length > 0){
            alert('The symbol entered is not recognized as a valid stock.');
            return true;
        }


        for (row in jsonData['Time Series (' + interval + 'min)']){
            closeValue = jsonData['Time Series (' + interval + 'min)'][row]['4. close'];
            day = moment(row).format('MM/DD/YYYY');
            rowData.push({"Close": closeValue, "Date": day});
        }

        localStorage.setItem('apiData',JSON.stringify(rowData));
        graphData();
    }
    else {
        alert('An error occurred while retrieving the requested data.')
    }
    return true;
}

function graphData(){
    //stockSymbol + ': ' + jsonData['Meta Data']['1. Information']

    for (chart in Chart.instances){
        Chart.instances[chart].destroy();
    } 
    // window.Chart.destroy();
    new Chart(document.getElementById('stockChart'), {
        type: 'line',
        data: {
            labels: rowData.map(row => row.Date),
            datasets: [{
            label: 'USD',
            data: rowData.map(row => row.Close),
            // borderWidth: 1
            pointStyle: false,
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            },
            xAxis: {
                ticks: {
                    maxTicksLimit:5,
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
    getStockInfo()
});