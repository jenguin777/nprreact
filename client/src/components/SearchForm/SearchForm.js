import React from "react";
import "./SearchForm.css";
import axios from "axios";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class SearchForm extends React.Component  {
  // state = {}
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

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('EVENT ', event.target)
    API.getApiArticles(this.state.articleSearch)
      .then(res => {
        this.setState({ articles: res.data })
        console.log('res ', res.data)
      })
      .catch(err => console.log(err));
    // var query = this.state
    // axios.post('/articles/search', query).then(response => {
    //   console.log(response);
    // })
  };

  render() {
    return(

      <div className="card">
      <div className="card-header">
          <strong><i className="fa fa-list-alt"></i> Search</strong>
      </div>
      <div className="card-body">
          {/* <form role="form"> */}
            <div className="form-group">
                <label for="search">Topic</label>
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
                <label for="start-year">Start Year</label>
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
                <label for="end-year">End Year</label>
                <input
                  value={this.state.startYear}
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
          {/* </form> */}
      </div>
  </div>

    )
  }

  
}

export default SearchForm;