/*
* additional javascript
*
**/

var svg_logo = document.getElementById("gels");
var logo_color = 0;
var logo_color_direction = true;

$(document).ready(function() {
	var timer = setInterval(logoColorLoop, 100);
});

function logoColorLoop() {

	logo_color_direction = changeColorDirection(logo_color, logo_color_direction);
	logo_color = applyColor(logo_color, logo_color_direction, 1);
	svg_logo.setAttribute("fill","hsl("+logo_color+", 100%, 30%)");
}

function changeColorDirection(color, color_direction) {
	if(color > 360) {
		color_direction =  false;
	} else if(color < 0) {
		color_direction = true;
	}
	return color_direction;
}

function applyColor(color, color_direction, factor) {
	if(color_direction) {
		color += factor;	
	} else {
		color -= factor;
	}
	return color;	
}