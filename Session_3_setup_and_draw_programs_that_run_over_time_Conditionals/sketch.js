/* 
UCLA Introduction to Programming for the Visual Arts with p5.js
Session 3 - setup & draw - programs that run over time, Conditionals 
Dmitry Tolonen - session work
*/


function setup() {
  createCanvas(1024, 768);
  noFill();
}

function draw() {
  translate(0, height / 2 - 40);
  frameRate(30); // if sketch seems sluggish, see this at 5
  background(225);
  var count = 0;
  var xpos = mouseX;
  var ypos = mouseY;
  text(mouseX, 50, -100);
  text(mouseY, 50, -50);

  if (xpos > 280 && xpos <= 480) {
    //strokeWeight(20);
    //ellipse(i, 50, i, i);
  }

  if (mouseIsPressed === true) {
    //ellipse(50, 50, width/2+50, height/2+50);
    fill(0, 80);
    textSize(15);
    text(
      "The UCLA p5 department has its eye on you.",
      width / 2 - 130,
      height / 2 - 130
    );
  } else {
    //rect(25, 25, 50, 50);
  }

  //print(mouseIsPressed);

  for (var i = 80; i < mouseX; i += 100) {
    stroke(noise(20));
    fill(160, 160, 160);
    ellipse(i, 50, 60, 60);
    push();
    weight = dist(mouseX, mouseY, pmouseX, pmouseY) / 5;
    strokeWeight(weight);
    line(pmouseX, pmouseY - 350, mouseX, mouseY - 350);
    pop();
    strokeWeight(0.6);
    fill(random(0, weight * 10), noise(10, 100), noise(30, 200));
    //orig wild version - arc(i, 50, 80, i / 5, i + i / !0, QUARTER_PI, PIE);
    arc(i, 50, 50, 50, i + i / !0, QUARTER_PI, PIE);
    if (ypos > 500 && ypos <= 600) {
      fill(225);
      rect(i - 25, 150, (5 * i) / 100, 25);
    } else {
      fill(0);
      rect(i - 25, 150, (5 * i) / 100, 25);
    }

    fill(0, 90);
    noStroke();
    ellipse(i, 50, 40, 40);
    //count--;
  }
}

// Press 's' to save a png image
function keyPressed() {
  if(key == "s") {
    saveCanvas('saved_canvas', 'png');
  }
}