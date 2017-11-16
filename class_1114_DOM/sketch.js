var canvas;
var ballPos;

var img;
var button;
var slider;

var ballColor;

function setup(){
//	var myPara = createElement('p', "here's my text");
//	text("here's some text", 0,0);

	canvas = createCanvas(500,500);
	canvas.position(100,200);
	background(100);

	canvas.mouseOut(showImage);
	canvas.mouseOver(hideImage);

	img = createImg("https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg");
	img.position(20,50);

	button = createButton("click me!");
	button.position(600,300);
	button.mouseClicked(changeBallColor);

	slider = createSlider(0,255,0);
	slider.position(600,100);
	slider.style('width', '200px');

	ballPos = 0;
	ballColor = 0;
}

function draw(){

	var myBackground = slider.value();
	background(myBackground);

	fill(ballColor);
	ballPos+=2;
	ellipse(ballPos,height/2,30,30);
	if(ballPos > width){
		ballPos = 0;
	}

}

function changeBallColor(){
	ballColor+=10;
}

function showImage(){
	img.show();
}

function hideImage(){
	img.hide();
}
