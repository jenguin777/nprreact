import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
// import Jumbotron from "./components/Jumbotron";
// import SearchForm from "./components/SearchForm";
// import Results from "./components/Results/Results";

const App = () => (
  <Router>
    <div>
      {/* <Navbar />
      <Wrapper>
        <Jumbotron />
        <SearchForm />
        <div><br></br></div>
        <Results /> */}
        <Switch>
        <Route exact path="/" component= {Main} />
      </Switch>
      {/* </Wrapper> */}
    </div>
  </Router>
);

export default App;
