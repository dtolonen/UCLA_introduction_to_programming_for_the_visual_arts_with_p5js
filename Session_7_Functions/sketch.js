
/* 
UCLA Introduction to Programming for the Visual Arts with p5.js
Session 7 - Functions
Dmitry Tolonen - session work
*/



function setup() {
	createCanvas(854, 480);
	textSize(20);
	frameRate(4);
}

function draw() {

	background(255);
	//text(mouseX, 50, 100);
	//text(mouseY, 50, 50);
	
	
	function filledLetter(a, b) {
		drawLetter(160, height / 2, fill(randomGaussian(a, b), random(a, b), noise(10, 100) ) );
	}
	
	filledLetter(10, 200);

	
	translate(width / 2 - 80, height / 2 - 100);
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 3; j++) {
			noFill();
			drawLetter(i * 100, j * 100);
			//text("hello", i*100,j*100);
		}
	}
}



function drawLetter(x, y, z) {
	beginShape();
	strokeWeight(random(1, 10));
	vertex(x, y);
	vertex(x + 10, y + 20);
	vertex(x + 20, y + 0);
	vertex(x + 30, y + 20);
	vertex(x + 40, y + 0);
	endShape();
	
}