async function GetUserDetails(){
    var apiString = "https://api.github.com/users/"

    var userID = document.getElementById("txtUser").value;

    var response = await fetch(apiString + userID + "/repos").then(success => result = success);
        //.catch(error => result = error);

    var repoList = "";

    if (response.status >= 200 && response.status  < 300){
        var jsonData = await response.json();

        if (jsonData.length > 0){
            for (var repo in jsonData){
                repoList += "<p><a target=\"_blank\" href = " + jsonData[repo].html_url + ">" + jsonData[repo].name + "</a></p>";
            }

            document.getElementById("userLink").innerHTML = "<a target=\"_blank\" href = " + jsonData[0].owner.html_url + ">" + jsonData[0].owner.login + "</a>"
        }
        else {
            repoList = "The GitHub user does not have any repos." 
        }
    }
    else {
        repoList = "User ID not found. " + response.message;
    }
    document.getElementById("repoList").innerHTML = repoList;

    event.preventDefault();
}