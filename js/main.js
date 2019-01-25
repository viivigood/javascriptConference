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

$( "#bounce" ).click(function() {
  $( "#bounce" ).toggle( "fold" );
});

$.ajax({
	url:'https://random.dog/woof.json',
	success: function(response){
		console.log(response.url);
		$("#randomDog").attr("src",response.url);
	}
});