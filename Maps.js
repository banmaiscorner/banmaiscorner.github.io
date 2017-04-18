// JavaScript Document
//var waitForUser;
function geoTest() {
	"use strict";
	//waitForUser = setTimeout(fail, 10000);
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createMap)

	} else {
		fail();
	}
}


function createMap(position) {
	"use strict";
	//clearTimeout(waitForUser);
	var Lat = position.coords.latitude;
	var Lng = position.coords.longitude;


	var mapOptions = {
		center: new google.maps.LatLng(Lat, Lng), 
		zoom: 10
	};
	var map = new google.maps.Map(document.getElementById("GoogleMap"), mapOptions);
}

function fail() {
	"use strict";
	document.getElementById("GoogleMap").innerHTML = "Unable to access your current location";
}