var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyTag = document.getElementById("gradient");

function setGradient(){
    bodyTag.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  
    css.textContent = bodyTag.style.background+";";
}


var allBodyStyle = getComputedStyle(bodyTag);
var backgroundStyle = allBodyStyle.background;
css.textContent = backgroundStyle;
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
