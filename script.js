var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random-btn");
var switchButton = document.getElementById("switch-btn");

//sets color values to background using color picker
function setGradient() {
	//changes gradient background color
	body.style.background =
		"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	// displays linear gradient value
	css.textContent = body.style.background;
}

//generates random color values
function genRandomColor() {
	var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

	return randomColor;
}

//sets random rgb values to background
function setRandom() {
	color1.value = genRandomColor();
	color2.value = genRandomColor();

	setGradient();
}

//switches color sides
function switchColors() {
	var a = color1.value;
	var b = color2.value;
	color1.value = b;
	color2.value = a;

	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandom);

switchButton.addEventListener("click", switchColors);