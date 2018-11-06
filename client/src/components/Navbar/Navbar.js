import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (

    <div className="container">
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Mongo Scraper</a>
            <a className="navbar-brand" href="/">Home</a>
            <a className="navbar-brand" href="/articles/saved">Saved Articles</a>
            {/* <button className="btn float-left" id="scrape">Scrape New Articles</button> */}
            <button className="btn float-left" id="clear-articles">Clear Articles</button>
        </nav>
    </div>
    
);

export default NavBar;
    