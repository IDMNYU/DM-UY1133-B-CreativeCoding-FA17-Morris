var myData;
var url;

var baseUrl;
var query;
var appID;

var searchTerms = []; //make an array to store search terms
var searchIndex = 0;

function setup() {

	//make a set of search terms stored in an array for easy switching
	searchTerms[0] = "London,UK";
	searchTerms[1] = "Chicago,IL";
	searchTerms[2] = "NewYork,NY";

	//construct the base of your URL
	baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	query = searchTerms[0];
	appID = "appid=89309063680894bde99f0b41e0e6ccbc"; //your API key here

	url = baseUrl + "q=" +  query + "&" + appID;

	setInterval(queryData, 5000);

}

function draw() {
  // put drawing code here
}

//dataResponse() is our callback function when we receive data
function dataResponse(tempData){
	myData = tempData;
	console.log(myData);
}

function queryData(){
	loadJSON(url, dataResponse);

	//loop through the different search terms each time you poll the URL
	if(searchIndex < 2){
		searchIndex++;
	}
	else searchIndex=0;

	//use the latest term in the searchTerms array
	query = searchTerms[searchIndex];

	//rebuild the URL string with the new search term
	url = baseUrl + "q=" +  query + "&" + appID;
}


function mouseClicked(){



}