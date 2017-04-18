// JavaScript Document
//var waitForUser;
function geoTest() {
	"use strict";
	//waitForUser = setTimeout(fail, 10000);
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createMap);

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
		zoom: 15,
	};
	
	var Al = new google.maps.ElevationService;
	
	var map = new google.maps.Map(document.getElementById("GoogleMap"), mapOptions);
	document.getElementById("GoogleMapTitude").innerHTML = "Latitude: "+Lat+", Longtitude: "+Lng+", Altitude: "+Al.getElevationForLocations(Lat, Lng);
}

function fail() {
	"use strict";
	document.getElementById("GoogleMap").innerHTML = "Unable to access your current location";
}