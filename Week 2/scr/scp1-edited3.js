var canvas = document.getElementById('stage');
var stageWidth = canvas.width;
var stageHeight = canvas.height;
var context = canvas.getContext('2d');
var balls = [];
var total = 5;
var drag = .98;
var gravity = 2;
var mouseX, mouseY;
var currentDrag = null;
document.addEventListener('mousemove', getMouseXY);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousedown', onMouseDown);
generate();
requestAnimationFrame(render);
function proxCheck() {
    var ballA, ballB, dist, minDist;
    for (var i = 0; i < total-1; i++) {
        ballA = balls[i];
        for (var j = i+1; j < total; j++) {
               //
                ballB = balls[j];
                dist = getDistance(ballB.x, ballA.x, ballB.y, ballA.y);
                minDist = ballA.size + ballB.size;
                if (dist && dist < minDist) {
                    ballA.isOverlapping = ballB.isOverlapping = true;
                }
              //
        }
    }
}

function onMouseDown() {
    var dx, dy, dist;
    for (var i = 0; i < total; i++) {
        dx = mouseX - balls[i].x;
        dy = mouseY - balls[i].y;
        dist = getDistance(mouseX, balls[i].x, mouseY, balls[i].y);
        if (dist < balls[i].size / 2) {
            currentDrag = balls[i];
            currentDrag.dragging = true;
            return;
        }
    }
}
function getDistance(x1, x0, y1, y0) {
    var dx = x1 - x0;
    var dy = y1 - y0;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return distance;
}
function onMouseUp() {
    if (currentDrag != null) {
        currentDrag.dragging = false;
    }
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
function render() {
    for (var i = 0; i < total; i++) {
        update(balls[i]);
    }
    proxCheck();
    draw();
    requestAnimationFrame(render);
}
function update(ball) {
    if (ball.dragging) {
        ball.vx = ball.x - ball.ox;
        ball.vy = ball.y - ball.oy;
        ball.ox = ball.x;
        ball.oy = ball.y;
        ball.x = mouseX;
        ball.y = mouseY;
        if ((ball.x + ball.size) > stageWidth) {
            ball.x = stageWidth - ball.size;
        } else if ((ball.x - ball.size) < 0) {
            ball.x = 0 + ball.size;
        }
        if ((ball.y + ball.size) > stageHeight) {
            ball.y = stageHeight - ball.size;
        } else if ((ball.y - ball.size) < 0) {
            ball.y = 0 + ball.size;
        }
    } else {
        ball.x += ball.vx;
        ball.y += ball.vy;
        if ((ball.x + ball.size) > stageWidth) {
            ball.x = stageWidth - ball.size;
            ball.vx = -ball.vx;
        } else if ((ball.x - ball.size) < 0) {
            ball.x = 0 + ball.size;
            ball.vx = -ball.vx;
        }
        if ((ball.y + ball.size) > stageHeight) {
            ball.y = stageHeight - ball.size;
            ball.vy = -ball.vy;
        } else if ((ball.y - ball.size) < 0) {
            ball.y = 0 + ball.size;
            ball.vy = -ball.vy;
        }
        ball.vx *= drag;
        ball.vy = ball.vy * drag + gravity;
    }
    ball.isOverlapping = false;
}
function draw() {
    context.clearRect(0, 0, stageWidth, stageHeight);
    var ball;
    for (var i = 0; i < total; i++) {
        ball = balls[i];
        if (ball.isOverlapping) {
            context.fillStyle = "blue";
        } else {
            context.fillStyle = ball.colour;
        }
        context.beginPath();
        context.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }
}
function generate() {
    var ball;
    for (var i = 0; i < total; i++) {
        ball = {};
        ball.colour = genHex();
        ball.x = Math.random() * stageWidth;
        ball.y = Math.random() * stageHeight;
        ball.size = 24;
        ball.vx = Math.random() * 20 - 10;
        ball.vy = Math.random() * 20 - 10;
        balls.push(ball);
    }
}
function genHex() {
    var str = "0123456789ABCDEF";
    var result = "#";
    for (var i = 0; i < 6; i++) {
        result += str.charAt(Math.floor(Math.random() * 16));
    }
    return result;
}