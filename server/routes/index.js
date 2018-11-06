const router = require("express").Router();
const articleRoutes = require("./articles");
const articleAPIRoutes = require("./articleAPI");
const path = require('path');

// Routes 
router.use("/article", articleRoutes);
router.use("/apiarticles", articleAPIRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;
