let ball;
let leftPaddle;
let rightPaddle;
let leftScore = 0;
let rightScore = 0;

function setup() {
    createCanvas(800, 400);
    ball = new Ball();
    leftPaddle = new Paddle(true);
    rightPaddle = new Paddle(false);
}

function draw() {
    background(0);

    // Draw paddles and ball
    leftPaddle.show();
    rightPaddle.show();
    ball.show();
    
    // Move paddles
    leftPaddle.update();
    rightPaddle.update();

    // Check ball collision and update score
    ball.update(leftPaddle, rightPaddle);

    // Display score
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(leftScore, width / 4, 50);
    text(rightScore, 3 * width / 4, 50);
}

class Ball {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(random(-1, 1), random(-1, 1)).mult(5);
        this.radius = 15;
    }

    show() {
        fill(255);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }

    update(leftPaddle, rightPaddle) {
        // Move the ball
        this.pos.add(this.vel);

        // Ball collision with paddles
        if (this.pos.x - this.radius < leftPaddle.x + leftPaddle.width / 2 &&
            this.pos.x + this.radius > leftPaddle.x - leftPaddle.width / 2 &&
            this.pos.y > leftPaddle.y - leftPaddle.height / 2 &&
            this.pos.y < leftPaddle.y + leftPaddle.height / 2) {
            this.vel.x *= -1;
        } else if (this.pos.x - this.radius < rightPaddle.x + rightPaddle.width / 2 &&
            this.pos.x + this.radius > rightPaddle.x - rightPaddle.width / 2 &&
            this.pos.y > rightPaddle.y - rightPaddle.height / 2 &&
            this.pos.y < rightPaddle.y + rightPaddle.height / 2) {
            this.vel.x *= -1;
        }

        // Ball collision with walls
        if (this.pos.y - this.radius < 0 || this.pos.y + this.radius > height) {
            this.vel.y *= -1;
        }

        // Score update
        if (this.pos.x - this.radius < 0) {
            rightScore++;
            this.reset();
        } else if (this.pos.x + this.radius > width) {
            leftScore++;
            this.reset();
        }
    }

    reset() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(random(-1, 1), random(-1, 1)).mult(5);
    }
}

class Paddle {
    constructor(isLeft) {
        this.width = 10;
        this.height = 80;
        this.y = height / 2;
        this.isLeft = isLeft;
        this.x = isLeft ? this.width : width - this.width;
    }

    show() {
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
    }

    update() {
        if (this.isLeft) {
            this.y = constrain(mouseY, this.height / 2, height - this.height / 2);
        } else {
            let target = ball.pos.y;
            let diff = target - this.y;
            this.y += diff * 0.1;
        }
    }
}
