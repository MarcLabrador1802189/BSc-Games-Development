// JavaScript source code
alert("Instructions: Play it. Just play it. OMGWTFBBQ! >:(");
console.log("my name is bobby. this is version 3 on 09/10/2018 @ 23:37");

var myCanvas = document.getElementById("gemmu");
var ctx = myCanvas.getContext('2d');
var grid = 20;
var count = 0;
var score = 0;
/*
 equals to var snake = {
 snake.x = grid * 2;
}
 */
var snake = createSnake();

var apple = Appl();

requestAnimationFrame(loop);
// loop
//create snake
function createSnake() {
    var s = {

        x: grid * 2,
        y: grid * 2,
        dx: grid,
        dy: 0,
        cells: [],
        maxCells: 4
    };
    return s;
}
function Appl() {
    var a = {

        x: grid * 4,
        y: grid * 4

    };
    return a;
}
function loop() {
    requestAnimationFrame(loop);
    //slow render to 10 fps approx
    //++rand - before. rand++ - after
    if (++count < 4) {
        return;
    }
    // run anim
    count = 0;
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    // move le snake
    snake.x += snake.dx;
    snake.y += snake.dy;
    if (snake.x < 0) {
        snake.x = myCanvas.width - grid;
    } else if (snake.x >= myCanvas.width) {
        snake.x = 0;
    }
    if (snake.y < 0) {
        snake.y = myCanvas.width - grid;
    } else if (snake.y >= myCanvas.width) {
        snake.y = 0;
    }
    snake.cells.unshift({ x: snake.x, y: snake.y });
    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }
    //draw apple
    ctx.fillStyle = genHex();

    ctx.fillRect(apple.x, apple.y, grid - 1, grid - 1);
    //draw bobby here
    ctx.fillStyle = "Yellow";
    //bobby's colour

    //instead of static colour, generate a random colour when file starts
    function genHex() {
        var str = "0123456789ABCDEF";
        var result = "#";
        for (var i = 0; i < 6; i++) {
            result += str.charAt(Math.floor(Math.random() * 16));
        }
        return result;
    }
    var cell;
    for (var i = 0; i < snake.cells.length; i++) {
        cell = snake.cells[i];
        ctx.fillRect(cell.x, cell.y, grid - 1, grid - 1);
        if (cell.x === apple.x && cell.y === apple.y) {
            // bobby eats apple! increase length. add score by 100.
            score = score + 100;
            document.getElementById("score").innerText = score;
            snake.maxCells++;
            apple.x = getRandInt(0, myCanvas.width / grid) * grid;
            apple.y = getRandInt(0, myCanvas.height / grid) * grid;
        }
        // test for snake collision. reset the level including score.
        for (var j = i + 1; j < snake.cells.length; j++) {
            if (cell.x === snake.cells[j].x && cell.y === snake.cells[j].y) {
                //overlap has occurred
                snake = createSnake();
                apple = Appl();
                score = score - score;
                document.getElementById("score").innerText = score;
            }

        }
    }
}


// control output
document.addEventListener('keydown', function (event) {

    //left arrow key
    // TODO change to which key
    if (event.which === 65 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;

    } else if (event.which === 87 && snake.dy === 0) {
        snake.dx = 0;
        snake.dy = -grid;

    } else if (event.which === 68 && snake.dx === 0) {
        snake.dx = +grid;
        snake.dy = 0;

    } else if (event.which === 83 && snake.dy === 0) {
        snake.dx = 0;
        snake.dy = +grid;
    }

});

//helper function
function getRandInt(min, max) {

   return Math.floor(Math.random() * (max - min)) + min;

}
