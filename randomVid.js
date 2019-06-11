var vid0 = { vname: "Gondola in Venice", image: "testpics/gondola.jpg", link: "vidpages/v0.html", vid: "vids/gondola.mp4"};
var vid1 = { vname: "French Alps", image: "testpics/frenchalps.jpg", link: "vidpages/v1.html", vid: "vids/alps.mp4" };
var vid2 = { vname: "Central Park", image: "testpics/centralpark.jpg", link: "vidpages/v2.html", vid: "vids/centralpark.mp4" };
var vid3 = { vname: "Rocky Desert", image: "testpics/rockydesert.jpg", link: "vidpages/v3.html", vid: "vids/OrmaraMountain.mp4" };
var vid4 = { vname: "Roller Coaster", image: "testpics/rollercoaster.jpg", link: "vidpages/v4.html", vid: "vids/rollercoaster.mp4" };
var vid5 = { vname: "Forest Trail", image: "testpics/forest.jpg", link: "vidpages/v5.html", vid: "vids/forest.mp4" };
var vid6 = { vname: "Lakeshore County", image: "testpics/lakeshore.jpg", link: "vidpages/v6.html", vid: "vids/suburbandrive.mp4" };
var vid7 = { vname: "Alpine Village", image: "testpics/alpinevillage.jpg", link: "vidpages/v7.html", vid: "vids/alpinevillage.mp4" };
var vid8 = { vname: "Evergreen Trail", image: "testpics/evergreen.jpg", link: "vidpages/v8.html", vid: "vids/evergreen.mp4" };
var vid9 = { vname: "Bustling City", image: "testpics/bustlingcity.jpg", link: "vidpages/v9.html", vid: "vids/tokyo.mp4" };
var vid10 = { vname: "Evening City", image: "testpics/eveningcity.jpg", link: "vidpages/v10.html", vid: "vids/soho.mp4" };
var vid11 = { vname: "Thrilling Slopes", image: "testpics/thrillingslopes.jpg", link: "vidpages/v11.html", vid: "vids/skateboard.mp4" };
var vid12 = { vname: "Eiffel Tower", image: "testpics/eiffeltower.jpg", link: "vidpages/v12.html", vid: "vids/eiffeltower.mp4" };
var vid13 = { vname: "Outside the Louvre", image: "testpics/louvre.jpg", link: "vidpages/v13.html", vid: "vids/louvre.mp4" };
var vid14 = { vname: "Beach Walk", image: "testpics/beachwalk.jpg", link: "vidpages/v14.html", vid: "vids/venicebeach.mp4" };
var vid15 = { vname: "Bike Race", image: "testpics/bikerace.jpg", link: "vidpages/v15.html", vid: "vids/bikerace.mp4" };
var vid16 = { vname: "Country Road", image: "testpics/countryroad.jpg", link: "vidpages/v16.html", vid: "vids/bike.mp4" };

var arrTracks = [vid0, vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9, vid10, vid11, vid12, vid13, vid14, vid15, vid16];
var vids = 16;

function randomize() {
    var n = arrTracks.length;
    var tempArr = [];
    for (var i = 0; i < n - 1; i++) {
        tempArr.push(arrTracks.splice(Math.floor(Math.random() * arrTracks.length), 1)[0]);
    }

    tempArr.push(arrTracks[0]);
    arrTracks = tempArr;
}

var trackOfCurrentPage = null;
var numberTracksPerPage = 5;
var trackIndexOfCurrentPage = null;


function getTrackForNextPage() {
    if (trackIndexOfCurrentPage == null) {
        trackIndexOfCurrentPage = [];
        trackOfCurrentPage = [];

        for (var r = 0; r < numberTracksPerPage; r++) { 
            trackIndexOfCurrentPage[r] = r;
            trackOfCurrentPage[r] = arrTracks[trackIndexOfCurrentPage[r]];
        }
    }

    else {
        var trackIndexOfNewPage = trackIndexOfCurrentPage[numberTracksPerPage - 1];
        for (r = 0; r < numberTracksPerPage; r++) {
            trackIndexOfNewPage = trackIndexOfNewPage + 1;
            if (trackIndexOfNewPage >= vids) {
                trackIndexOfNewPage = 0;
            }
            trackIndexOfCurrentPage[r] = trackIndexOfNewPage;
            trackOfCurrentPage[r] = arrTracks[trackIndexOfCurrentPage[r]];
        }
    }
 
    document.getElementById("but0").innerHTML = trackOfCurrentPage[0].vname;
    document.getElementById("but1").innerHTML = trackOfCurrentPage[1].vname;
    document.getElementById("but2").innerHTML = trackOfCurrentPage[2].vname;
    document.getElementById("but3").innerHTML = trackOfCurrentPage[3].vname;
    document.getElementById("but4").innerHTML = trackOfCurrentPage[4].vname;

    document.getElementById("but0").style.background = "url('" + trackOfCurrentPage[0].image + "')";
    document.getElementById("but0").style.backgroundSize = "215px 215px";
    document.getElementById("but1").style.background = "url('" + trackOfCurrentPage[1].image + "')";
    document.getElementById("but1").style.backgroundSize = "215px 215px";
    document.getElementById("but2").style.background = "url('" + trackOfCurrentPage[2].image + "')";
    document.getElementById("but2").style.backgroundSize = "215px 215px";
    document.getElementById("but3").style.background = "url('" + trackOfCurrentPage[3].image + "')";
    document.getElementById("but3").style.backgroundSize = "215px 215px";
    document.getElementById("but4").style.background = "url('" + trackOfCurrentPage[4].image + "')";
    document.getElementById("but4").style.backgroundSize = "215px 215px";

    document.getElementById("but0").onclick = function () { localStorage.setItem("vidlocation", trackOfCurrentPage[0].vid); location.href = "vidpages/onepageallvids.html";};
    document.getElementById("but1").onclick = function () { localStorage.setItem("vidlocation", trackOfCurrentPage[1].vid); location.href = "vidpages/onepageallvids.html";};
    document.getElementById("but2").onclick = function () { localStorage.setItem("vidlocation", trackOfCurrentPage[2].vid); location.href = "vidpages/onepageallvids.html"; };
    document.getElementById("but3").onclick = function () { localStorage.setItem("vidlocation", trackOfCurrentPage[3].vid); location.href = "vidpages/onepageallvids.html"; };
    document.getElementById("but4").onclick = function () { localStorage.setItem("vidlocation", trackOfCurrentPage[4].vid); location.href = "vidpages/onepageallvids.html"; };

}

$(document).ready(function () {
    randomize();
    getTrackForNextPage();

});