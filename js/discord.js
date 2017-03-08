document.onload = (function(){
    // Buttons
    var    servOwnButtonVar = document.getElementById("serverOwner");
    var    servAdButtonVar  = document.getElementById("serverAdministrators");
    var    chanAdButtonVar  = document.getElementById("channelAdministrators");
    var    chanModButtonVar = document.getElementById("channelModerators");
    
    let    JSONTable = document.getElementById("JSONData");
   
    // Button Listeners
    servOwnButtonVar.addEventListener("click", servOwnButton_Clicked);
    servAdButtonVar.addEventListener("click", servAdButton_Clicked);
    chanAdButtonVar.addEventListener("click", chanAdButton_Clicked);
    chanModButtonVar.addEventListener("click", chanModButton_Clicked);

    var discordObject = 
    [
            {"Name" : "Charlie",  "Alias" : "OmnipotentMidget",       "Role" : "Owner",                 "ImageURL" : "images/charlie.jpeg"},
            {"Name" : "Jonathan", "Alias" : "Admiral Slothkins III",  "Role" : "Server Administrator",  "ImageURL" : "images/jonathan.jpeg"},
            {"Name" : "Rob",      "Alias" : "Flying Betelgeuse Desu", "Role" : "Server Administrator",  "ImageURL" : "images/rob.jpeg"},
            {"Name" : "Alex",     "Alias" : "Captain Crust",          "Role" : "Server Administrator",  "ImageURL" : "images/alex.jpeg"},
            {"Name" : "Joe",      "Alias" : "IllusiveCamel",          "Role" : "Server Administrator",  "ImageURL" : "images/joe.jpeg"},
            {"Name" : "Kip",      "Alias" : "Ipkipi",                 "Role" : "Server Administrator",  "ImageURL" : "images/kip.jpeg"},
            {"Name" : "David",    "Alias" : "MrFlibble",              "Role" : "Channel Administrator", "ImageURL" : "images/david.jpeg"},
            {"Name" : "Hector",   "Alias" : "N/A",                    "Role" : "Channel Administrator", "ImageURL" : "images/hector.jpeg"},
            {"Name" : "Perdy",    "Alias" : "LittleViolentMidget",    "Role" : "Channel Moderator",     "ImageURL" : "images/perdy.jpeg"},
            {"Name" : "Gregg",    "Alias" : "SergeantSauce",          "Role" : "Channel Moderator",     "ImageURL" : "images/gregg.jpeg"}
    ];

    function clearTable() {$("#adminBlocks table tbody tr").remove();}
    function iterateJSON(role) {
        var row = JSONTable.insertRow(0);
        for (var i = 0; i < discordObject.length; i++)
        {
            var obj = discordObject[i];
            if (obj.Role == role)
            {
                var cell = row.insertCell(0);
                cell.innerHTML = "<div><p>" + obj.Name + "<br><br>" + obj.Alias + "</p></div>";
                cell.style.background = "url('" + obj.ImageURL + "')";
            }   
        }
    }

    function servOwnButton_Clicked() {
        clearTable();
        iterateJSON("Owner");
    }

    function servAdButton_Clicked() {
        clearTable();
        iterateJSON("Server Administrator");
    }

    function chanAdButton_Clicked() {
        clearTable();
        iterateJSON("Channel Administrator");
    }

    function chanModButton_Clicked() {
        clearTable();
        iterateJSON("Channel Moderator");
    }
}());