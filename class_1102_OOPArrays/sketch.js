
var ball1;

var myArray = [];
var ballArray = [];

var mySounds = [];

function setup() {
  // put setup code here

  createCanvas(500,500);

  myArray[0] = 3;
  myArray[1] = 7;


/*
  ball1 = new Ball(200, 300); //create a ball object in a single var
  ball1.display();

  ballArray[0] = new Ball(100, 200); //create a ball object in an array
  ballArray[0].display();
*/

  for(var i = 0; i < 5; i++){
  	ballArray[i] = new Ball(random(0,width), random(0,height));
  }

}

function draw() {

	//background(200);

  for(var i = 0; i < ballArray.length; i++){
  	ballArray[i].animate();
  	ballArray[i].display();
  }

  fill(255,255,255,20);
  rect(0,0,width,height);

}

function mouseClicked(){

	var newBall = new Ball(mouseX, mouseY);
	ballArray.push(newBall);

}

function Ball(myX, myY){

	this.x = myX;
	this.y = myY;

	this.display = function(){
		fill(0);
		ellipse(this.x, this.y, 40, 50);
	}

	this.animate = function(){
		this.x += 1;
	}
};