
/* 
UCLA Introduction to Programming for the Visual Arts with p5.js
Session 1 - What is code, coordinates, Basic drawing & color 
Dmitry Tolonen - session work
*/


function setup() {
  createCanvas(1024, 768);
}

function draw() {
  // off-white background
  background(245, 249, 227);
  noStroke();

  //yellow
  beginShape();
  fill(237, 217, 166);
  vertex(0, 72);
  vertex(21, 59);
  vertex(59, 185);
  vertex(0, 220);
  endShape();

  //light green
  beginShape();
  fill(120, 186, 129);
  stroke('rgba(106, 160, 90,0.8)');
  vertex(59, 185);
  vertex(21, 59);
  vertex(0, 72);
  vertex(0, 0);
  vertex(83, 0);
  vertex(156, 121);
  endShape();

  //dark gray
  beginShape();
  fill(24, 17, 1);
  vertex(156, 121);
  vertex(83, 0);
  vertex(324, 0);
  vertex(329, 43);
  endShape();

  // yellow
  beginShape();
  fill("rgba(237,217,126,0.5)");
  vertex(324, 0);
  vertex(width, 0);
  vertex(width, 60);
  vertex(977, 177);

  vertex(974, 209);
  vertex(908, 264);
  vertex(840, 301);
  vertex(790, 324);
  vertex(772, 367);
  vertex(523, 375);
  vertex(329, 43);
  endShape();

  // low opacity green
  beginShape();
  fill(120, 186, 129);
  vertex(324, 0);
  vertex(width, 0);
  vertex(width, 60);
  vertex(977, 177);
  vertex(329, 43);

  endShape();

  80, 110, 16;

  // low opacity black triangle
  beginShape();
  fill("rgba(24,17,1,0.70)");
  triangle(977, 171, width, 60, width, 188);
  endShape();

  //
  beginShape();
  fill(160, 166, 129);
  vertex(772, 367);
  vertex(790, 324);
  vertex(840, 301);
  vertex(908, 264);
  vertex(974, 209);
  vertex(977, 171);
  vertex(width, 188);
  vertex(width, 322);
  endShape();

  //
  beginShape();
  fill(180,200 ,168);
  vertex(622, 570);
  vertex(647, 520);
  vertex(684, 506);
  vertex(692, 469);
  vertex(707, 416);
  vertex(740, 388);
  vertex(772, 367);
  vertex(width, 322);
  vertex(width, 549);
  vertex(width, 640);
  vertex(946,640);
  vertex(770,633);
  endShape();
  
  
    //
  beginShape();
  fill(120, 186, 129);
  vertex(740, 388);
  vertex(772, 367);
  vertex(width, 322);
  vertex(width, 458);
  vertex(width-75,445);
  vertex(820,435);
  vertex();
  vertex();
  endShape();
  
    //
  beginShape();
  fill(150, 186, 129);
  vertex(767,563);
  vertex(820,435);
  vertex(width-75,445);
  vertex(947,545);
  endShape();
  
      //
  beginShape();
  fill(124,170,130);
  vertex(620,height);
  vertex(584,582);
  vertex(626,570);
  vertex(767, 563);
  vertex(947,545);
  vertex(951,640);
  vertex(951,height);
  endShape();
  
      //
  fill(135,126,86);
  triangle(626,570, 767, 563, 775,633);

  fill(119,139,102);
  quad( 775,633, 767,563,949,545,951,640);
       
  // lower right rect
  fill(24, 17, 1);
  rect(951,640, 50, 50);
  
  //
  fill(24,126,86);
  quad(951,640,947,545, width,549,width, 642);
  
  beginShape();
  fill(24, 17, 1);
  vertex(951,height);
  vertex(951,640);
  vertex(width, 642);
  vertex(width, height);
  endShape();
  
  // Ellipse
  fill(237, 217, 166);
  stroke('rgba(190, 180, 116,0.90)');
  ellipse(223,402, 385);
  noStroke();
  
  // green shape on ellipse
  fill(120, 186, 129);
  beginShape();
  vertex(185,590);
  vertex(192,214);
  vertex(226,210);
  vertex(279,216);
  vertex(272,588);
  vertex(233,595);
  endShape();
  
    //
  beginShape();
  fill(24, 17, 1);
  vertex(0, height);
  vertex(0,613);
  vertex(584,582);
  vertex(620,height);
  endShape();
  
    //
  beginShape();
  stroke('rgba(28,100,30,0.70)');
  strokeWeight(6);
  fill(120, 186, 129);
  vertex(168,height);
  vertex(263,599);
  vertex(437,589);
  vertex(333,height);
  endShape();
  noStroke();
  
    //
  beginShape();
  fill(102,103,69);
  vertex(333,height);
  vertex(401,651);
  vertex(457,height);
  vertex();
  vertex();
  endShape();
  
  //
  beginShape();
  fill(102,103,69);
  vertex(469,695);
  vertex(477,587);
  vertex(584,582);
  vertex(606,692);
  endShape();
  
    //
  beginShape();
  fill('rgba(102,103,69,0.60)');
  vertex(43,height);
  vertex(140,606);
  vertex(261,600);
  vertex(273,643);
  vertex(294,673);
  vertex(287,702);
  vertex(277,732);
  vertex(252, height);
  vertex(160,height);
  endShape();
  
  
}
