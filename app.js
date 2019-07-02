var express = require("express");
var app = express();

var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "EAAAEP3TIhoeAeQ4m2_BXPeCiwDJ_08Ie6cZBBux5KAo1YvybHEGpUVjmQ1SqvBP";

var api = new SquareConnect.LocationsApi();

api.listLocations().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, 0, 1));
}, function(error) {
  console.error(error);
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.get("/", (req,res) =>{
	res.render("index");
});
app.get("/buy",(req,res)=>{
	res.render("buy");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Website is up!");
});