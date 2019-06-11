$(document).ready(function(){
    var peddlerVideo = document.getElementById('bikeVideo');
    var endTime = peddlerVideo.currentTime;
    //peddlerVideo.play();
    console.log(peddlerVideo);

    peddlerVideo.onended = function () {location.href = '../finishGame.html' };

    $(document).keypress(function (event) {
        console.log(String.fromCharCode(event.which));

        if ('p'.indexOf(String.fromCharCode(event.which)) !== -1) {
            if (document.getElementById("pauseScreen").style.display != "block") {
                peddlerVideo.play();
            }

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