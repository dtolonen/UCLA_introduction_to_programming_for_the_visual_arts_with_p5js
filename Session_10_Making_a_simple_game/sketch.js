/* 
UCLA Introduction to Programming for the Visual Arts with p5.js
Session 10 - Making a simple game
Dmitry Tolonen - session work
*/



/* Mouse and arrow key controlled, size-varying paddle version of Chandler's game from the session. 
Can change how you combine arrows and mouse for different experience. 
See alternative background for extra cheese. */


var balls = [];
var total = 20;
var paddle;

var score = 0;
var lives = 3;

var startCenterX;
var startCenterY;
var startButtonSize = 130;

/*
	0 = intro
	1 = play
	2 = end
*/ 

var state = 0; 
var sound; // odd: this var was first var, didn't work ('scope problem'). Moved it here, just before preload, works.

function preload() {
	sound = loadSound("sound.mp3");
} 

function setup() {
	//sound.setVolume(0.004);
	//sound.play();
	createCanvas(1000, 600);
	frameRate(15);
	startCenterX = width / 2 - 5;
	startCenterY = 472;
	textFont("Helvetica");
	textSize(50);
	//textAlign(CENTER, CENTER);
	
}

function draw() {
	background(170);
	//background(80,30); // accidentally created trails by changing this!
	if (state == 0) {
		drawIntro();
	} else if (state == 1) {
		drawPlaying();
	} else if (state == 2) {
		drawEnd();
	}
}

// functions for controlling each state of the game (instead of doing it in draw)

function drawIntro() {
	fill(255, 0, 60, 160);
	ellipse(startCenterX, startCenterY, startButtonSize, startButtonSize);

	fill(235);
	noStroke();
	text("OBSESSIVE ABOUT DETAILS?", width/2-350, height/2-100, width, height - 100);
	text("YES", width/2-60, height/2+150, width - 17, height + 360);
  

  
  
}

function drawPlaying() {
	for (var i = 0; i < balls.length; i++) {
		balls[i].update();
		balls[i].render();
	}
	paddle.update();
	paddle.render();

	if (lives == 0) {
		gameOver();
	}
	textSize(20);
	//textAlign(LEFT);
	fill(235);
	text("Score: " + score, width/2-150, height-20);
	text("Lives: " + lives, width/2+100, height-20);
}

function drawEnd() {
	textSize(50);
	//textAlign(CENTER, CENTER);
	fill(255, 0, 60, 160);
	ellipse(startCenterX, startCenterY, startButtonSize, startButtonSize);

	fill(235);
	noStroke();
	text(score, width/2-30, 350, width, 55);

  	text("MISS SOME?", width/2-150, height/2-100, width, height - 100);
	text("PRACTICE MAKES PERFECT",width/2-350, height/2-25, width, height - 100 );
    text("OK", width/2-45, height/2+152, width - 17, height + 360);

  
}

function gameOver() {
	sound.setVolume(0.01);
	sound.play();
	state = 2;
}

function startGame() {
	lives = 3;
	score = 0;
	paddle = new Paddle(); // ok, weird: when you switch order of createCanvas and this line, the paddle appears top left instead of lower centred!
	for (var i = 0; i < total; i++) {
		balls[i] = new Ball(paddle);
	}
	state = 1;
}

function mousePressed() {
	if (state == 0 || state == 2) {
		var d = dist(mouseX, mouseY, startCenterX, startCenterY);
		if (d < startButtonSize / 2) {
			startGame();
		}
	}
}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		paddle.moveLeft();
	} else if (keyCode == RIGHT_ARROW) {
		paddle.moveRight();
	} else if (keyCode == UP_ARROW) {
		paddle.moveUp();
	} else if (keyCode == DOWN_ARROW) {
		paddle.moveDown();
	}
}


function Ball(paddle) {
	this.paddle = paddle;
	/* ORIG STATIC SIZE BALLS : 
	this.size = 20; */
	this.size = random(sin(6), 30); // CHANGED SIZES
	this.speed = 10;

	this.init = function() {
		this.y = random(-height, -20);
		this.x = random(20, width - 20);
		this.bad = (random(0, 100) < 5); // odd brackets before 'random' 

	}

	this.render = function() {
		if (this.bad) {
			fill(255, 0, 0);
		} else {
			fill(random(225,255));
		}
		noStroke();
		ellipse(this.x, this.y, this.size, this.size);
	}

	this.update = function() {
		this.y += this.speed;

		this.testPaddle();

		if (this.y - this.size > height) {
			this.init();
		}
	}

	// collision detection
	this.testPaddle = function() {
		var top = (this.y + this.size / 2 > this.paddle.y);
		var bottom = (this.y - this.size / 2 < this.paddle.y + this.paddle.height);
		var left = (this.x + this.size / 2 > this.paddle.x);
		var right = (this.x - this.size / 2 < this.paddle.x + this.paddle.width);

		if (top && bottom && left && right) {
			if (this.bad) {
				this.paddle.hit();
			} else {
				this.paddle.score();
			}
			this.init();
		}
	}

	this.init();

}


function Paddle() {
	this.width = 50;
	//ORIG this.height = 20;
	this.height = random(map(this.width/2, 0, height/2, 0, width/2)); // OK, I like this, random height for the paddle! The width grows anyway with points.
	this.speed = 5;
	this.x = width / 2 - this.width / 2;
	this.y = height - 30;
	this.color = color(200);

	this.update = function() {
		//IF YOU WANT TO USE MOUSE INSTEAD OF ARROW KEYS UNCOMMENT THIS - try restricting to just one direction, maybe with arrows doing the other dir!
		this.x = mouseX;  
		/*this.y = mouseY;*/
	}

	this.score = function() {
		this.color = color(0, 255, 120);
		score++;
		this.width += 5;
	}

	this.hit = function() {
		this.color = color(0, 255, 0);
		lives--;
		this.width -= 10;
	}

	this.render = function() {
		fill(this.color);
		rect(this.x, this.y, this.width, this.height);
		this.color = color(255);
	}

	this.moveRight = function() {
		this.x += this.speed * 5;
		if (this.x + this.width > width) {
			this.x = width - this.width;
		}
	}

	this.moveLeft = function() {
		this.x -= this.speed * 5;
		if (this.x < 0) {
			this.x = 0;
		}
	}


	this.moveUp = function() {
		this.y -= this.speed * 5;
		if (this.y + this.height > height) {
			this.y = height - this.height;
		}
	}

	this.moveDown = function() {
		this.y += this.speed * 5;
		if (this.y + this.height > height) {
			this.y = height - this.height;
		}
	}

}