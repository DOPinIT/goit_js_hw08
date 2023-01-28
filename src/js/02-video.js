import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iFrame = document.getElementById("vimeo-player")

const player = new Player(iFrame);



    player.on("timeupdate", throttle(function (sec) {
        localStorage.setItem("videoplayer-current-time", sec.seconds);
    }, 1000)
    );

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

