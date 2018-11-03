const router = require("express").Router();
const articleRoutes = require("./articles");

// Routes
router.use("/recipes", articleRoutes);

module.exports = router;
