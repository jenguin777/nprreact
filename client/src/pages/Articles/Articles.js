import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from "../../utils/API";
import axios from 'axios'
import cheerio from 'cheerio'
// const articleController = require("../../controllers/articleController");

// class Articles extends Component {
//   state = {
//     articles: [],
//     savedArticles: []
//   };

//   componentDidMount() {
//     this.loadedArticles();
//     this.loadedSavedArticles();
//   }


  // When the #clear-articles button is pressed
  // $("#clear-articles").on("click", function(event) {
  //   event.preventDefault();
  //   // Make an AJAX GET request to delete the articles from the db
  //   $.ajax({
  //     type: "GET",
  //     dataType: "json",
  //     url: "/clear-articles",
  //     // On a successful call, clear the #results section
  //     success: function(response) {
  //       $("#results").empty();
  //       // window.location.href = "/";
  //       location.reload();
  //     }
  //   });
  // });



// /**
//  * pulls information from the form and build the query URL
//  * @returns {string} URL for NYT API based on form inputs
//  */
// function buildQueryURL() {
//   // queryURL is the url we'll use to query the API
//   var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

//   // Begin building an object to contain our API call's query parameters
//   // Set the API key
//   var queryParams = { "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931" };

//   // Grab text the user typed into the search input, add to the queryParams object
//   queryParams.q = $("#search-term")
//     .val()
//     .trim();

//   // If the user provides a startYear, include it in the queryParams object
//   var startYear = $("#start-year")
//     .val()
//     .trim();

//   if (parseInt(startYear)) {
//     queryParams.begin_date = startYear + "0101";
//   }

//   // If the user provides an endYear, include it in the queryParams object
//   var endYear = $("#end-year")
//     .val()
//     .trim();

//   if (parseInt(endYear)) {
//     queryParams.end_date = endYear + "0101";
//   }

//   // Logging the URL so we have access to it for troubleshooting
//   console.log("---------------\nURL: " + queryURL + "\n---------------");
//   console.log(queryURL + $.param(queryParams));
//   return queryURL + $.param(queryParams);




// }

// export default Articles;
