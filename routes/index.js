const path = require("path");
const router = require("express").Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"))
})

//***Don't uncomment code below until the routes have been created */
// const apiRoutes = require("./api");

// // API Routes

// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
