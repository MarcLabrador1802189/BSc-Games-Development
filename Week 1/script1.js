// JavaScript source code
console.log("Hello");
var cWidth = 600;
var cHeight = 600;
var dx = cWidth / 2;
var dy = cHeight / 2;
var cx = dx; // c - current
var cy = dy; // d - distance
var tweenTime = 5;
// document.createelement creates element > specified canvas
var myCanvas = document.createElement("canvas");
myCanvas.addEventListener("click", handlesClick);
myCanvas.width = cWidth;
myCanvas.height = cHeight;
document.body.insertBefore(myCanvas, document.body.childNodes[0]);
//rds = radius etc....
var rds = 10;
var ctx = myCanvas.getContext("2d");
//w for width
ctx.fillStyle = 'red';
//ctx = context

function handlesClick(event) {
    dx = event.pageX;
    dy = event.pageY;
}

function drwCircle(x, y) {
    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.beginPath();
    ctx.arc(x, y, rds, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath(); 
}
function doAnim() {
    cx += (dx - cx) / tweenTime;
    cy += (dy - cy) / tweenTime;
    drwCircle(cx, cy);
    requestAnimationFrame(doAnim);
}
requestAnimationFrame(doAnim);