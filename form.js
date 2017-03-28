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
	} else {
		var cal = new Date(date);
		var m_Month =  cal.getMonth();
		var m_date = cal.getDate();
		var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		m_Month = month[m_Month];
		document.getElementById("date_alert").innerHTML="You picked "+m_Month+" "+m_date+", "+cal.getFullYear()+" as the due date";
		
		
	}
	
	document.getElementById("submit_button").addEventListener("click", submit, false);
}