// JavaScript source code
alert("Ball Simulator");

var myCanvas = document.getElementById('stage');
var Stgwidth = myCanvas.width;
var Stgheight = myCanvas.height;
var context = myCanvas.getContext('2d');
//console.log('random number = ' + rndColor());
var balls = [];
var total = 5;
genr();
draw();
requestAnimationFrame(rdr);
function rdr() {
    for (var i = 0; i < total; i++) {
        udp(balls[i]);
    }
    draw();
    requestAnimationFrame(rdr);
}
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

}
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
function genr() {
        var ball;
        for (var i = 0; i < total; i++) {

            ball = {};
            ball.colour = rndColor();
            ball.x = Math.random() * Stgwidth;
            ball.y = Math.random() * Stgheight;
            ball.size = 35;
            ball.vx = Math.random() * 20 - 10;
            ball.vy = Math.random() * 20 - 10;
            balls.push(ball);
        };
}


function rndColor() {
    var str = '0123456789ABCDEF';
    var result = '#';
    for (var i = 0; i < 6; i++) {
        result += str.charAt(Math.floor(Math.random() * 16));
    }
    return result

}