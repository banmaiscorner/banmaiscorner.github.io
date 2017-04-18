// JavaScript Document

function myMap() {
	"use strict";
	var mapProp= {
		center:new google.maps.LatLng(51.508742,-0.120850),
		zoom:5,
	};
	var map=new google.maps.Map(document.getElementById("GoogleMap"),mapProp);
}