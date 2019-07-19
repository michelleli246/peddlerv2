var navPath = '';

//List of videos: video name, thumbnail image, video path, map coordinates
var vid0 = { vname: "Gondola in Venice", image: "images/peddler/gondola.jpg", vid: "videos/peddler/gondola.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [430, -45, 0, 0, 2.1, 6.1, -2.1, -6.1], [409.3, -107.5, 0, 0, 0, 8.8, 0, -8.8], [445.4, -130, 0, 0, -2.9, 5.8, 2.9, -5.8], [434, -157.5, 0, 0, 1.6, 8.5, -1.6, -8.5], [430.8, -172.5, 0, 0, 0, 0, 0, 0], [430, -189, 0, 0, 0, 0, 0, 0], [435, -263.7, 0, 0, 0, 10.9, 0, -10.9], [430, -285, 0, 0, 0, 0, 0, 0], [430, -301, 0, 0, 0, 0, 0, 0], [430, -317, 0, 0, 0, 0, 0, 0], [430, -333, 0, 0, 0, 0, 0, 0]] };
var vid1 = { vname: "French Alps", image: "images/peddler/frenchalps.jpg", vid: "videos/peddler/alps.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [434, 84.3, 0, 0, 0, 0, 0, 0], [434.9, 83.2, 0, 0, -0.5, 0.7, 0.2, -0.3], [435.7, 82.2, 0, 0, -0.3, 0.4, 2.5, -3.1], [442.6, 73.6, 0, 0, 0, 0, 0, 0], [442.6, 61.6, 0, 0, 0, 0, 0, 0], [450.6, 51.6, 0, 0, -1.3, 7.3, 1.3, -7.3], [448.6, 40.2, 0, 0, 1.3, 6, -1.3, -6], [455.9, 26.9, 0, 0, 0, 0, 0, 0], [455.2, 10.9, 0, 0, 2.7, 5.3, -2.7, -5.3], [445.3, 2.8, 0, 0, 0.7, 7.3, -0.7, -7.3], [449.2, -7.9, 0, 0, -0.7, 8, 0.7, -8], [451.9, -58.4, 0, 0, 0, 10.6, 0, -10.6], [444.6, -73, 0, 0, 0, 6, 0, -6], [440.6, -91, 0, 0, 0, 6.6, 0, -6.6], [445.9, -102.4, 0, 0, 0, 0, 0, 0], [445.3, -126.3, 0, 0, -4, 7.3, 4, -7.3], [453.9, -136.4, 0, 0, 0, 5.3, 0, -5.3], [453.2, -151.7, 0, 0, 3.3, 5.3, -3.3, -5.3], [445.9, -158.4, 0, 0, 0, 0, 0, 0], [438.6, -170.4, 0, 0, 3.3, 7.3, -3.3, -7.3], [438.6, -190.4, 0, 0, 0, 0, 0, 0], [445.2, -205.8, 0, 0, 0, 0, 0, 0], [441.3, -219.8, 0, 0, 0, 0, 0, 0], [441.9, -230.5, 0, 0, 0, 0, 0, 0], [457.2, -250.4, 0, 0, -1.3, 10.6, 1.3, -10.6], [443.9, -277.7, 0, 0, 0, 0, 0, 0, "none"], [437.6, -286.4, 0, 0, 0, 0, 0, 0], [437.3, -293.1, 0, 0, 0, 0, 0, 0], [445.9, -299.7, 0, 0, 0, 0, 0, 0], [445, -313.3, 0, 0, -0.7, 1.9, 2.9, -8.3]] };
var vid2 = { vname: "Central Park", image: "images/peddler/centralpark.jpg", vid: "videos/peddler/centralpark.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [433.3, 83, 0, 0, -0.7, 6.6, 0.7, -6.6], [432.7, 67, 0, 0, 0, 0, 0, 0], [433, 46.4, 0, 0, 0, 0, 0, 0], [433.3, 33, 0, 0, 0, 0, 0, 0], [439, 19.7, 0, 0, 0, 0, 0, 0], [430, 3, 0, 0, 0, 0, 0, 0], [430, -13, 0, 0, 0, 0, 0, 0], [430, -29, 0, 0, 0, 0, 0, 0], [432, -45.7, 0, 0, 0, 0, 0, 0], [435.3, -61, 0, 0, 0, 0, 0, 0], [438.6, -87.6, 0, 0, -1.3, 10.6, 1.3, -10.6], [444.5, -153.7, 0, 0, 0, 0, 0, 0], [445.3, -173.7, 0, 0, 0, 0, 0, 0], [442.6, -251, 0, 0, 0, 0, 0, 0], [439.9, -268.3, 0, 0, 0, 0, 0, 0], [437.3, -285, 0, 0, 0, 0, 0, 0], [430, -301, 0, 0, 2, 6, -2, -6], [417.4, -324.3, 0, 0, 0, 0, 0, 0], [420.7, -333, 0, 0, 0, 0, 0, 0]] };
var vid3 = { vname: "Rocky Desert", image: "images/peddler/rockydesert.jpg", vid: "videos/peddler/OrmaraMountain.mp4", points: [[436.6, 106.3, 0, 0, 0, 0, 0, 0], [433.3, 93.6, 0, 0, 0, 3.3, 0, -3.3], [435.3, 83.6, 0, 0, -2, 3.3, 2, -3.3], [440.6, 74.9, 0, 0, -2, -0.7, 2, 0.7], [443.9, 66.2, 0, 0, 2, 6.6, -2, -6.6], [442.6, 50.2, 0, 0, -1.3, 4, 1.3, -4], [448.5, 41.5, 0, 0, -0.7, 2, 0.7, -2], [451.8, 35.4, 0, 0, -0.7, 7.3, 0.7, -7.3], [446.6, 21.4, 0, 0, 0, 0, 0, 0], [438, 8, 0, 0, 0, 0, 0, 0], [436.6, -8.6, 0, 0, 3.3, 5.3, -3.3, -5.3], [429.6, -16.6, 0, 0, 1.3, 11.3, -1.3, -11.3], [440.4, -51.8, 0, 0, -0.1, 1.6, 0.2, -4.4], [439.9, -71.7, 0, 0, 0, 1, 0, -0.1], [443.3, -84.4, 0, 0, 0, 0, 0, 0], [451.9, -92.3, 0, 0, 0, 0, 0, 0], [457.1, -102.4, 0, 0, 0.7, 5.9, -0.7, -5.9], [453.9, -117.7, 0, 0, 0, 0, 0, 0], [444.6, -125.1, 0, 0, 0, 0, 0, 0], [440.6, -152.8, 0, 0, -3.3, 7.1, 3.3, -7.1], [451.9, -164.3, 0, 0, -2, 4, 2, -4], [452.5, -176.8, 0, 0, 0, 3.2, 0, -0.1], [452.5, -196.9, 0, 0, 0, 0, 0, 0], [457.2, -207.7, 0, 0, 0, 4, 0, -4], [452.5, -217.8, 0, 0, 0, 0, 0, 0], [450.6, -233.8, 0, 0, 0, 0, 0, 0], [451.2, -246.5, 0, 0, 0, 0, 0, 0], [457.9, -260.5, 0, 0, -9.3, 12.6, 9.3, -12.6], [503, -287.7, 0, 0, 0, 0, 0, 0], [516.1, -296.4, 0, 0, -2, 6.6, 2, -6.6], [516.8, -315.1, 0, 0, 0, 0, 0, 0]] };
var vid4 = { vname: "Country Road", image: "images/peddler/countryroad.jpg", vid: "videos/peddler/bike.mp4", points: [[392.9, 101.7, 0, 0, 0, 0, 0, 0], [398.2, 92.9, 0, 0, -2, 7.3, 2, -7.3], [398.2, 45.1, 0, 0, 0, 0, 0, 0], [406.8, 15.5, 0, 0, -5.3, 10.6, 5.3, -10.6], [413.4, -12.4, 0, 0, -4, 13.3, 4, -13.3], [427.3, -44.3, 0, 0, -2.7, 11.3, 2.7, -11.3], [430, -72.3, 0, 0, 0, 0, 0, 0], [430, -80.3, 0, 0, 0, 0, 0, 0], [430, -93, 0, 0, 0.7, 6, -0.7, -6], [422.7, -110.3, 0, 0, 0, 0, 0, 0], [419.4, -125, 0, 0, -1.3, 6.6, 1.3, -6.6], [430, -141, 0, 0, -2, 5.3, 2, -5.3], [431.3, -153.7, 0, 0, -1.3, 4, 1.3, -4], [438, -167.7, 0, 0, 0, 6, 0, -6], [432.7, -190.3, 0, 0, 0, 0, 0, 0], [430, -205, 0, 0, 0, 0, 0, 0], [430, -221, 0, 0, 0, 0, 0, 0], [431.3, -235, 0, 0, 1.3, 6, -1.3, -6], [425.4, -248.4, 0, 0, 2.7, 9.3, -2.7, -9.3], [425.4, -269, 0, 0, 0, 0, 0, 0], [424.7, -285.7, 0, 0, 0, 0, 0, 0], [425.4, -303, 0, 0, 0, 0, 0, 0], [422.7, -316.3, 0, 0, 0, 0, 0, 0], [412.8, -331, 0, 0, 0, 0, 0, 0]] };
var vid5 = { vname: "Forest Trail", image: "images/peddler/forest.jpg", vid: "videos/peddler/forest.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [435.3, 86.3, 0, 0, 0, 0, 0, 0], [436, 67.7, 0, 0, 1.3, 3.3, -1.3, -3.3], [430, 60.3, 0, 0, 0.7, 6.6, -0.7, -6.6], [434, 48.9, 0, 0, -1.4, 6, 1.4, -6], [434, 19, 0, 0, 0, 0, 0, 0], [434, 19, 0, 0, 0, 0, 0, 0], [436, 3, 0, 0, 0, 0, 0, 0], [434.6, -15, 0, 0, 0, 0, 0, 0], [432.7, -29, 0, 0, 0, 0, 0, 0], [434.6, -41, 0, 0, 0, 0, 0, 0], [437.3, -50.4, 0, 0, -1.3, 8.6, 1.3, -8.6], [434, -77, 0, 0, 0, 0, 0, 0], [430, -93, 0, 0, 0, 0, 0, 0], [430, -109, 0, 0, 0, 0, 0, 0], [432.7, -125, 0, 0, 0, 0, 0, 0], [430, -141, 0, 0, 0, 0, 0, 0], [425.4, -150.4, 0, 0, 0, 0, 0, 0], [425.4, -160.4, 0, 0, 0, 0, 0, 0], [429.3, -182.4, 0, 0, -0.7, 6.6, 0.7, -6.6], [425.4, -196.4, 0, 0, 0, 9.3, 0, -9.3], [428.7, -219.7, 0, 0, 0, 0, 0, 0], [430, -269, 0, 0, 0, 0, 0, 0], [430, -301, 0, 0, -1.3, 8, 1.3, -8], [434.6, -314.3, 0, 0, -4, 8.6, 4, -8.6], [433.3, -331.7, 0, 0, 0, 0, 0, 0]] };
var vid6 = { vname: "Lakeshore County", image: "images/peddler/lakeshore.jpg", vid: "videos/peddler/suburbandrive.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [430, 85, 0, 0, 0, 0, 0, 0], [440.5, 55.8, 0, 0, -0.7, 9.9, 0.7, -9.9], [432, 28.3, 0, 0, 0, 0, 0, 0], [431.3, -19.5, 0, 0, -3.3, 15.9, 3.3, -15.9], [449.2, -56.9, 0, 0, -1.3, 5.3, 1.3, -5.3], [447.2, -115.1, 0, 0, 0, 0, 0, 0], [443.3, -135.7, 0, 0, 4, 9.9, -4, -9.9], [432.7, -167.6, 0, 0, 2.7, 8.6, -2.7, -8.6], [438, -194.4, 0, 0, 0, 0, 0, 0], [436.6, -218.3, 0, 0, 0, 0, 0, 0], [440.6, -236.3, 0, 0, 0, 0, 0, 0], [437.3, -251, 0, 0, 0, 0, 0, 0], [436, -271, 0, 0, 0, 0, 0, 0], [435.3, -325.6, 0, 0, -0.7, 5.3, 0.7, -5.3], [441.9, -340.3, 0, 0, 0, 0, 0, 0]] };
var vid7 = { vname: "Alpine Village", image: "images/peddler/alpinevillage.jpg", vid: "videos/peddler/alpinevillage.mp4", points: [[439.9, 97.7, 0, 0, 0, 0, 0, 0], [436.6, 81, 0, 0, 0, 0, 0, 0], [431.3, 67.7, 0, 0, 0, 0, 0, 0], [430, 45.7, 0, 0, 0, 0, 0, 0], [422.7, 30.3, 0, 0, 0, 0, 0, 0], [422.7, 11, 0, 0, 0, 7.3, 0, -7.3], [427.3, -10.3, 0, 0, 0, 0, 0, 0], [430, -29, 0, 0, -2, 4.6, 2, -4.6], [437.3, -41.7, 0, 0, 0, 6.6, 0, -6.6], [434.6, -60.3, 0, 0, 0, 0, 0, 0], [430, -77, 0, 0, -0.7, 7.3, 0.7, -7.3], [434, -97.6, 0, 0, 0, 0, 0, 0], [431.3, -127, 0, 0, -2.7, 9.9, 0, 0], [431.3, -127, 0, 0, 0, 0, 2.7, -9.9], [442.7, -157.7, 0, 0, 1.3, 11.3, -1.3, -11.3], [430, -181.7, 0, 0, 3.3, 8.6, -3.3, -8.6], [430, -253, 0, 0, 1.3, 5.3, -1.3, -5.3], [426, -270.3, 0, 0, 0, 0, 0, 0], [427.3, -283.7, 0, 0, 0, 0, 0, 0], [438, -300.3, 0, 0, -1.3, 7.3, 1.3, -7.3], [430, -317, 0, 0, 0, 0, 0, 0], [425.4, -333, 0, 0, 0, 0, 0, 0]] };
var vid8 = { vname: "Evergreen Trail", image: "images/peddler/evergreen.jpg", vid: "videos/peddler/evergreen.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [430, 35, 0, 0, 2, 6.6, -2, -6.6], [424, 16.3, 0, 0, 0, 0, 0, 0], [422.7, -31, 0, 0, 1.3, 3.3, -1.3, -3.3], [414.7, -45, 0, 0, 0, 0, 0, 0], [410.8, -183.1, 0, 0, -2.7, 11.9, 2.7, -11.9], [426.7, -201.8, 0, 0, -3.3, 12.6, 3.3, -12.6], [430, -333, 0, 0, 0, 0, 0, 0]] };
var vid9 = { vname: "Bustling City", image: "images/peddler/bustlingcity.jpg", vid: "videos/peddler/tokyo.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [430, 83, 0, 0, 0, 0, 0, 0], [430, 54, 0, 0, 0, 16.6, 0, -33.2], [430, -29, 0, 0, 0, 0, 0, 0], [442.6, -47, 0, 0, 0, 0, 0, 0], [444.6, -70.9, 0, 0, 0, 0, 0, 0], [430.7, -86.4, 0, 0, 0, 0, 0, 0], [430, -172.3, 0, 0, 0, 0, 0, 0], [439.9, -189, 0, 0, 0, 0, 0, 0], [440.6, -334.3, 0, 0, 0, 0, 0, 0]] };
var vid10 = { vname: "Evening City", image: "images/peddler/eveningcity.jpg", vid: "videos/peddler/soho.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [430, -29, 0, 0, 0, 0, 0, 0], [441.3, -46.3, 0, 0, 0, 0, 0, 0], [442.6, -123.6, 0, 0, 0, 0, 0, 0], [430, -137.7, 0, 0, 0, 0, 0, 0], [430, -333, 0, 0, 0, 0, 0, 0]] };
var vid11 = { vname: "Winter Dogsled", image: "images/peddler/dogsledding.jpg", vid: "videos/peddler/dogsledding.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [430, 67, 0, 0, 0, 0, 0, 0], [434.6, 49, 0, 0, 0, 0, 0, 0], [435.3, 33, 0, 0, 0, 0, 0, 0], [434.6, -13, 0, 0, 0, 0, 0, 0], [430, -45, 0, 0, 0, 0, 0, 0], [430, -128.5, 0, 0, 0, 22.5, 0, -7.5], [430, -141, 0, 0, 0, 0, 0, 0], [435.3, -158.3, 0, 0, 0, 0, 0, 0], [447.2, -174.3, 0, 0, -2, 9.3, 2, -9.3], [448.6, -245.8, 0, 0, 0, 0, 0, 0], [443.9, -259.8, 0, 0, 0, 0, 0, 0], [445.9, -299.7, 0, 0, 0, 0, 0, 0], [443.9, -318.3, 0, 0, 0, 0, 0, 0], [443.9, -333, 0, 0, 0, 0, 0, 0]] };
var vid12 = { vname: "Eiffel Tower", image: "images/peddler/eiffeltower.jpg", vid: "videos/peddler/eiffeltower.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [434.6, 85, 0, 0, 0, 0, 0, 0], [430.7, 70.3, 0, 0, 0, 0, 0, 0], [430, -29, 0, 0, 0, 0, 0, 0], [433.3, -46.3, 0, 0, 0, 0, 0, 0], [430, -333, 0, 0, 0, 0, 0, 0]] };
var vid13 = { vname: "Outside the Louvre", image: "images/peddler/louvre.jpg", vid: "videos/peddler/louvre.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [430, 19, 0, 0, 0, 0, 0, 0], [410.7, -13, 0, 0, 0, 0, 0, 0], [410.8, -124.4, 0, 0, 0, 0, 0, 0], [430.7, -194.4, 0, 0, 0, 0, 0, 0], [418.1, -213.7, 0, 0, 0, 0, 0, 0], [416.7, -279, 0, 0, 0, 0, 0, 0], [430, -333, 0, 0, 0, 0, 0, 0]] };
var vid14 = { vname: "Beach Walk", image: "images/peddler/beachwalk.jpg", vid: "videos/peddler/venicebeach.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [428.7, -22.4, 0, 0, 0, 0, 0, 0], [433.4, -35.1, 0, 0, 0, 0, 0, 0], [434.6, -80.3, 0, 0, 0, 0, 0, 0], [430, -93, 0, 0, 0, 0, 0, 0], [430, -333, 0, 0, 0, 0, 0, 0]] };
var vid15 = { vname: "Egyptian Pyramids", image: "images/peddler/pyramids.jpg", vid: "videos/peddler/pyramids.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [430, -333, 0, 0, 0, 0, 0, 0]] };
var vid16 = { vname: "Majestic Mountains", image: "images/peddler/newzealand.jpg", vid: "videos/peddler/newzealand.mp4", points: [[443.9, 105.6, 0, 0, 0, 0, 0, 0], [430, 76.3, 0, 0, 2, 11.3, -0.1, -0.3], [429.8, 75.2, 0, 0, 0, 0.4, -1.8, -15.3], [429.3, -30.4, 0, 0, 0, 0, 0, 0], [428.7, -52.5, 0, 0, 2, 9.9, -2, -9.9], [422, -73.9, 0, 0, 2, 8, -2, -8], [422.7, -139.1, 0, 0, 0, 0, 0, 0], [422.7, -155.3, 0, 0, 2, 6.6, -2, -6.6], [418.8, -167.2, 0, 0, 0, 0, 0, 0], [420.7, -233.1, 0, 0, 0, 0, 0, 0], [429.3, -249.2, 0, 0, -5.3, 8.6, 5.3, -8.6], [439.9, -262.5, 0, 0, -2.7, 9.3, 2.7, -9.3], [439.3, -330.3, 0, 0, 0, 0, 0, 0]] };
var vid17 = { vname: "Italian Riviera", image: "images/peddler/italiancoast.jpg", vid: "videos/peddler/italiancoast.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [436.6, 84.9, 0, 0, 0, 0, 0, 0], [441.4, 55.6, 0, 0, 0, 7.7, 0, -7.7], [432.7, 18.7, 0, 0, 0, 0, 0, 0], [430, 3, 0, 0, 0, 0, 0, 0], [430, -109, 0, 0, 0, 0, 0, 0], [433.7, -121.6, 0, 0, 0, 0, 0, 0], [435, -172.6, 0, 0, 0, 0, 0, 0], [430.5, -196.8, 0, 0, 0, 0, 0, 0], [430, -317, 0, 0, -2.1, 11.9, 2.1, -11.9], [436.4, -331.9, 0, 0, 0, 0, 0, 0]] };
var vid18 = { vname: "Hawaiian Resort", image: "images/peddler/hawaii.jpg", vid: "videos/peddler/hawaii.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [429.5, 92.5, 0, 0, 0, 0, 0, 0], [441.6, 71.2, 0, 0, 0, 4.2, 0, -4.2], [438.2, 59.4, 0, 0, 0, 0, 0, 0], [443, 37, 0, 0, 0.5, 4, -0.5, -4], [435.8, 16.8, 0, 0, 0, 0, 0, 0], [438.8, -13, 0, 0, 0, 0, 0, 0], [433.4, -27.2, 0, 0, 0, 0, 0, 0], [438, -50.7, 0, 0, 0, 0, 0, 0], [431.9, -69, 0, 0, 0, 0, 0, 0], [430, -93, 0, 0, 0, 0, 0, 0], [421, -129.5, 0, 0, 6.4, 9.3, -6.4, -9.3], [412.2, -140.2, 0, 0, 0, 0, 0, 0], [411.5, -184.6, 0, 0, -4.2, 14.1, 4.2, -14.1], [432.1, -212.2, 0, 0, -1.6, 12.2, 1.6, -12.2], [427.3, -226.1, 0, 0, 0, 0, 0, 0], [423.9, -250.6, 0, 0, -2.4, 9.5, 2.4, -9.5], [441.9, -269.6, 0, 0, -0.8, 16.4, 0.8, -16.4], [454.4, -292, 0, 0, 0.3, 11.1, -0.3, -11.1], [443.8, -300.6, 0, 0, 1.9, 8, -1.9, -8], [450.7, -327.2, 0, 0, 4, 10.3, -4, -10.3]] };
var vid19 = { vname: "Cherry Blossoms", image: "images/peddler/cherryblossoms.jpg", vid: "videos/peddler/cherryblossoms.mp4", points: [[430, 99, 0, 0, 0, 0, 0, 0], [428.9, -43.7, 0, 0, 0, 10.3, 0, -10.3], [434.4, -136.1, 0, 0, 3.2, 24.1, -3.2, -24.1], [414.6, -193, 0, 0, 2.4, 10.6, -2.4, -10.6], [415.1, -333, 0, 0, 0, 0, 0, 0]] };
var vid20 = { vname: "Big Ben", image: "images/peddler/bigben.jpg", vid: "videos/peddler/bigben.mp4", points: [[456.3,96.3,0,0,0,0,0,0],[430,83,0,0,0,0,0,0],[429.5,-57.6,0,0,0,0,0,0],[441.9,-68.8,0,0,-0.8,-18.6,0.8,18.6],[429.7,-81.1,0,0,0,0,0,0],[430,-333,0,0,0,0,0,0]] };
var vid21 = { vname: "Bike Race", image: "images/peddler/bikerace.jpg", vid: "videos/peddler/bikerace.mp4", points: [[437.4, 99.3, 0, 0, 0, 0, 0, 0], [431.1, 77.8, 0, 0, 0.8, 8.5, -0.8, -8.5], [441.1, 61.4, 0, 0, 0, 10.1, 0, -10.1], [440.6, -57.2, 0, 0, 0, 0, 0, 0], [444.3, -64.4, 0, 0, 0, 0, 0, 0], [447, -92.6, 0, 0, -2.9, 9.5, 2.9, -9.5], [459.7, -112.6, 0, 0, 0, 0, 0, 0], [465.8, -127.4, 0, 0, 0.5, 10.6, -0.5, -10.6], [459.7, -138.6, 0, 0, 0, 0, -4.5, -12.7], [453.9, -188.3, 0, 0, -0.3, 18.6, 0.3, -18.6], [463.1, -203.4, 0, 0, -1.9, 7.7, 1.9, -7.7], [467.6, -211.3, 0, 0, -4.2, 0.3, 4.2, -0.3, "straight"], [467.6, -343.1, 0, 0, 0, 0, 0, 0]] };

var arrTracks = [vid0, vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9, vid10, vid11, vid12, vid13, vid14, vid15, vid16, vid17, vid18, vid19, vid20, vid21];
var vids = arrTracks.length;

var videoPlaying;
var vidSpeed = 0;
var intervalNumPedals = 0;
let vidStartTime = 0;
var onVid = false;
const BACKEND_URL = 'http://99.79.49.40:8000';
var eventObject = {
    timestamp:"currentTime", //current time
    typeOfInteraction:"interactionType", //buttonPress, timeStart, vidStart, sessionEnd, vidEnd, peddle, videoName
    interaction:"event", //q, w, e, a, s, d, p, videoName
    elapsedTime:"elapsedTime" // Time since video started, 0 if video has not started
};
const vidData=[];
// Array holding all the eventObjects
var eventList = [];

//Randomize the videos displayed on the selection buttons
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
const numberTracksPerPage = 5;
var trackIndexOfCurrentPage = null;

//Set up when user selects a video
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

    document.getElementById("but0").onclick = function () { pts = trackOfCurrentPage[0].points; togglePause(); randomizeAud(); document.getElementById("bikeVideo1").src = document.getElementById("bikeVideo").src = trackOfCurrentPage[0].vid; recordVideoName(trackOfCurrentPage[0].vname); videoPlaying = trackOfCurrentPage[0].vname; recordRejectedVideos([trackOfCurrentPage[1].vname, trackOfCurrentPage[2].vname, trackOfCurrentPage[3].vname, trackOfCurrentPage[4].vname]); startOrEndVid('q'); };
    document.getElementById("but1").onclick = function () { pts = trackOfCurrentPage[1].points; togglePause(); randomizeAud(); document.getElementById("bikeVideo1").src = document.getElementById("bikeVideo").src = trackOfCurrentPage[1].vid; recordVideoName(trackOfCurrentPage[1].vname); videoPlaying = trackOfCurrentPage[1].vname; recordRejectedVideos([trackOfCurrentPage[0].vname, trackOfCurrentPage[2].vname, trackOfCurrentPage[3].vname, trackOfCurrentPage[4].vname]); startOrEndVid('w'); };
    document.getElementById("but2").onclick = function () { pts = trackOfCurrentPage[2].points; togglePause(); randomizeAud(); document.getElementById("bikeVideo1").src = document.getElementById("bikeVideo").src = trackOfCurrentPage[2].vid; recordVideoName(trackOfCurrentPage[2].vname); videoPlaying = trackOfCurrentPage[2].vname; recordRejectedVideos([trackOfCurrentPage[0].vname, trackOfCurrentPage[1].vname, trackOfCurrentPage[3].vname, trackOfCurrentPage[4].vname]); startOrEndVid('e'); };
    document.getElementById("but3").onclick = function () { pts = trackOfCurrentPage[3].points; togglePause(); randomizeAud(); document.getElementById("bikeVideo1").src = document.getElementById("bikeVideo").src = trackOfCurrentPage[3].vid; recordVideoName(trackOfCurrentPage[3].vname); videoPlaying = trackOfCurrentPage[3].vname; recordRejectedVideos([trackOfCurrentPage[0].vname, trackOfCurrentPage[1].vname, trackOfCurrentPage[2].vname, trackOfCurrentPage[4].vname]); startOrEndVid('a'); };
    document.getElementById("but4").onclick = function () { pts = trackOfCurrentPage[4].points; togglePause(); randomizeAud(); document.getElementById("bikeVideo1").src = document.getElementById("bikeVideo").src = trackOfCurrentPage[4].vid; recordVideoName(trackOfCurrentPage[4].vname); videoPlaying = trackOfCurrentPage[4].vname; recordRejectedVideos([trackOfCurrentPage[0].vname, trackOfCurrentPage[1].vname, trackOfCurrentPage[2].vname, trackOfCurrentPage[3].vname]); startOrEndVid('s'); };
    document.getElementById("but5").onclick = function () { getTrackForNextPage(); startOrEndVid('d'); recordRejectedVideos([trackOfCurrentPage[0].vname, trackOfCurrentPage[1].vname, trackOfCurrentPage[2].vname, trackOfCurrentPage[3].vname, trackOfCurrentPage[4].vname]);};

}

//Display and hide video and video selection screens in succession
function togglePause() {
    var select = document.getElementById("select");
    var video = document.getElementById("video");

    if (select.style.display == "block") {
        select.style.display = "block";
        video.style.display = "none";
    } else {
        select.style.display = "none";
        video.style.display = "block";
        map();
        startingCountDown();
        
    }
}

//A selection of songs
var song0 = { link: "/sounds/peddler/DreamALittleDreamOfMe.mp3" };
var song1 = { link: "/sounds/peddler/FlyMeToTheMoon.mp3" };
var song2 = { link: "/sounds/peddler/MoonRiver.mp3" };
var song3 = { link: "/sounds/peddler/PutYourHeadOnMyShoulder.mp3" };
var song4 = { link: "/sounds/peddler/Summertime.mp3" };
var song5 = { link: "/sounds/peddler/YouNeverCanTell.mp3" };
var song6 = { link: "/sounds/peddler/Diana.mp3" };
var song7 = { link: "/sounds/peddler/RocketMan.mp3" };
var song8 = { link: "/sounds/peddler/UnchainedMelody.mp3" };
var song9 = { link: "/sounds/peddler/UnderTheBoardwalk.mp3" };

var songTracks = [song0, song1, song2, song3, song4, song5, song6, song7, song8, song9];
var sound = new Audio();

//Randomize the song which plays 
function randomizeAud() {
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
        i = i + 1;
        sound.src = songTracks[i].link;
        sound.play();
    };
}


var cur; //current progress of video1
var cur1; //current progress of video2
var dur; //duration of video

var scaling = "fit"; // this will resize to fit inside the screen dimensions
//var width = 1140;
//var height = 700;
var color = light; // ZIM colors like green, blue, pink, faint, clear, etc.
var outerColor = dark; // any HTML colors like "violet", "#333", etc. are fine to use

const frame = new Frame();

function map() { // ES6 Arrow Funchttps://codepen.io/zimjstion - similar to function(){}
    // often need below - so consider it part of the template
    let stage = frame.stage;

    var path = new Squiggle({
        color: '#686868',
        thickness: 16,
        points: pts,
        onTop: false,
        showControls: false
    }).pos({ x: 280, y: 200, right: true, bottom: true });

    var path1 = new Squiggle({
        color: '#F5F5F5',
        thickness: 12,
        points: pts,
        onTop: false,
        showControls: false
    }).pos({ x: 280, y: 200, right: true, bottom: true });

    var path2 = new Squiggle({
        color: '#686868',
        thickeness: 9,
        points: pts,
        onTop: false,
        showControls: false
    }).pos({ x: 280, y: 200, right: true, bottom: true });

    var path3 = new Squiggle({
        color: yellow,
        thickness: 2,
        points: pts,
        onTop: false,
        showControls: false,
        dashed: true
    }).pos({ x: 280, y: 200, right: true, bottom: true });

    // Dynamic Animation
    var rect1 = new Triangle(20, 30, 30, '#FF00FF')
        .centerReg()
        .sca(1, -1)
        .rot(-90)
        .animate({
            props: {
                // orient:false,
                path: path
            },
            time: 2000,
            ease: "linear",
            startPaused: true
        });

    var rect2 = new Triangle(20, 30, 30, '#0033EE')
            .centerReg()
            .sca(1, -1)
            .rot(-90)
            .animate({
                props: {
                    // orient:false,
                    path: path
                },
                time: 2000,
                ease: "linear",
                startPaused: true
            });

    // if using damping with slider then use a Ticker not a change event
    Ticker.add(function () {
        rect1.percentComplete = (cur / dur) * 100;
        rect2.percentComplete = (cur1/dur)*100;
    });

    stage.update(); // this is needed to show any changes
    
    var vid = document.getElementById('bikeVideo');
    cur = vid.currentTime;

    vid.onloadedmetadata = function () {
        dur = vid.duration;
        console.log(cur);

    };

    setInterval(function () {
        cur = vid.currentTime;
        $(".progress-bar").each(function () {
            $(this).width((cur / dur) * 100 + '%');
        });
    }, 10);

};

var countDown=7;

//TODO
function startingCountDown(){

    if(countDown >2){
        document.getElementById("ctDown").innerHTML=countDown-2;
    } else if(countDown > 1){
        document.getElementById("ctDown").innerHTML="Go!";
    }else{
        document.getElementById("ctDown").innerHTML="";
        clearTimeout();
        speedchanger();

    }
        
    countDown--;
    setTimeout(startingCountDown, 1000);

};

$(document).ready(function () {
    randomize();
    getTrackForNextPage();
    //speedchanger();

});

$(document).keypress(function (event) {

    console.log(String.fromCharCode(event.which));

    if ('q'.indexOf(String.fromCharCode(event.which)) !== -1) {
        recordButtonPress('q');
        if (document.getElementById("but0") != null && document.getElementById("but0").parentNode.parentNode.parentNode.style.display != "none") {
            document.getElementById("but0").click();
        }
        else if (document.getElementById("video") != null) {
            postData();
        }
    } else if ('w'.indexOf(String.fromCharCode(event.which)) !== -1) {
        recordButtonPress('w');
        if (document.getElementById("but1") != null && document.getElementById("but1").parentNode.parentNode.parentNode.style.display != "none") {
            document.getElementById("but1").click();
        }
        else if (document.getElementById("video") != null) {
            postData();
        }
    } else if ('e'.indexOf(String.fromCharCode(event.which)) !== -1) {
        recordButtonPress('e');
        if (document.getElementById("but2") != null && document.getElementById("but2").parentNode.parentNode.parentNode.style.display != "none") {
            document.getElementById("but2").click();
        }
        else if (document.getElementById("video") != null) {
            postData();
        }
    } else if ('a'.indexOf(String.fromCharCode(event.which)) !== -1) {
        recordButtonPress('a');
        if (document.getElementById("but3") != null && document.getElementById("but3").parentNode.parentNode.parentNode.style.display != "none") {
            document.getElementById("but3").click();
        }
        else if (document.getElementById("video") != null) {
            postData();
        }
    } else if ('s'.indexOf(String.fromCharCode(event.which)) !== -1) {
        recordButtonPress('s');
        if (document.getElementById("but4") != null && document.getElementById("but4").parentNode.parentNode.parentNode.style.display != "none") {
            document.getElementById("but4").click();
        }
        else if (document.getElementById("video") != null) { 
            postData();  
        }
    } else if ('d'.indexOf(String.fromCharCode(event.which)) !== -1) {
        recordButtonPress('d');
        if (document.getElementById("but5") != null && document.getElementById("but5").parentNode.parentNode.parentNode.style.display != "none") {
            document.getElementById("but5").click();
        }
        else if (document.getElementById("video") != null) {
            postData();
        }
    }
    else if ('012'.indexOf(String.fromCharCode(event.which)) !== -1 ){
        if (String.fromCharCode(event.which) === '0') {
            navPath = '/nav'
        } else if (String.fromCharCode(event.which) === '1') {
            navPath = '/peddler'
        } else if (String.fromCharCode(event.which) === '2') {
            navPath = '/ds'
        }

        function navigate() {
            window.location.href = navPath;
        }
        setTimeout(navigate, 1000);
        
    }
});

function startOrEndVid (key){
    if (!onVid) {
        // On menu
        if (key == 'q'){
            recordTime('vidStart');
        } else if (key == 'w') {
            recordTime('vidStart');
        } else if (key == 'e') {
            recordTime('vidStart');
        } else if (key == 'a') {
            recordTime('vidStart');
        } else if (key == 's') {
            recordTime('vidStart');
        } else if (key == 'd') {
            // do nothing
        }
        onVid = true;

        // Send pedal count every 5s
        intervalNumPedals = 0;
        setInterval(function(){recordPedalInterval(intervalNumPedals); intervalNumPedals = 0}, 5000);
        vidStartTime = Date.now();
    } else {
        // On video
        if (key == 'q'){
            recordTime('vidEnd');
        } else if (key == 'w') {
            recordTime('vidEnd');
        } else if (key == 'e') {
            recordTime('vidEnd');
        } else if (key == 'a') {
            recordTime('vidEnd');
        } else if (key == 's') {
            recordTime('vidEnd');
        } else if (key == 'd') {
            recordTime('vidEnd');
        }
    }
}

function speedchanger(){
    let peddlerVideo1 = document.getElementById('bikeVideo');
    var speed = [0, 1, 1.3, 1.6, 1.95, 2.3, 2.5];//var speed = [0, 1, 1.3, 1.55, 1.75, 1.9, 2];
    var speedIndex = 0;
    var decreaseInterval = 1000;
    var updateInterval = 3000;
    var currentPedalTime = 0;
    var lastPedalTime;
    var pedalCount = 0;

    // Set speeds according to video
    function setSpeed(){    
        if (videoPlaying == "Gondola in Venice"){
            speed = [0, 1, 2, 3, 5, 10, 50];//[0, 1, 1.3, 1.5, 2, 2.5, 3];
        } else if (videoPlaying == "French Alps"){
            speed = [0, 1, 1.4, 1.75, 2.15, 2.5, 3];
        } else if (videoPlaying == "Central Park"){
            speed = [0, 1, 1.3, 1.8, 2.2, 2.65, 3];
        } else if (videoPlaying == "Rocky Desert"){
            speed = [0, 0.8, 1, 1.3, 1.7, 2, 2.5];
        } else if (videoPlaying == "Country Road"){
            speed = [0, 1, 1.5, 2, 2.5, 3, 3.5];
        } else if (videoPlaying == "Forest Trail"){
            speed = [0, 1, 1.5, 1.8, 2.5, 3, 3.5];
        } else if (videoPlaying == "Lakeshore County"){
            speed = [0, 0.8, 1.2, 1.6, 2.1, 2.6, 3.2];
        } else if (videoPlaying == "Alpine Village"){
            speed = [0, 0.8, 1.1, 1.35, 1.65, 2.25, 3.0];
        } else if (videoPlaying == "Evergreen Trail"){
            speed = [0, 1.5, 2, 2.5, 3, 3.5, 4];
        } else if (videoPlaying == "Bustling City"){
            speed = [0, 1, 1.3, 1.6, 1.95, 2.3, 2.5];
        } else if (videoPlaying == "Evening City"){
            speed = [0, 1, 2, 2.5, 3, 3.5, 4];
        } else if (videoPlaying == "Winter Dogsled"){
            speed = [0, 1, 1.4, 1.75, 2.05, 2.3, 2.5];
        } else if (videoPlaying == "Eiffel Tower"){
            speed = [0, 1, 2, 2.5, 3, 3.5, 4];
        } else if (videoPlaying == "Outside the Louvre"){
            speed = [0, 1, 2, 2.5, 3, 3.5, 4];
        } else if (videoPlaying == "Beach Walk"){
            speed = [0, 1, 2, 2.5, 3, 3.5, 4];
        } else if (videoPlaying == "Egyptian Pyramids"){
            speed = [0, 1, 1.5, 2, 2.5, 3, 4];
        } else if (videoPlaying == "Majestic Mountains"){
            speed = [0, 0.8, 1.1, 1.5, 2, 2.6, 3];
        } else if (videoPlaying == "Italian Riviera"){
            speed = [0, 1, 2, 2.5, 3, 3.5, 4];
        } else if (videoPlaying == "Hawaiian Resort"){
            speed = [0, 1, 1.3, 1.6, 1.95, 2.3, 2.5];
        } else if (videoPlaying == "Cherry Blossoms"){
            speed = [0, 1, 1.5, 2, 2.6, 3.5, 4];
        } else if (videoPlaying == "Big Ben"){
            speed = [0, 1, 1.3, 1.6, 1.9, 2.5, 3.5];
        }  else if (videoPlaying == "Bike Race"){
            speed = [0, 0.7, 0.9, 1.2, 1.5, 1.8];
        }
    }
    // Decrease the speed
    var myDecr = setTimeout(decreaseSpeed, decreaseInterval);
    
    function decreaseSpeed(){
        speedIndex--;
        if (speedIndex <= 0){
            speedIndex = 0;
        }
        peddlerVideo1.playbackRate = vidSpeed;
        recordSpeed(vidSpeed);
    }
        
    function updateRecentPedal() {
        if (pedalCount > 0) {
            pedalCount = pedalCount - 1;
        }

        if (pedalCount == 0){
            speedIndex = 0;
            vidSpeed = speed[speedIndex];
            peddlerVideo1.playbackRate = vidSpeed;
            recordSpeed(vidSpeed);
        }
    }
    
    $(document).keypress(function (event) {
        console.log(String.fromCharCode(event.which));
        if ('p'.indexOf(String.fromCharCode(event.which)) !== -1) {
            ifPeddle();
        }

    });

    function ifPeddle(){
        recordPeddle();
        recordSpeed(vidSpeed);
        pedalCount++;
        intervalNumPedals++;
        setTimeout(updateRecentPedal, updateInterval);
        setSpeed();
        console.log(videoPlaying);
    
        // Increase vidSpeed here
        lastPedalTime = currentPedalTime;
        currentPedalTime = Date.now(); // in milliseconds
    
        var pedalTimeInterval = currentPedalTime - lastPedalTime;
    
        if (pedalTimeInterval >= 0 && pedalTimeInterval < 75){
            speedIndex = 6;
        } else if (pedalTimeInterval >= 75 && pedalTimeInterval < 250){
            speedIndex = 5;
        } else if (pedalTimeInterval >= 250 && pedalTimeInterval < 500){
            speedIndex = 4;
        } else if (pedalTimeInterval >= 500 && pedalTimeInterval < 1000){
            speedIndex = 3;
        } else if (pedalTimeInterval >= 1000 && pedalTimeInterval < 1500){
            speedIndex = 2;
        } else {
            speedIndex = 1;
        }
    
        vidSpeed = speed[speedIndex];
    
        peddlerVideo1.playbackRate = vidSpeed;
        recordSpeed(vidSpeed);
        peddlerVideo1.play();
    }
    var socket = io();
    socket.connect('http://192.168.0.100:3000');
    socket.emit('peddler start', { chatroom: 'peddler' });
    socket.on('peddler turned', function (msg) {
        console.log('beche', msg.count);
        ifPeddle();
       
    });
    socket.on('redirect', function (destination) {
        window.location.href = destination;
    });
}

function getElapsedTime(currentTime){
    if (vidStartTime == 0){
        return 0;
    } else {
        var vid = document.getElementById('bikeVideo');
        return vid.currentTime;
    }
}

function recordButtonPress(pressedKey){
    // Create events
    const buttonPressEvent = Object.create(eventObject);
    buttonPressEvent.timestamp = Date.now();
    buttonPressEvent.typeOfInteraction = "buttonPress";
    buttonPressEvent.interaction = pressedKey;
    buttonPressEvent.elapsedTime = getElapsedTime(Date.now());

    // Log to eventList 
    eventList.push(buttonPressEvent);
}

function recordPeddle(){
    const peddleEvent = Object.create(eventObject);
    peddleEvent.timestamp = Date.now();
    peddleEvent.typeOfInteraction = "peddle";
    peddleEvent.interaction = 'p';
    peddleEvent.elapsedTime = getElapsedTime(Date.now());

    // Log to eventList array
    eventList.push(peddleEvent);
}

function recordTime(timeType){
    const timeEvent = Object.create(eventObject);
    timeEvent.timestamp = Date.now();
    timeEvent.typeOfInteraction = timeType;
    timeEvent.interaction = Date.now();
    timeEvent.elapsedTime = getElapsedTime(Date.now());

    // Log to eventList array
    eventList.push(timeEvent);
}

function recordVideoName(vidName){
    const videoEvent = Object.create(eventObject);
    videoEvent.timestamp = Date.now();
    videoEvent.typeOfInteraction = "videoName";
    videoEvent.interaction = vidName;
    videoEvent.elapsedTime = getElapsedTime(Date.now());

    // Log to eventList array
    eventList.push(videoEvent);
}

function recordRejectedVideos(rejectedVidNamesArray){
    if (rejectedVidNamesArray instanceof Array){
        for (i = 0; i < rejectedVidNamesArray.length; i++){
            const rejectedVidEvent = Object.create(eventObject);
            rejectedVidEvent.timestamp = Date.now();
            rejectedVidEvent.typeOfInteraction = "rejectedVideoName";
            rejectedVidEvent.interaction = rejectedVidNamesArray[i];
            rejectedVidEvent.elapsedTime = getElapsedTime(Date.now());

            // Log to eventList array
            eventList.push(rejectedVidEvent);
        }
    }
}

function recordSpeed(speed){
    const speedEvent = Object.create(eventObject);
    speedEvent.timestamp = Date.now();
    speedEvent.typeOfInteraction = 'speed';
    speedEvent.interaction = speed;
    speedEvent.elapsedTime = getElapsedTime(Date.now());

    // Log to eventList array
    eventList.push(speedEvent);
}

function recordPedalInterval(intervalNumPedals){
    const pedalIntervalEvent = Object.create(eventObject);
    pedalIntervalEvent.timestamp = Date.now();
    pedalIntervalEvent.typeOfInteraction = 'pedalsIn5Seconds';
    pedalIntervalEvent.interaction = intervalNumPedals;
    pedalIntervalEvent.elapsedTime = getElapsedTime(Date.now());

    // Log to eventList array
    eventList.push(pedalIntervalEvent);
}

function postData(url , data ) {
    let session={
        datetime: Date.now(),
        eventList: eventList,
    }

    // Default options are marked with *p
    makeRequest(session)
    .then(response => {response.json()
        console.log(response);
        document.getElementById("video").click();

    }).catch((err)=>{
        console.log(err);
        let arrays=localStorage.getItem('videoJSON');
        if(arrays){
            arrays=JSON.parse(arrays);
            console.log(arrays)
            arrays.push((session));
            localStorage.setItem('videoJSON',JSON.stringify(arrays));
        }else{
            const newArrays=[];

            newArrays.push(session);
            localStorage.setItem('videoJSON',JSON.stringify(newArrays));
        }
        document.getElementById("video").click();
    }); // parses JSON response into native Javascript objects
}

async function makeRequest (session){
    const res = await fetch(BACKEND_URL+'api/physical-centivizer/', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(session), // body data type must match "Content-Type" header
    })
    return res
}
window.onload=((e)=>{
    let arrays=localStorage.getItem('videoJSON');
    if(arrays){
        arrays=JSON.parse(arrays);
        arrays.forEach((element,index)=>{
            makeRequest(element).then(res=>{
                console.log(res)
                if(res.status===200){
                    console.log('success')
                    thearrays=JSON.parse(localStorage.getItem('videoJSON'));
                    thearrays.forEach((theelement,i) => {
                        console.log(theelement,element)
                        if(JSON.stringify(theelement)==JSON.stringify(element)){
                            thearrays.splice(i,1);
                            localStorage.setItem('videoJSON',JSON.stringify(thearrays));
                        }
                    });


                }
            }).catch(err=>{
                console.log(err);
            });
        
        });
    }
     
});