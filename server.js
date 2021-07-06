const express = require("express");
const session = require('express-session');
const app = express();
const cors = require("cors");
const passport = require("passport");
// const passportLocal = require("passport-local").Strategy
const cookieParser = require("cookie-parser");
// const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes");
// const utils = require("./utils/auth");
// const MongoStore = require("connect-mongo");
const nodemailer = require("nodemailer")
const User = require("./models/User");

const sess = {
  secret: 'Super secret secret',
  resave: true,
  saveUninitialized: true,
  // store: MongoStore.create({ mongoUrl: "mongodb://localhost/projectenlistment"})
}


// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(session(sess));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
})
);
app.use(cookieParser("Super secret secret")),
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
  app.use(express.static("client/public"));
}
// Add routes, both API and view
app.use(routes);



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectenlistment",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
