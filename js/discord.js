document.onload = (function(){
    // Buttons
    var    servOwnButtonVar = document.getElementById("serverOwner");
    var    servAdButtonVar  = document.getElementById("serverAdministrators");
    var    chanAdButtonVar  = document.getElementById("channelAdministrators");
    var    chanModButtonVar = document.getElementById("channelModerators");
    
    // JSON Table
    let    JSONTable = document.getElementById("JSONData");
   
    // Button Listeners
    servOwnButtonVar.addEventListener("click", servOwnButton_Clicked);
    servAdButtonVar.addEventListener("click", servAdButton_Clicked);
    chanAdButtonVar.addEventListener("click", chanAdButton_Clicked);
    chanModButtonVar.addEventListener("click", chanModButton_Clicked);

    // JSON Object Containing Discord Administrators and Moderators
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

    //Clears the table before new cells are inserted.
    function clearTable() {$("#JSONData tbody tr").remove();}

    // Iterates through the JSON object and inserts a new cell for any user matching the role.
    function iterateJSON(role) {
        var row = JSONTable.insertRow(0);
        for (var i = 0; i < discordObject.length; i++)
        {
            // Feeds the current item in the object into a new Var
            var obj = discordObject[i];
            // Evaluates the role of the user at that position to see if it matches the one fed into the function
            if (obj.Role == role)
            {
                // If the roles are a match, a new cell is created
                var cell = row.insertCell(0);
                // The cell is populated with the name and nickname of the Administrator/Moderator
                cell.innerHTML = "<div><p>" + obj.Name + "<br><br>Nickname on Server:<br>" + obj.Alias + "</p></div>";
                // And the background image of the cell is set according to the URL given in the JSON object
                cell.style.background = "url('" + obj.ImageURL + "') no-repeat";
            }   
        }
    }

    // The four following functions correspond to the four buttons in the HTML file.
    // Each one supplies a different role to the 'iterateJSON' function.

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