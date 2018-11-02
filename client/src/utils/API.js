import axios from "axios";

export default {
    
  // Get all articles
  getAPIArticles: function() {
    let query = "";
    console.log("API Query: " + query);
    return axios.get("/api/apiArticles", { params: { q: query } });
  },  

  getArticleById: function() {
    let articleId = 0;
    return axios.get("/api/articles/" + articleId);
  }, 

  getSavedArticles: function() {
    return axios.get("/api/users/savedArticles/");
  },

  addSavedArticle: function (userId, data) {
    let savedArticleId = 0;
    return axios.put("/api/users/savedArticles/" + savedArticleId);
  },

  removeSavedArticle: function (id) {
    let removedArticleId = 0;
    return axios.delete("/api/users/savedArticles" + removedArticleId);
  }

};
