import React from "react";
import "./SearchForm.css";
import axios from "axios";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class SearchForm extends React.Component  {

  // state = {
  //   name: "",
  //   articles: [],
  //   articleSearch: ""
  // };

  state = {}
    constructor(props){
      super(props);
      this.state = {}
    }

  handleInputChange = (event) => {

    this.setState({
      [event.target.name] : event.target.value
    })
    console.log(this.state);

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('EVENT ', event.target);
    API.getAPIArticles(this.state.articleSearch)
      .then(res => {
        this.setState({ articles: res.data })
        // console.log('res ', res.data)
      })
      .catch(err => console.log(err));
  };


  handleRecipeFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    console.log('EVENT ', event.target)
    API.getApiRecipes(this.state.recipeSearch)
      .then(res => {
        this.setState({ recipes: res.data })
        console.log('res ', res.data)
      })
      .catch(err => console.log(err));
  };

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <br/>

            <div className="card mx-auto">
              <div className="card-header">
                  <strong><i className="fa fa-list-alt"></i> Search Parameters</strong>
              </div>
              <div className="card-body">
                <form role="form">

                  <div className="form-group">
                      <label htmlFor="search">Search Topic</label>
                      <input
                        value={this.state.searchTopic}
                        onChange={this.handleInputChange} 
                        name = "searchTopic"
                        type="text" 
                        className="form-control" 
                        id="topic-input" 
                        placeholder="Technology"
                      />
                  </div>

                  <div className="form-group">
                    <label htmlFor="pwd">Number of Records to Retrieve:</label>
                    <select id="article-count" className="custom-select" aria-labelledby="dropdownMenuButton">
                      <option value="1">1</option>
                      <option value="5" defaultValue>5</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div className="form-group">
                      <label htmlFor="start-year">Start Year</label>
                      <input
                        value={this.state.startYear}
                        onChange={this.handleInputChange}  
                        type="text"
                        name="startYear"
                        className="form-control"
                        id="start-year-input" 
                        placeholder="2017"
                      />
                  </div>

                  <div className="form-group">
                      <label htmlFor="end-year">End Year</label>
                      <input
                        value={this.state.endYear}
                        onChange={this.handleInputChange}  
                        type="text"
                        name="endYear"
                        className="form-control"
                        id="end-year-input"
                        placeholder="2018"/>
                  </div>

                  <button
                    type="submit"
                    onClick={this.handleFormSubmit}
                    className="btn btn-default"
                    id="searchButton"
                  >
                  <i className="fa fa-search"></i> Search
                  </button>

                  <button
                    onClick={this.handleFormSubmit} 
                    className="btn btn-default" 
                    id="clear-all"
                  >
                  <i className="fa fa-trash"></i> Clear Results
                  </button>

                </form>
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm;