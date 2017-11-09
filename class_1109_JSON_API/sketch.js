var myData;
var url;

var baseUrl;
var query;
var appID;


function setup() {

	//construct the different parts of the assembled URL
	baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	query = "London,uk";
	appID = "appid=89309063680894bde99f0b41e0e6ccbc";
	
	//url = "http://api.open-notify.org/iss-now.json";

	myData = loadJSON(url);

	console.log(myData);

	//call "queryData()" function every 4 seconds
	setInterval(queryData, 4000);

}

function draw() {

/*
	if(myData){
		var posData = myData.iss_position;
		console.log(posData);
	}
	else {
		console.log("bad data!");
	}
	*/
  // put drawing code here
}

//dataResponse() is our callback function, called when 
//loadJSON in queryData() receives a data response
function dataResponse(tempData){
	myData = tempData;
	//console.log(tempData);
}

function queryData(){
	loadJSON(url, dataResponse);
}