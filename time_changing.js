// Changing the time to my current time
//
//
//
//-------------------------var
//
//user's current time
var current_time = new Date();
//timezone offset
var n = current_time.getTimezoneOffset();
//utc time
//my timezone
var my_time = new Date(current_time.getTime() + n*60000 - 420*60000);
//time format var
var c_min = current_time.getMinutes();
var c_hour = current_time.getHours();
var c_Month =  current_time.getMonth();
var c_date = current_time.getDate();

var m_min = my_time.getMinutes();
var m_hour = my_time.getHours();
var m_Month =  my_time.getMonth();
var m_date = my_time.getDate();

//change to 2 digit number format
if (c_min < 10) {c_min = "0"+c_min;}
if (c_hour < 10) {c_hour = "0"+c_hour;}
if (c_date < 10) {c_date = "0"+c_date;}

if (m_min < 10) {m_min = "0"+m_min;}
if (m_hour < 10) {m_hour = "0"+m_hour;}
if (m_date < 10) {m_date = "0"+c_date;}

//month array
var month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

m_Month = month[m_Month];
c_Month = month[c_Month];

//am pm hour
var c_buoi;
var m_buoi;

if (m_hour>12) 
{
	m_hour = m_hour-12;
	m_buoi = "pm";
} else if (m_hour === 12) 
	{
		m_buoi = "pm";
	} else {
		m_buoi = "am";
	}

if (c_hour>12) 
{
	c_hour = c_hour-12;
	c_buoi = "pm";
} else if (c_hour === 12) 
	{
		c_buoi = "pm";
	} else {
		c_buoi = "am";
	}

document.getElementById("time_changing").innerHTML=
	"Your current time is: "+c_Month+" "+c_date+", "+current_time.getFullYear()+" "+c_hour+":"+c_min+" "+c_buoi+"</br>"+
	"My current time is: "+m_Month+" "+m_date+", "+my_time.getFullYear()+" "+m_hour+":"+m_min+" "+m_buoi+"</br>"+
	"<p>Copyright 2016</p>";

