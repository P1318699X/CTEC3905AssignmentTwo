document.onload = (function(){
    // Specifies the settings for David's player
    var davidOptions = {
        height: 360,
        width: 600,
        channel: "mesmerchair"
    };

    // Creates David's player and binds it to the corresponding DIV in the HTML file
    var davidPlayer = new Twitch.Player("davidChannel", davidOptions);
    // Sets the player to be muted on load
    davidPlayer.setVolume(0.0);

    // Specifies the settings for Charlie's player
    var charlieOptions = {
        height: 360,
        width: 600,
        channel: "littleangryman"
    };

    // Creates Charlie's player and binds it to the corresponding DIV in the HTML file
    var charliePlayer = new Twitch.Player("charlieChannel", charlieOptions);
    // Sets the player to be muted on load
    charliePlayer.setVolume(0.0);
}());