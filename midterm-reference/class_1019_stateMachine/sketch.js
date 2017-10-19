var curState;

function setup(){
	createCanvas(600,600);

	curState = 0;

}

function draw(){

	if(curState == 0){
		// state is 0, do something
		background(255,0,0);
	}
	else if(curState == 1){
		// state is 1, do something
		background(0,255,0);
	}
	else if(curState == 2){
		// state is 2, do something
		background(0,0,255);
	}
	else {
		console.log("this is not a valid state");
	}
}

function mousePressed(){
	if(curState < 2){
		curState++;
	}
	else curState = 0;
}