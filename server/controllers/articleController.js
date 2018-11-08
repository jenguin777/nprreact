const db = require("../models");

// Defining methods for the articlesController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeById: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeAll: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getSavedArticles: function(req, res){
    console.log("getSavedArticles route hit");
     db.Article
     .find({})
      .sort({ date: -1 })
       .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  deleteSavedArticle: function(req, res){
    console.log("Delete Articles Path hit");
    console.log(JSON.stringify(req.body));
    db.Article
    .remove({articleId: req.body.articleId}, (err)=>{
       if (err) throw err;

       console.log("Article has been deleted");

    db.Article
      .find({})
        .sort({ date: -1 })
         .then(remainingArticles => res.json(remainingArticles))
          .catch(err => res.status(422).json(err));
      })
       .catch(err => res.status(422).json(err));
  }
};
