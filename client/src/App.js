import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";
import Articles from "./pages/Articles";
// import SavedArticles from "./pages/SavedArticles";
import NoMatch from "./pages/NoMatch";
import Results from "./components/Results/Results";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Jumbotron />
        <SearchForm />
        <div><br></br></div>
        <Results />
        <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        {/* <Route exact path="/savedArticles" component={SavedArticles} /> */}
        <Route component={NoMatch}/>
      </Switch>
      </Wrapper>
    </div>
  </Router>
);

export default App;
