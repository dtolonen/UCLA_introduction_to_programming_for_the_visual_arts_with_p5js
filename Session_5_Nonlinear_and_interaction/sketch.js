/* 
UCLA Introduction to Programming for the Visual Arts with p5.js
Session 5 - Nonlinear & interaction 
Dmitry Tolonen - session work
*/



/*


Text - divide all in 3 to make at least 12 states: 
1 
Barry is hopelessly lost. 
He leaks confidence and craves worldly/physical posessions, 
like unicorn hot pockets 
[] [wake him up]

2 
Barry conjured up a planet magpies&shiny things to reaffirm his place in the universe, 
shopping palaces and all. 
But - he's at a crossroads. 

[Press to Gorge on consumerism avec whipped cream.] [Press to chill out instead.]

3 
Who are you? 
Barf! 
He's had too much of the fine life/physical realm, but it's a good lesson.
He's a new man and can explore the shops with his new friend. 
[re-seed Barry to state 0]

4 
Press/click the up arrow to ascend to the embrace of nothingness and nirvana. 
(Down arrow) Ok, you pressed the down arrow - it's all good, dude -  
[Re-seed Barry to state 0]
[]

*/




// vars for media
var anim1;
var anim2;
var anim3;
var anim4;

var state = 0;


function preload() {
	anim1 = loadImage('1.gif');
	anim2 = loadImage('2.gif');
	anim3 = loadImage('3.gif');
	anim4 = loadImage('4.gif');
}

function setup() {
	createCanvas(854, 480);
	textSize(11);
	fill(0, 50);
	//stroke(120);


}

