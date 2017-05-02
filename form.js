// JavaScript Document
function submit() {
	var name = document.getElementById("inputname");
	var email = document.getElementById("inputemail");
	var message = document.getElementById("inputmessage");
	var phone = document.getElementById("inputphone");
	var date = document.getElementById("inputdate").value;
	
	//name alert
	if (name.value === "") {
		document.getElementById("name_alert").innerHTML="Please fill in your name.";
	}
	//email alert
	if (email.value === "") {
		document.getElementById("email_alert").innerHTML="Please fill in your email.";
	}
	//valid email
	var mail_str=email.value;
	var n = mail_str.search("@");
	if (n===-1) {
		document.getElementById("email_alert").innerHTML="Please fill in a valid email.";
	}
	
	
	//message alert
	if (message.value === "") {
		document.getElementById("message_alert").innerHTML="Please fill in your message.";
	}
	
	//phone alert
	if (phone.value === "") {
		document.getElementById("phone_alert").innerHTML="Please fill in your phone.";
	}
	
	//phone alert
	if (date === "") {
		document.getElementById("date_alert").innerHTML="Please pick your date.";
	} else if (date- new Date()>0) //pick a day in the future
	{
		var cal = new Date(date);
		var m_Month =  cal.getMonth();
		var m_date = cal.getDate();
		var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		m_Month = month[m_Month];
		document.getElementById("date_alert").innerHTML="You picked "+m_Month+" "+m_date+", "+cal.getFullYear()+" as the due date";
	} else {
		document.getElementById("date_alert").innerHTML="Please pick a day in the future."; //pick a day in the past
	}
	
	//picked language
	var checkboxes = document.getElementsByName('language');
	var selected = [];
	//array
	for (var i=0; i<checkboxes.length; i++) {
    	if (checkboxes[i].checked) {
        	selected.push(checkboxes[i].value);
    		}
	}
	//turn array to string
	var selectedString=selected.join(", ");
	//display string
	if (selected.length>0) {
		document.getElementById("language_alert").innerHTML="You picked "+selectedString+" as your language(s)"; //show languages picked
	} else {
		document.getElementById("language_alert").innerHTML="Please pick your language(s)"; //didn't pick 
	}
	
	
	document.getElementById("submit_button").addEventListener("click", submit, false);
}

$(document).ready(function(){
	"use strict";
    $("#submit_button").hover(function(){
        $("#submit_button").animate({width: "30em"});
    },function(){
        $("#submit_button").animate({width: "15em"});
    });
});