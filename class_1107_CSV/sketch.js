var myData;
var offset;
var padding;
var scaleData;

function preload(){
	myData = loadTable("assets/animals.csv", "csv", "header");
	textSize(10);
}

function setup(){

	createCanvas(600,600);
	println(myData.animals.length);
	offset = 80;
	padding = 30;
	scaleData = 5;

	for(var i = 0; i < myData.animals.length; i++){
		println(myData.animals[i]);
	}
}

function draw(){

	background(255);
	fill(255,0,100);

	push();
	translate(padding, 0);

	for (var i = 0; i < myData.animals.length; i++){
		//(x,y,width,height);
		var animalHeight = myData.animals[i].height;
		var animalName = myData.animals[i].name;
		rect(i*offset, 100, 30, animalHeight * scaleData);
		text(animalName,i*offset, 60, 50, 50);
	}

	pop();
}