var timeSnapshot;

function setup(){
	createCanvas(600,600);

	timeSnapshot = 0;

}

function draw(){

	background(255);

	var timeDiff = second() - timeSnapshot;

/*
	if(timeDiff > 5){
		timeSnapshot = second();
	}
*/
	text(timeDiff, 200,200);

}

function mousePressed(){
	timeSnapshot = second();
}