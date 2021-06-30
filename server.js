require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("bodyParser");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes");


// Define middleware here
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
  app.use(express.static("client/public"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectenlistment");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
