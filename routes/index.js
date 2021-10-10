const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/user-routes");
const tweetRoutes = require("./api/tweet-routes");

// API Routes
router.use(userRoutes);
router.use(tweetRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
