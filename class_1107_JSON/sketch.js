var myData;
var offset;
var scaleData;

function preload(){

	//loading local file requires running local server
	myData = loadJSON("assets/heights.json");
}

function setup(){

	createCanvas(800,600);

	offset = 100;
	scaleData = 5;

	//how many elements are in the animals[] array?
	println(myData.animals.length);

	textSize(14);

	for(var i = 0; i < myData.animals.length; i++){
		println(myData.animals[i].name);
		//access direct properties of name / height
	}
}

function draw(){

	background(255);

	push();

	translate(100,100); //move over to be more centered on the screen

	for(var i = 0; i < myData.animals.length; i++){

		var myHeight = myData.animals[i].height;
		var myName = myData.animals[i].name;

		rect(i * offset, 0, 80, myHeight * scaleData);
		//use height data to generate bar or line graph
		//scale to appropriate size for graphics

		//label with data names
		//text(string, xPos, yPos, xWrap, yWrap)
		text(myName, i * offset, -40, 80, 40);


	
	}

	pop();
}