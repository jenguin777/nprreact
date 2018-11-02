import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (

    <div class="container">
        <nav class="navbar fixed-top navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Mongo Scraper</a>
            <a class="navbar-brand" href="/">Home</a>
            <a class="navbar-brand" href="/articles/saved">Saved Articles</a>
            <button class="btn float-left" id="scrape">Scrape New Articles</button>
            <button class="btn float-left" id="clear-articles">Clear Articles</button>
        </nav>
    </div>
    
);

export default NavBar;
    