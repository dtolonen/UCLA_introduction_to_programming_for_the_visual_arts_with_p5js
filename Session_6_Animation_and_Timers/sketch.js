/* 
UCLA Introduction to Programming for the Visual Arts with p5.js
Session 6 - Animation & Timers
Dmitry Tolonen - session work
*/


var chord;
var angle = 0.0;
var offset = 150;
var scalar = 10;
var velo = 0.0004;

function preload() {
	chord = loadSound("chord.mp3");
}

function setup() {
	//background(255);
	createCanvas(windowWidth, windowHeight);
	noFill();
	chord.play();
}

function draw() {
	var x_direction = map(mouseX, 0, width, 10, 300);
	var y_direction = map(mouseY, 0, width, 10, 300);
	var y_offset_1 = offset + sin(angle) * scalar;
	var y_offset_2 = offset + sin(angle + 0.4) * scalar;
	var y_offset_3 = offset + sin(angle+2 + 0.8) * scalar;
	
	
	background(255);
	
	translate(width/2, height/2);
	rotate(angle); //note that angle gets incremented below

	
	for (var i=0; i<5; i++) {
		//fill(random(sin(100, 120, 11), width ) );
		push();
		rotate(i*TWO_PI/5);
		translate(0, x_direction);
		ellipse(0, y_offset_1, 5, 5);
		//background(255);
		rotate(angle);
		for (var j=0; j<5; j++) {
			
			push();
			weight = dist(mouseX, mouseY, pmouseX, pmouseY) / 5;
			//strokeWeight(weight);
			stroke(0,0,120,20);
			line(pmouseX, pmouseY - 350, weight, y_offset_2 - 350);
			line(weight-100, pmouseY+5 - 150, weight, y_offset_1 - 150);
			line(width/2, height/2 - 50, width/2+10, height/2-20);
			pop(); 
			push();
			rotate(i * TWO_PI/5);
			translate(0, y_direction);
			stroke(80,0,0);
			ellipse(0, y_offset_2*.7, 40, 40); 
			
			
			for (var k=0; k<5; k++) {
				push();
				rotate(i * TWO_PI/5);
				translate(0, -50);
				noFill();
				//stroke(80,20);
				stroke(0,80, 0, 10);
				ellipse(0, y_offset_3/10, 60, 60);
				pop(); 
			}
			pop();
		}
		pop(); 
	}


	angle += velo; //angle gets incremented by speed every loop
}