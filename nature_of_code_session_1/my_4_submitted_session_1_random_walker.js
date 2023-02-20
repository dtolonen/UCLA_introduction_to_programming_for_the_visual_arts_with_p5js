
// Random Walker test for Kadenze course: Nature of Code, Session 1 (Processing Foundation)
// Dmitry Tolonen

let t = 0; // establishing counter t for below


function setup() {
  createCanvas(1280,536); // 720p 2.40 cinemascope
  colorMode(HSB); // for fancy colour switching below
  background(70);
  //has been deprecated! blendMode(NORMAL); //experiment with: NORMAL, MULTIPLY, SCREEN etc
  walkers = new Walker(); 
  //varible for instances created by Walker() constructor function
  
}



function draw() {
    //background(70); 
    // (Epilepsy flicker warning!) Experiemnt with this on for one moving line 
    // instead of more sculptural forms.
    
    walkers.update(); // these two for updating and drawing the below stuff to display
    walkers.display();
}



// The Walker Function -------

function Walker() {
  
  this.position = createVector(width/2, height/2); // centre object creation
  
  // Creating vector for velocity using random ranges 
  this.velocity = createVector(random(-700,700), random(-700, 500));
  /* this.velocity = createVector(100, 10); //experiment with these 
  for more stable coordinates
  */
  
  this.update = function(){ 
    //here for future experiementation - not sure how much the mouse paramenters 
    //are affecting the sketch..?
    
    //create a vector for your mouse position
    var mouse = createVector(mouseX, mouseY);
    
    //create acceleration data by subtracting your mouse position from 
    //the walker object position
    
    this.acceleration = p5.Vector.sub(mouse, this.position);
    this.acceleration.setMag(0.004);


    // Linking up acceleration > velocity > position as per teacher Daniel's 'physics engine'
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
 
    
    
  }
  
  this.display = function() { // Rendering walker to display
    
    
    stroke((t * 5) % 256, 255, 255, random(0.001, 0.07)); 
    // last value is alpha, as with the next line, too.    
    //stroke(0,0.01);
    strokeWeight(random(0.5, 12)); //achieving variety in stroke thickness
    translate(width/2, random(height/2, 4));
    
    for(let i = 0; i < 10; i++){
    point(random(-800, 700), noise(-t) );    
    /*this is a Frankenstein monster based on Alexander Miller's 
    Java Processing recreation of John Whitney's 1968 'Experiments 
    in Motion Graphics' work. For more, see: https://www.youtube.com/watch?v=LaarVR1AOvs
    
    Experiment by uncommenting some of the extra lines and cos/sin, random/noise! 
    
    */
    
    line(
      sin(t+1 / 10) * 10 + sin(t / 5) * 20,
      //sin(t+3 / 10) * 10 + cos(t / random(-50,10)) * 20 * this.position.x,
      //15,
      
      //cos(t / 10) * 100 + sin(t/5) * 50, 
      cos(t / 10) * 10 + sin(random(t,-t)/75) * 50 * this.position.y,
       
      
      //sin(t / 10) * 200 + sin(t) * 2 + cos(t) * 10,
      sin(t *4/ 10) * 20 + sin(t) * 2 + cos(t) * this.position.x/10,
      
      //cos(t / 20) * 200 + cos(t / 12) * 20); 
      cos(t / 20) * 20 + cos(t / 12) * 20) * this.position.y/10;
      //20);    
      }
      
      
    t += 0.01; // speed of lines?
  }
}


// Press 's' to save a png image
function keyPressed() {
  if(key == "s") {
    saveCanvas('walker', 'png');
  }
}
