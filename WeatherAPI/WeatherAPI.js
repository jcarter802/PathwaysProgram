async function SearchLocation(){
    var superSecureAccessKeyEncyrption = "a39f8538cebbf48e520452f55ab24229";
    var apiString = "http://api.positionstack.com/v1/forward?access_key=" + superSecureAccessKeyEncyrption + "&country=US&query="
    var locationSearch = document.getElementById("txtLocation").value;
    var response = await fetch(apiString + locationSearch);
    var locationList = "";

    if (response.status >= 200 && response.status  < 300){
        var jsonData = await response.json();
        var locationResults = jsonData.data;
        if (locationResults.length > 0){
            for (var location in locationResults){
                locationList += "<p><a onclick=getForecast(" + locationResults[location].latitude +","+locationResults[location].longitude  + ") >" + locationResults[location].name + ", " + locationResults[location].region + "</a></p>";
            }
        }
        else {
            locationList = "No valid locations found" 
        }
    }
    else {
        locationList = "Location not found. " //+ response.message;
    }
    document.getElementById("locationList").innerHTML = locationList;
    event.preventDefault();
    return true;
}

async function getForecast(latitude, longitude){
    // First get griddata to send to weather api
    var apiGridData = "https://api.weather.gov/points/"+latitude+","+longitude;
    var responseGridData = await fetch(apiGridData);
    var gridID = "";
    var gridX = "";
    var gridY = "";

    if (responseGridData.status >= 200 && responseGridData.status  < 300){
        var jsonGridData = await responseGridData.json();
        gridID = jsonGridData.properties.gridId;
        gridX = jsonGridData.properties.gridX;
        gridY = jsonGridData.properties.gridY;
    }
    else {
        locationList = "Unable to determine grid points of the selected location. "// + responseGridData.message;
    }

    var forecastAPI = "https://api.weather.gov/gridpoints/"+gridID+"/"+gridX+","+gridY+"/forecast"
    var forecastResponse = await fetch(forecastAPI);
    if (forecastResponse.status >= 200 && forecastResponse.status  < 300){
        var jsonForecast = await forecastResponse.json();
        days = jsonForecast.properties.periods.length;
        document.getElementById("selectedOffice").innerHTML = "Weather Station: " + jsonGridData.properties.cwa + " - " + jsonGridData.properties.relativeLocation.properties.city + ", " + jsonGridData.properties.relativeLocation.properties.state
        document.getElementById("days").innerHTML = "Day&nbsp;&nbsp;<br><br>";
        document.getElementById("weather").innerHTML = "&nbsp;&nbsp;Forecast&nbsp;&nbsp;<br><br>";
        document.getElementById("temp").innerHTML = "Temperature<br><br>";
        for (var i = 0;i < days;i++){
            document.getElementById("days").innerHTML += jsonForecast.properties.periods[i].name + ":&nbsp;&nbsp;<br><br>";
            document.getElementById("weather").innerHTML += "&nbsp;&nbsp;" + jsonForecast.properties.periods[i].shortForecast  + "&nbsp;&nbsp;<br><br>";
            document.getElementById("temp").innerHTML += "&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;" + jsonForecast.properties.periods[i].temperature + "&#8457;<br><br>";
        } 
    }

    event.preventDefault();
}
