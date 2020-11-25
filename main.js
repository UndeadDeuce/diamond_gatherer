const canvas = document.getElementById("canvasId");
/**@type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

//context.fillStyle = "red";
//context.fillRect(20, 20, 40, 20); 

const george = new Image();
george.src = 'assets/george.png';
const GEORGE_WIDTH = 40;
const GEORGE_HEIGHT = 45;
let georgeX = 100;
let georgeY = 100;
george.onload = () => {
    context.drawImage(george, 0 * GEORGE_WIDTH, 0 * GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, 100, 100, GEORGE_WIDTH, GEORGE_HEIGHT)
}

const mario = new Image();
mario.src = 'assets/mario.png';
const MARIO_WIDTH = 32;
const MARIO_HEIGHT = 39;
let marioX = 0;
let marioY = 0;
mario.onload = () => {
    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
}

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log(this);
    context.fillStyle = "green";
    context.fillRect(480, 20, 40, 20);
});

document.addEventListener("keydown", function(event) {
    context.clearRect(0,0,600,400);
    switch(event.key) {
        case 'ArrowUp': {
            if(georgeY >= 0)
                georgeY -= 10;
            break;
        }
        case 'ArrowDown': {
            if(georgeY <= 340)
                georgeY += 10;
            break;
        }
        case 'ArrowLeft': {
            if(georgeX >= 0)
                georgeX -= 10;
            break;
        }
        case 'ArrowRight': {
            if(georgeX <= 550)
                georgeX += 10;
            break;
        }
    }
    switch(event.key) {
        case 'w': {
            if(marioY >= 10)
                marioY -= 10;
            break;
        }
        case 's': {
            if(marioY <= 360)
                marioY += 10;
            break;
        }
        case 'a': {
            if(marioX >= 10)
                marioX -= 10;
            break;
        }
        case 'd': {
            if(marioX <= 560)
                marioX += 10;
            break;
        }
    }
    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
    context.drawImage(george, 0 * GEORGE_WIDTH, 0 * GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT);
});