function draw() {
	background(220); // try without


	// ANIMATION 1

	if (state == 0) {
		image(anim1, 0, 0);
		stroke(.5, 80);
		text("Barry is hopelessly lost. [Press 2] to proceed and help him.", width / 2 - 150, 440, 300, 300);
		push();
		noFill();
		//stroke(.5,80);
		for (i = 0; i < 2; i++) {
			translate(1, 1);
			for (j = 0; j < 2; j++) {
				translate(-2, -2);
				rectMode(CENTER);
  			translate(p5.Vector.fromAngle(millis() / 300, 0.4));
				//rect(width / 2 - 170, 450, 5, 5);
				//rect(width / 2 + 145, 450, 5, 5);
				rect(width / 2 - 170, 450, 10, 10);
				rect(width / 2 + 165, 450, 10, 10);
			}
		}
		pop();
	} else if (state == 1) {
		image(anim1, 0, 0);
		stroke(.5, 80);
		text("He leaks confidence and craves worldly posessions, like unicorn hot pockets. [Press 3]", width / 2 - 130, 440, 300, 300);
		push();
		noFill();
		//stroke(.5,80);
		for (i = 0; i < 2; i++) {
			translate(1, 1);
			for (j = 0; j < 2; j++) {
				translate(-2, -2);
				rectMode(CENTER);
  			translate(p5.Vector.fromAngle(millis() / 300, 0.4));
				//rect(width / 2 - 170, 450, 5, 5);
				//rect(width / 2 + 145, 450, 5, 5);
				rect(width / 2 - 170, 450, 10, 10);
				rect(width / 2 + 165, 450, 10, 10);
			}
		}
		pop();


	} else if (state == 2) {
		image(anim1, 0, 0);
		stroke(.5, 80);
		text("[So, press 4 to wake Barry up]", width / 2 - 85, 440, 300, 300);
		push();
		noFill();
		//stroke(.5,80);
				for (i = 0; i < 2; i++) {
			translate(1, 1);
			for (j = 0; j < 2; j++) {
				translate(-2, -2);
				rectMode(CENTER);
  			translate(p5.Vector.fromAngle(millis() / 300, 0.4));
				//rect(width / 2 - 170, 450, 5, 5);
				//rect(width / 2 + 145, 450, 5, 5);
				rect(width / 2 - 170, 450, 10, 10);
				rect(width / 2 + 145, 450, 10, 10);
			}
		}
		pop();

		
		// ANIMATION 2


	} else if (state == 3) {
		image(anim2, 0, 0);
		text("Barry conjures up a planet of shiny magpies to reaffirm his place in a universe of shopping palaces and cake shoppes. [Press 5]", width / 2 - 150, 440, 320, 300);
		push();
		noFill();
		line(250, 450, 250, 460);
		line(610, 450, 610, 460);
		pop();
	} else if (state == 4) {
		image(anim2, 0, 0);
		text("Uh, no - he's still at a crossroads. [Press 6]", width / 2 - 85, 440, 320, 300);
		push();
		noFill();
		line(250, 450, 250, 460);
		line(610, 450, 610, 460);
		pop();
	} else if (state == 5) {
		image(anim2, 0, 0);
		text("[Press 7] to gorge on consumerism avec le whipped cream or [Press c] to chill out instead.", width / 2 - 150, 440, 320, 300);
		push();
		noFill();
		line(250, 450, 250, 460);
		line(610, 450, 610, 460);
		pop();
	}





	// ANIMATION 3


	else if (state == 6) {
		image(anim3, 0, 0);
		text("Barf!	Who are you? [Press 8 to digest the news.]", width / 2 - 125, 440, 300, 300);
		push();
		noFill();
		arc(255, 455, 10, 10, QUARTER_PI - 10, TWO_PI);
		ellipse(width / 2 + 150, 450, 5, 5);
		pop();
	} else if (state == 7) {
		image(anim3, 0, 0);
		text("Stuffing his face with the fine life, Barry learnt a good, but mysterious lesson. [Press 9]", width / 2 - 150, 440, 300, 300);
		push();
		noFill();
		arc(255, 455, 10, 10, QUARTER_PI - 10, TWO_PI);
		ellipse(width / 2 + 150, 450, 5, 5);
		pop();
	} else if (state == 8) {
		image(anim3, 0, 0);
		text("A new man, he can explore the physical dimension with his new friend. [Press 'b']", width / 2 - 150, 440, 300, 300);
		push();
		noFill();
		arc(255, 455, 10, 10, QUARTER_PI - 10, TWO_PI);
		ellipse(width / 2 + 150, 450, 5, 5);
		pop();
	} else if (state == 9) {
		image(anim3, 0, 0);
		text("Wowzer! This story was so Zen, even I didn't get it! [Press 0] to re-seed Barry to the state of 0.", width / 2 - 150, 440, 300, 300);
		push();
		noFill();
		arc(255, 455, 10, 10, QUARTER_PI - 10, TWO_PI);
		ellipse(width / 2 + 150, 450, 5, 5);
		pop();
	}

	// ANIMATION 4

	
		else if (state == 10) {
		image(anim4, 0, 0);
		text("Barry has ascended to the embrace of nothingness and evaded samsara. Press 0 to re-seed Barry to state of zero.", width / 2 - 150, 440, 300, 300);
		push();
		noFill();
		triangle(260, 447, 265, 455, 255, 455);
		triangle(575, 447, 580, 455, 570, 455);
		pop();
	}
}



function keyPressed() {
	/* if statements tying states to number keys. Remember KeyTyped detects upper and lower case,
	and KeyPressed doesn't, both using the key word. Use KeyPressed and keyCode for BACKSPACE, 
	DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, 
	LEFT_ARROW, RIGHT_ARROW 	
	*/

	if (key == '1') {
		state = 0;
	} else if (key == '2') {
		state = 1;
	} else if (key == '3') {
		state = 2;
	} else if (key == '4') {
		state = 3;
	} else if (key == '5') {
		state = 4;
	} else if (key == '6') {
		state = 5;
	} else if (key == '7') {
		state = 6;
	} else if (key == '8') {
		state = 7;
	} else if (key == '9') {
		state = 8;
	} else if (key == 'b') {
		state = 9;
	} else if (key == 'c') { // for samsara
		state = 10;
	} else if (key == '0') { // need to fill 12 states
		state = 0;
	} else if (key == '0') { // need to fill 12 states
		state = 0;
	}

}