import React from "react";
import Background from "../../images/squareNews.jpg";

// Jumbotron parallax code
// var jumboHeight = $(".jumbotron").outerHeight();
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $(".bg").css("height", (jumboHeight-scrolled) + "px");
// }

// $(window).scroll(function(e){
//     parallax();
// });

const Jumbotron = () => (

    <div>
        <div className="bg" style={{backgroundImage: "url(" + Background + ")"}}></div>
        <div className="jumbotron jumbotron-fluid">
            <h1>Mongo Scraper</h1>
            <h4>National Public Radio Edition</h4>
        </div>
    </div>

);

export default Jumbotron;