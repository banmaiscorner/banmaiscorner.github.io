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

document.write("Your current time is: "+current_time.getMonth()+"/"+current_time.getDate()+"/"+current_time.getYear()+" "+current_time.getHours()+":"+current_time.getMinutes()+"</br>");
document.write("My current time is: "+my_time.getMonth()+"/"+my_time.getDate()+"/"+my_time.getYear()+" "+my_time.getHours()+":"+my_time.getMinutes());