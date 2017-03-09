document.onload = (function(){
    var davidOptions = {
        height: 360,
        width: 600,
        channel: "mesmerchair"
    };

    var davidPlayer = new Twitch.Player("davidChannel", davidOptions);
    davidPlayer.setVolume(0.0);

    var charlieOptions = {
        height: 360,
        width: 600,
        channel: "littleangryman"
    };

    var charliePlayer = new Twitch.Player("charlieChannel", charlieOptions);
    charliePlayer.setVolume(0.0);
}());