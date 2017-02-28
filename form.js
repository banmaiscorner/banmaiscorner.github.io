// JavaScript Document
function submit() {
	var name = document.getElementById("inputname");
	var email = document.getElementById("inputemail");
	var message = document.getElementById("inputmessage");
	if (name.value === "") {
		alert("Please fill in your name.");
	}
	if (email.value === "") {
		alert("Please fill in your email.");
	}
	if (message.value === "") {
		alert("Please fill in your message.");
	}
	if (name.value && message.value && email.value) {
		alert("Thank you !");
	}
	document.getElementById("submit_button").addEventListener("click", submit, false);
}