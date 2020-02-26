// Create a div and change the color onmouse over

var div = document.createElement("div");
document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demo").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}
