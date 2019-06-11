var song0 = { link: "audio/DreamALittleDreamOfMe.mp3" };
var song1 = { link: "audio/FlyMeToTheMoon.mp3" };
var song2 = { link: "audio/MoonRiver.mp3" };
var song3 = { link: "audio/PutYourHeadOnMyShoulder.mp3" };
var song4 = { link: "audio/Summertime.mp3" };
var song5 = { link: "audio/YouNeverCanTell.mp3" };

var songTracks = [song0, song1, song2, song3, song4, song5];
var songs = 6;
var sound = new Audio();

function randomize() {
    var n = songTracks.length;
    var tempArr = [];
    for (var i = 0; i < n - 1; i++) {
        tempArr.push(songTracks.splice(Math.floor(Math.random() * songTracks.length), 1)[0]);
    }

    tempArr.push(songTracks[0]);
    songTracks = tempArr;

    var i = 0;
    sound.src = songTracks[i].link;
    sound.play();

    sound.onended = function () {
        i = i+1;
        sound.src = songTracks[i].link;
        sound.play();
    };
}

function audioPause() {
    sound.pause();
}

function audioPlay() {
    sound.play();
}

$(document).ready(function () {
    randomize();
});

$(document).keypress(function (event) {
    sound.play();
});