import React from "react";

const Results = props =>
    <div className="container">
        <div className="card" id="results">
            <div className="card-header">
                <h6><a className="article-link" target="_blank" rel="noopener noreferrer" href="{props.url}">{props.title}</a>
                <a className="btn mt-auto btn-light btn-outline-dark float-right save" onClick={() => props.handleSaveButton(props._id)}>Save Article</a></h6>
            </div>
        </div>
    </div>

export default Results;