import React from "react";

const SearchForm = props =>

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
                      value={props.searchTopic}
                      onChange={props.handleInputChange} 
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
                      value={props.startYear}
                      onChange={props.handleInputChange}  
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
                      value={props.endYear}
                      onChange={props.handleInputChange}  
                      type="text"
                      name="endYear"
                      className="form-control"
                      id="end-year-input"
                      placeholder="2018"/>
                </div>

                <button
                  type="submit"
                  onClick={props.handleFormSubmit}
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

export default SearchForm;