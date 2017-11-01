var myShape;
var myShape2;
var myShape3;

function setup() {

	createCanvas(500,500);

	var myColor = color(255,0,130);

	//this is an OBJECT made from the class
	myShape = new Shape(250, 120, 3, 2, myColor);

	myShape2 = new Shape(10, 90, 6, 3, color(100,20,200));

	myShape3 = new Shape(50,400,1,4, myColor);

}

function draw() {
	background(255);

  // put drawing code here
  	myShape.animate();
	myShape.display();

	myShape2.animate();
	myShape2.display();

	myShape3.animate();
	myShape3.display();
}

//this is the CONSTRUCTOR for the class
function Shape(xPos, yPos, myXVel, myYVel, _color){

	this.x = xPos;
	this.y = yPos;
	this.xVel = myXVel;
	this.yVel = myYVel;
	this.size = 15;
	this.c = _color;

	this.animate = function(){
		this.x = this.x + this.xVel;
		this.y = this.y + this.yVel;

		if(this.x > width || this.x < 0){
			this.xVel *= -1;
		}
		if(this.y > height || this.y < 0){
			this.yVel *= -1;
		}
	}

	this.display = function(){
		fill(r,g,b);
		ellipse(this.x, this.y, this.size, this.size);
	}

};

