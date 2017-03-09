document.onload = (function(){
    var options = {
        height: 360,
        width: 600,
        video: "120194422"
    };

    var player = new Twitch.Player("videoContainer", options);
    player.setVolume(0.0);
}());