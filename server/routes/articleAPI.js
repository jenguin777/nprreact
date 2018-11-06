const router = require("express").Router();
const axios = require("axios");

// Matches with "/api/apirecipes"
  router
      .get("/", (req, res) => {
      console.log('NPR API route hit')
    axios
      .get("https://www.npr.org/", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

module.exports = router;