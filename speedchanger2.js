$(document).ready(function(){
    var peddlerVideo = document.getElementById('bikeVideo');
    var endTime = peddlerVideo.currentTime;
    var vidSpeed = 0;
    var interval = 5000;
    var recentPedal = false;
    var minSpeed = 0.9;
    var increaseAmt = 0.5;
    var pedalCount = 0;
    var myVar = setTimeout(myTimer, interval);
    console.log(peddlerVideo);

    peddlerVideo.onended = function () {location.href = '../finishGame.html' };

    function myTimer() {
        if (vidSpeed > 1.5) {
            vidSpeed = vidSpeed - 0.5 * Math.sqrt(vidSpeed);
        }
        else if (vidSpeed > 1) {
            vidSpeed = vidSpeed - 0.25 * Math.sqrt(vidSpeed);
        } else if (vidSpeed > 0) {
            vidSpeed = vidSpeed - 0.25;
        }
        if (vidSpeed < minSpeed) {
            vidSpeed = 0;
        }

        if (pedalCount == 0) {
            recentPedal = false;
        } else {
            recentPedal = true;
        }
        if (!recentPedal) {
            interval = 750;
        } else {
            // Recent pedal
            if (vidSpeed == 0) {
                vidSpeed = minSpeed;
            }
            interval = interval - 750;

            if (interval < 1000) {
                interval = 1000;
            }
        }
        myVar = setTimeout(myTimer, interval);

        peddlerVideo.playbackRate = vidSpeed;
    }

    function updateRecentPedal() {
        if (pedalCount > 0) {
            pedalCount = pedalCount - 1;
        }
    }

    $(document).keypress(function (event) {
        console.log(String.fromCharCode(event.which));

        if ('p'.indexOf(String.fromCharCode(event.which)) !== -1) {

            pedalCount++;
            setTimeout(updateRecentPedal, 6000);
            vidSpeed = vidSpeed + increaseAmt;
            if (vidSpeed > 3) {
                vidSpeed = 3;
            }
            interval = interval + 1000;
            if (interval > 5000) {
                interval = 5000
            }
            peddlerVideo.playbackRate = vidSpeed;
            if (document.getElementById("pauseScreen").style.display != "block") {
                peddlerVideo.play();
            }
        }
    });

     var socket = io();
        socket.connect('http://192.168.0.100:3000');
        socket.emit('peddler start', {chatroom: 'peddler'});
        socket.on('peddler turned', function(msg){
            peddlerVideo.play();
        	endTime = peddlerVideo.currentTime + 3.5;
        	function checkTime() {
        		console.log(peddlerVideo.currentTime, endTime);
        		if (peddlerVideo.currentTime >= endTime) {
        			peddlerVideo.pause();
        		} else {
        		    /* call checkTime every 1/10th 
        		    second until endTime */
        		    setTimeout(checkTime, 100);
        	    }
            }
            checkTime();
            console.log('beche', msg.count);
        });

        socket.on('redirect', function(destination) {
            window.location.href = destination;
        });
});

function togglePause() {
    var paused = document.getElementById("pauseScreen");
    if (paused.style.display == "none") {
        paused.style.display = "block";
    } else {
        paused.style.display = "none";
    }

    var vid = document.getElementById("bikeVideo");
    vid.pause();
}