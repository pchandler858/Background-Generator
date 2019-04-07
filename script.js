var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");
var randomColor1;

function makeColor() {
  var arr = [];
  for (let i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * 256);
    arr.push(num);
  }
  var newRgb = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
  return newRgb;
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function setRandomGradient() {
  body.style.background =
    "linear-gradient(to right, " + makeColor() + ", " + makeColor() + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomGradient);

console.log(makeColor());
