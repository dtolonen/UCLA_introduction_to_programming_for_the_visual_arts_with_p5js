/* 
UCLA Introduction to Programming for the Visual Arts with p5.js
Session 4 - Drawing Images 
Dmitry Tolonen - session work
*/


let img1, img2, img3, Font;

function preload(){
	Font = loadFont('RobotoSlab-Regular.ttf');
	img1 = loadImage('image1.png');
	img2 = loadImage('image2.png');
	//img3 = loadImage('image3.png');	
}

function setup() {
	createCanvas(1280, 720);
	background(225);
	textFont(Font);
  textSize(20)
	frameRate(5);
	image(img1,0,0, width, height);
}

function draw() {
	// version 1 has a for loop here instead of below, nice
	/*
		for (let y = 0; y < width; y += 25){
		let y_scan = random(10,img2.height);
    let square_sample = img2.get(0, y_scan, img2.width, 25);
    image(square_sample,200,600);
		image(square_sample,200,625);
		image(square_sample,200,650);
    }
		*/

	if (mouseIsPressed){
			fill(40);
			stroke(200);
			strokeWeight(random(1,10));
			text("Play by the rules",width/2,mouseY);
			//text("Play by the rules",mouseX,mouseY); 
			for(i=0;i<25;i++){
			line(mouseX, mouseY, pmouseX,pmouseY);
			line(mouseX, mouseY+50, pmouseX,pmouseY+50);
		}
		
		// later version 2 has the for loop here, starts the image loop on mouse click, hmm
		for (let y = 0; y < width; y += 25){
		let y_scan = random(10,img2.height);
    let square_sample = img2.get(0, y_scan, img2.width, 25);
    image(square_sample,200,600);
		image(square_sample,200,625);
		image(square_sample,200,650);
    }
	}
	else {
		fill(color(random(255), random(155), random(200)));
		stroke(color(random(255), random(200), random(100)));
		//strokeWeight(random(1,10));
		strokeWeight(0.7);
		textSize(15);
		text("Run like the wind",mouseX,mouseY);
		translate(100,100); // hmm interesting
		for(j=0;j<25;j++){
			//strokeWeight(noise(0.3,3));
			//translate(100,100); // hmm interesting, creates multiple lines
			line(mouseX, mouseY, pmouseX,pmouseY);
			line(mouseX, mouseY+10, pmouseX, pmouseY+10);
		}
	}
}


// Press 's' to save a png image
function keyPressed() {
  if(key == "s") {
    saveCanvas('saved_canvas', 'png');
  }
}