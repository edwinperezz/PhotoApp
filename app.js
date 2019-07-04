var express = require("express");
var app = express();
const bodyParser = require('body-parser');
const squareConnect = require('square-connect');
// Set the Access Token and Location Id
const accessToken = 'EAAAEP3TIhoeAeQ4m2_BXPeCiwDJ_08Ie6cZBBux5KAo1YvybHEGpUVjmQ1SqvBP';
const locationId = 'CBASEFoNja9W744N5jVfaDj8pyogAQ';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Set Square Connect credentials
const defaultClient = squareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken;

app.get("/", (req,res) =>{
	res.render("index");
});
app.get("/checkout",(req,res)=>{
	res.render("checkout");
});


app.post('/process-payment', function(req, res){
  const requestParams = req.body;
  const idempotencyKey = require('crypto').randomBytes(64).toString('hex');
  // Charge the customer's card
  const transactionsApi = new squareConnect.TransactionsApi();
  const requestBody = {
    card_nonce: requestParams.nonce,
    amount_money: {
      amount: 100, // $1.00 charge
      currency: 'USD'
    },
    idempotency_key: idempotencyKey
  };
  transactionsApi.charge(locationId, requestBody).then(function(data) {
    const json= JSON.stringify(data);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': json
    });
  }, function(error) {
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    });
  });
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Website is up!");
});