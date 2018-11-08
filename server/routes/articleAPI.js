const router = require("express").Router();
const axios = require("axios");

// Matches with "/api/apiArticles"
  router
      .get("/", (req, res) => {
      console.log('NYT API route hit')
    axios
      .get("https://api.nytimes.com/", { params: req.query })
      // .then(({ data: { results } }) => res.json(results))
      .then(({ data: { results } }) => console.log(results))
      // console.log(results);
      .catch(err => res.status(422).json(err));
  });

module.exports = router;