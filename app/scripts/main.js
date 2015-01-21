/* jshint devel:true */
$( document ).ready(function() {

var myMessage = document.getElementById('message');
console.log(myMessage);

var listItems = document.getElementsByClassName('list');
console.log(listItems);

var listElements = document.getElementsByTagName('li');
console.log(listElements);

var alertFunction = function() {
	alert('here is a message');
};

 // var intervalId = setTimeout(alertFunction, 2000);
 // console.log(intervalId);

function startClock() {

	var today = new Date();
	var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    document.getElementById('clock').innerHTML = h%12 + ":" + m + ":" + s;
}


setInterval(startClock, 1000);
setInterval(changeBackgroundColor, 1000);



var colors = [5,5,5];

function changeBackgroundColor() {

	var background = document.getElementsByTagName('body');

	background[0].style.backgroundColor = 'rgb('+colors.join(',')+')';

	colors[0]+=10;
	colors[1]+=15;
	colors[2]+=20;

	for(var key in colors) {

		if(colors[key] >= 255) {
			colors[key] = 0;
		} else if (colors[key] === 0) {
			colors[key] = 5;
		}
	}
}

setInterval(function() {

	function rotateHands(el, degree) {
		el.style.transform = 'rotate('+degree+'deg)';
		el.style.transform = '-webkit-transform: rotate(360deg)';
		el.style.transform = '-moz-transform: rotate(360deg)';
	}

	var sec = document.getElementById('second-hand');
	var min = document.getElementById('minute-hand');
	var hour = document.getElementById('hour-hand');

	var d = new Date();
	rotateHands(sec, 6*d.getSeconds());
	rotateHands(min, 6*d.getMinutes());
	rotateHands(hour, 30*(d.getHours()%12) + d.getMinutes()/2);

}, 1000);


});
