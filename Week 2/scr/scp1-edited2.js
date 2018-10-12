// JavaScript source code
alert("Ball Simulator");
//define canvas via css canvas element
var myCanvas = document.getElementById('stage');
var Stgwidth = myCanvas.width;
var Stgheight = myCanvas.height;
var context = myCanvas.getContext('2d');
//console.log('random number = ' + rndColor());
var balls = [];
var total = 45;

var drag = 0.98; // to drag objects var
var grav = 0.9; // gravity

var mouseX, mouseY;

var target = null;

document.addEventListener('mousemove', getMouseXY); //event listener when mouse is moved
document.addEventListener('mouseup', onMouseUpEvent);
document.addEventListener('mousedown', onMouseDownEvent);

genr();
draw();

// render ball function
requestAnimationFrame(rdr);
function rdr() {
    for (var i = 0; i < total; i++) {
        udp(balls[i]);
    }

    if (target != null) {
        target.x = mouseX;
        target.y = mouseY;
    }

    draw();
    requestAnimationFrame(rdr);
}

// update the ball to animate
function udp(ball) {
    ball.x += ball.vx;
    ball.y += ball.vy;
    if ((ball.x + ball.size) > Stgwidth) {
        ball.x = Stgwidth - ball.size;
        ball.vx = -ball.vx;
    } else if ((ball.x - ball.size) < 0) {
        ball.x = 0 + ball.size;
        ball.vx = -ball.vx;
    }
    if ((ball.y + ball.size) > Stgheight) {
        ball.y = Stgheight - ball.size;
        ball.vy = -ball.vy;
    } else if ((ball.y - ball.size) < 0) {
        ball.y = 0 + ball.size;
        ball.vy = -ball.vy;
    }

    ball.vy *= drag;
    ball.vy += grav;
    ball.vx *= drag;

}

// draw function
function draw() {
    context.clearRect(0, 0, Stgwidth, Stgheight);
    var ball;
    for (var i = 0; i < total; i++) {
        ball = balls[i];
        context.fillStyle = ball.colour;
        context.beginPath();
        context.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    } udp(ball);
}
// generate ball
function genr() {
        var ball;
        for (var i = 0; i < total; i++) {

            ball = {};
            ball.colour = rndColor();
            ball.x = Math.random() * Stgwidth;
            ball.y = Math.random() * Stgheight;
            ball.size = 24;
            ball.vx = Math.random() * 20 - 10;
            ball.vy = Math.random() * 20 - 10;
            balls.push(ball);
        };
}

function onMouseDownEvent(event) {
    console.log("mouse down");
    for (var i = 0; i < total; i++) {
        var ball = balls[i];

        var dist = euclid(mouseX, ball.x, mouseY, ball.y);

        if (dist <= ball.size ) {
            console.log("click on dis balle");
            target = ball;
        }
    }
}

function euclid(x1,x2,y1,y2) {

    var dx = x2 - x1;
    var dy = y2 - y1;

    dx *= dx;
    dy = Math.pow(dy, 2);

    return Math.sqrt(dx + dy);
    //return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))

}

function onMouseUpEvent(event) {
    if (target != null) {
        target = null;
    }
    console.log("mouse up");
}

function getMouseXY(event) {

    mouseX = event.pageX;
    mouseY = event.pageY;

    if (mouseX < 0) {
        mouseX = 0;
    }
    if (mouseY < 0) {
        mouseY = 0;
    }
    
}
//grant balls random colour
function rndColor() {
    var str = '0123456789ABCDEF';
    var result = '#';
    for (var i = 0; i < 6; i++) {
        result += str.charAt(Math.floor(Math.random() * 16));
    }
    return result

}