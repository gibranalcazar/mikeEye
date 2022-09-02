var balls = document.getElementsByClassName("ball");
var bodytag = document.getElementById("bodytag");
var colorInput = document.getElementById("colorInput").value;
document.onmousemove = (event) => {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 1; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
    console.log(x,y);
  }

};

function selectColor(){
  colorInput = document.getElementById("colorInput").value;
  console.log(colorInput);
  bodytag.style.background = colorInput;
};