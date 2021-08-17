let canvas = document.getElementById('canvas');

let height = window.innerHeight;
let width = window.innerWidth;
canvas.height = height;
canvas.width = width;

let ctx = canvas.getContext('2d');

// background elements
function drawGrass() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, (height / 3) * 2, width, height / 3);
}

function drawSky() {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, width, (height / 3) * 2);
}


// required elements of this task
function drawTree(x, y) {
    ctx.fillStyle = 'brown';
    ctx.fillRect(x, y, 30, 30);
}

function drawSun() {
    ctx.fillStyle = 'yellow';

    let circle = new Path2D();
    circle.arc(Math.random() * ((width - 50) - 50) + 50, (height + width) / 50 + 50,
        (height + width) / 50, 0, 2 * Math.PI);

    ctx.fill(circle);
}

function drawBush(x, y) {

}

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
        let x = Math.floor(Math.random() * width);
        let y = Math.floor(Math.random() * height - height / 3);

        drawTree(x, y);
    }


}

window.onload = initCanvas;
window.onresize = initCanvas;
