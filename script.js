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


// required elements of the task
function drawTree(x, y) {
    // draw tree's trunk
    ctx.fillStyle = 'brown';
    let trunkHeight = getRandomIntInRange(50, 100)
    ctx.fillRect(x, y, 20, trunkHeight);

    // draw tree's leaves
    ctx.fillStyle = 'green';

    let circle = new Path2D();
    circle.arc(x + 10, y - trunkHeight / 2,
        50, 0, 2 * Math.PI);

    ctx.fill(circle)

}

// required elements of the task
function drawSun() {
    ctx.fillStyle = 'yellow';

    let circle = new Path2D();
    // 50 - just a hand picked number so the sun can fully fit
    circle.arc(getRandomIntInRange(50, width - 50), (height + width) / 50 + 50,
        (height + width) / 50, 0, 2 * Math.PI);

    ctx.fill(circle);
}

// required elements of the task
function drawBush(x, y) {
    ctx.fillStyle = 'darkgreen';

    let circle = new Path2D();
    circle.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fill(circle);


    ctx.fillStyle = 'darkred';
    const berryCount = getRandomIntInRange(0, 5);
    for (let i = 0; i < berryCount; i++) {
        let berry = new Path2D();
        berry.arc(x + getRandomIntInRange(-15, 15), y + getRandomIntInRange(-15, 15),
            3, 0, 2 * Math.PI);
        ctx.fill(berry);
    }
}

// required elements of the task
function drawBird(x, y) {

}


function initCanvas() {
    canvas.width = width = window.innerWidth;
    canvas.height = height = window.innerHeight;

    drawGrass();
    drawSky();
    drawSun();

    const bushCount = getRandomIntInRange(2, 10);
    for (let i = 0; i < bushCount; i++) {
        let x = getRandomIntInRange(25, width - 25);
        let y = getRandomIntInRange(height - height / 3, height - 50);

        drawBush(x, y);
    }

    const treeCount = getRandomIntInRange(1, 5);
    for (let i = 0; i < treeCount; i++) {
        let x = getRandomIntInRange(25, width - 25);
        let y = getRandomIntInRange(height - height / 3, height - 50);

        drawTree(x, y);
    }


}

window.onload = initCanvas;
window.onresize = initCanvas;
