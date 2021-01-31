function link2collage2() {
	location.replace("https://www.avanthi.edu.in/");
}

function link2school() {
	location.replace("https://maps.app.goo.gl/Wsxa6w22BgEX2DkK6")
}

function link2collage() {
	location.replace("https://maps.app.goo.gl/8Qwfr3knHf7wjX156")
}

var i = 0;
var txt = "We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip/ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 	nisi ut aliquip ex ea commodo consequat.";
var speed = 4;
function typewriter() {
	if(i < txt.length) {
		document.getElementById("showinfo").style.display = "none";
		document.getElementById("animate").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typewriter, speed);
	}
}