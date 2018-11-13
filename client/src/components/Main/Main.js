import React from "react";
import "./Main.css";
// import axios from "axios";
// import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import SearchForm from "../SearchForm";
import Results from "../Results";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class Main extends React.Component  {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
  };  

     // When the component mounts, get a list of all articles
    componentDidMount() {
      // this.renderArticles()
    }

    // A helper method for rendering one search results div for each article
   

      

    // state = {
    //   constructor(props){
    //     super(props);
    //     this.state = {}
    //   }

    // handleInputChange = (event) => {

    //   this.setState({
    //     [event.target.name] : event.target.value
    //   })
    //   console.log(this.state);

    // }

    handleInputChange = event => {
      const { name, value } = event.target;
      console.log(event.target.value, "event target value");
      this.setState({
        [name]: value
      });
    }
    handleSave = (index) => {
      alert(index);
    }

    handleFormSubmit = (event) => {
      event.preventDefault();
      console.log('State ', this.state);
      const articleInfo = {
        q: this.state.searchTopic
      }
      console.log(this.state.articleSearch, '------ article search --------');
      API.getAPIArticles(articleInfo)
        .then(res => {
          this.setState({ articles: res.data.response.docs })
           console.log('res ', res)
        })
        .catch(err => console.log(err));
    }

    render() {
      return(

       <div>
        <Navbar />
        <Jumbotron />
        <SearchForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
        {/* <Results /> */}
        {
          this.state.articles ? 

          this.state.articles.map( (article, index) => {
           return( <Results
              _id = {article._id}
              key = {article._id}
              title = {article.headline.main}
              date = {article.pub_date}
              url = {article.web_url}
              index = {index}
              onClick = {this.handleSave}
             />)

          })
      
        : ''
        }
  
        </div>
      )
     
 
    };

}

export default Main;