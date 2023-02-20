/* 
UCLA Introduction to Programming for the Visual Arts with p5.js
Session 9 - Data, visualisation, arrays
Dmitry Tolonen - session work
*/



var cities = [];
var data;



function preload() {
	csv_file = loadTable("50_cities.csv", "csv", "header");
	data = new Display();
}

function setup() {
	createCanvas(600, 600);
	frameRate(3);
	for (var i = 0; i < csv_file.getRowCount(); i++) {
		cities[i] = sin(csv_file.getNum(i, "test"));
	}
}

function draw() {
	background(225, 120, 0, 20);

	fill_weight = dist(mouseX, mouseY, pmouseX, pmouseY) / 5;
	fill(fill_weight);
	stroke(220);
	strokeWeight(fill_weight / 100);


	for (var j = 0; j < cities.length; j++) {
		var city = csv_file.getString(j, "city");
		rotate(j * 2);
		if (cities[j] < 50) {
			//fill(100, 50, 100, 100, 100);
			fill(90, 160, 0, 20);
		} else {
			//fill(200, 204, 299, 200, 120, 100);
			fill(255);
		}

		rect(j * 5, cities[j] * 10 + 100, j * 10, j * 10);

		data.display(city); // hmm see what the sketch grows + looks like with this commented out

	}
}




function Display() {
	this.display = function() {
		fill(255,30,40,10);
        ellipse(random(100,400), height / 2, random(20,100),random(100,20));
		rotate(random(radians(120), radians(240)));
	}
}


// Press 's' to save a png image
function keyPressed() {
	if (key == "s") {
		saveCanvas('saved_canvas', 'png');
	}
}