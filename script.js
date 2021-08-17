let canvas = document.getElementById('canvas');

let height = window.innerHeight;
let width = window.innerWidth;
canvas.height = height;
canvas.width = width;

let ctx = canvas.getContext('2d');

function getRandomIntInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// background elements
function drawGrass() {
    ctx.fillStyle = '#32CD32';
    ctx.fillRect(0, (height / 3) * 2, width, height / 3);
}

function drawSky() {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, width, (height / 3) * 2);
}


// required elements of this task:
// 1
function drawTree(x, y) {
    // draw tree's trunk
    ctx.fillStyle = 'brown';
    let trunkHeight = getRandomIntInRange(50, 100)
    ctx.fillRect(x, y, 20, trunkHeight);

    // draw tree's leaves
    ctx.fillStyle = 'green';

    let circle = new Path2D();
    circle.arc(x + 10, y - trunkHeight/2,
        50, 0, 2 * Math.PI);

    ctx.fill(circle)

}

// 2
function drawSun() {
    ctx.fillStyle = 'yellow';

    let circle = new Path2D();
    // 50 - just a hand picked number so the sun can fully fit
    circle.arc(getRandomIntInRange(50, width - 50), (height + width) / 50 + 50,
        (height + width) / 50, 0, 2 * Math.PI);

    ctx.fill(circle);
}

// 3
function drawBush(x, y) {

}

// 4
function drawBird(x, y) {

}


function initCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;

    drawGrass();
    drawSky();
    drawSun();

    let treeCount = Math.floor(Math.random() * 5);
    for (let i = 0; i < treeCount; i++) {
        let x = getRandomIntInRange(25, width - 25);
        let y = getRandomIntInRange(height - height / 3, height - 50);

        drawTree(x, y);
    }


}

window.onload = initCanvas;
window.onresize = initCanvas;
