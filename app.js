var express = require("express");
var app = express();
const bodyParser    = require('body-parser'),
      squareConnect = require('square-connect'),
      mongoose      = require("mongoose"),
      Photo         = require("./models/photo"),
      multer        = require("multer");
      

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+"/public/uploads/imgs")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
var upload = multer({storage: storage});

mongoose.connect(process.env.DATABASEURL, { 
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.log("Connected MongoDB");
}).catch(err => {
  console.log("Error " + err.message);
});


app.get("/", (req,res) =>{
  Photo.find({}, function(err, photos){
    if(err){
      console.log(err);
    } else {
      res.render("index", {images: photos});
    }
  });
});
app.get("/new", (req,res) => {
  res.render("new");
});
app.post("/new", upload.single('image'), (req,res) => {
  var imgURL = "/uploads/imgs/"+req.file.originalname;
  var newPhoto = {title: req.body.title, ID: req.body.id, image: imgURL, description: req.body.description};
  Photo.create(newPhoto, function(err,photo){
    if(err){
      console.log(err);
    } else {
      res.redirect("/#portfo");
    }
  });
});
app.get("/show", (req,res)=>{
  res.render("show");
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Website is up!");
});