setInterval(daysTimer, 1000);
var days = 100;

function daysTimer() {
	console.log("Hola");
  var d = days -1;
  document.getElementById("days").innerHTML = d;
  days=d;
}

function helloFunction(){
	setTimeout('window.alert(\'Hello!\')', 2000);
}