
/* 
UCLA Introduction to Programming for the Visual Arts with p5.js
Session 2 - Loops - store, modify & reuse data 
Dmitry Tolonen - session work
*/

function setup() {
  //createCanvas(600, 600);
  createCanvas(1280,536); // 720p 2.40 cinemascope
  noFill();
}

function draw() {
  frameRate(0.5); // if sketch seems sluggish, see this at 5
  background(225);
  var count = 0;
  var count2 = 10;
  
  for(var i=80;i<mouseX;i+=100){
    for(var j=80;j<mouseY;j+=100){
    strokeWeight(random(0, count+0.9));
    stroke(random(0,120));
    ellipse(i,j,50,50);
    count++;
    }
  }
  
    
  for(var i=80;i<mouseX-40;i+=50){
    stroke(count*0.08);
    for(var j=80;j<mouseY-40;j+=50){
      strokeWeight(random(0,count2*0.02));
      stroke(random(0, 200));
      fill(random(0,100),random(0,30));
      //ellipse(i,j,70,70);
      rect(i,j,50,50);
    }
  }
}


// Press 's' to save a png image
function keyPressed() {
  if(key == "s") {
    saveCanvas('walker', 'png');
  }
}