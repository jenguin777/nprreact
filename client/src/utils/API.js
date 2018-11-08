import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
// const APIKEY = process.env.API_KEY;
const API_KEY = "5adf593a1cc14ab3a63dab40327c42c9";

export default {
    
  // getAPIArticles: function(query) {
  //   console.log("API Query: " + query);
  //   return axios.get("/api/apiArticles", {{BASEURL + APIKEY + query}});
  // },
  
  // Get all articles
  getAPIArticles: function() {
    let query = BASEURL + API_KEY;
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

