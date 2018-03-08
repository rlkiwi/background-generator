var body = document.querySelector("body");
var col1 = document.querySelector("#col1");
var col2 = document.querySelector("#col2");
var inputs = document.querySelectorAll("input");
var h3 = document.querySelector("h3");
var btn = document.querySelector("button");

const changeBackground = () => {
	body.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")";
	h3.textContent = body.style.background + ";";
}

const randomNumber = () => {
	var r = Math.floor(Math.random() * 256);
	return r;
}

const randomiseBackground = () => {
	body.style.background = "linear-gradient(to right, rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + "), rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + "))";
	h3.textContent = body.style.background + ";";

}

for(var i=0;i < inputs.length;i++) {
	inputs[i].addEventListener("input", changeBackground);
}

btn.addEventListener("click", randomiseBackground);
changeBackground();