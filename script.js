//Decoration
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "blue");
my_gradient.addColorStop(0.5 ,"white");
my_gradient.addColorStop(1, "red");

//Javascript
function myFunction(){
  var input = document.getElementById('ipt');
  var div = document.getElementById('target1');
  div.innerHTML = div.innerHTML + input.value;
}

//Decoration
ctx.font="25px Verdana";
ctx.strokeStyle=my_gradient;
ctx.strokeText('OverFlow Mini-Project',10,25);



