const mongoose = require("mongoose");
const db = mongoose.connection;

function init() {
  mongoose.connect("mongodb://root:12345@ds014388.mlab.com:14388/employee");
}

db.once("open", function() {
  console.log("mongodb connected.");
});

module.exports = init;