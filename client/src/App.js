import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
// import Results from "./components/pages/Results";
// import SavedArticles from "./components/pages/savedArticles";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Jumbotron />
        <SearchForm />
        {/* <Route exact path="/" component={Results} />
        <Route exact path="/saved" component={SavedArticles} /> */}
      </Wrapper>
    </div>
  </Router>
);

export default App;
