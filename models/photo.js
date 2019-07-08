var mongoose = require("mongoose");
var photoSchema =new mongoose.Schema({
	title: String,
   ID: String,
	image: String,
	description: String,
});
module.exports = mongoose.model("Photo", photoSchema);