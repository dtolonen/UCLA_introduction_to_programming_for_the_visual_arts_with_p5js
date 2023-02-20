/* 
UCLA Introduction to Programming for the Visual Arts with p5.js
Session 8 - Objects, The Super Formula
Dmitry Tolonen - session work
*/



/* Session 8 for later:  see session 4 code (open) and try to make 1 2 3 4 etc 
or shift keys into bigger and smaller or rotated rect shapes and see all hmm how would I bits below */

let creatures = [];

function setup() {
	createCanvas(600, 600);
	//background(255); // note difference with background on/off
	background(255, 240, 230, 60);
	//frameRate(25); // alter this for more control over 'painting' rects
}



/* THIS VS THE MOUSEISPRESSED IN DRAW FUNCTION  BELOW
	
	function mousePressed(){
  
  let b= new Creature ( mouseX, mouseY) 
  creatures.push(b);
}  */

function draw() {
	//background(255); // note difference with background on/off

	// INTERESTING, MESSY - THIS VS THE MOUSEISPRESSED IN DRAW FUNCTION 
	
	if (mouseIsPressed === true) {
		let b = new Creature(mouseX + this.x, mouseY);
		//let b = new Creature(mouseX, height/2);
		//stroke(random(sin(255)) ,random(0), random(120), 40 );
		stroke(255, 255, 255, 60);
		// interesting variant - let's try this to remove instances from [] by reversing these two lines of code?
		//creatures.push(b);
		this.x --; // don't think this does anything, but could I reduce 'brush' size?
		creatures.pop(b);
	
/* }
	if (creatures.length > 10) {
			stroke(255);
		//text("Life = is", width/2, 400);
			text("Life = is", 0,0); hmm */
	
	} else {
		//let b = new Creature(mouseX, mouseX);
		let b = new Creature(mouseX, mouseY);
		stroke(random(sin(230)), random(50), random(120), 30);
		// interesting variant - let's try this to remove instances from [] by reversing these two lines of code?
		creatures.push(b);
		//creatures.pop(b); 
		/*if (creatures.length > 10) {
			stroke(255);
			text("Life = is", 0,0);
		}*/
	}

	for (let i = 0; i < creatures.length; i++) {
		creatures[i].update();
		creatures[i].render();
		if (mouseX > height / 2) { // hmm
			this.x = 0;
		}
	}
}



// Press 's' to save a png image
function keyPressed() {
	if (key == "s") {
		saveCanvas('saved_canvas', 'png');
	}
}

function Creature(x, y) { //this is a constructor function creating a class
	this.x = x;
	this.y = y;

	this.render = function() {
		//something, could be nice to have a stroke-only rectangle being rotated and make a shape
		//stroke(0);
		strokeWeight(random(0.1, 0.8));
		noFill();
		//rect(mouseX, mouseY+this.y, 40, 20); //interesting, more flexible 'paintbrush'
		rect(mouseX, this.y, 40, 20);
	}

	this.update = function() {
		//something
		this.x += random(-1, 1);
		this.y += random(-1, 1);
	}
}