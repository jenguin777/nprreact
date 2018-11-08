import React from "react";
import "./Results.css";


const Results = props => (
    <div className="container">
        {/* {props.results.map(result => (
            <div className="card" key={result} id="results">
                <div className="card-header">
                    <h6><a className="article-link" target="_blank" rel="noopener noreferrer" href="{props.url}">{props.title}</a>
                    <a className="btn mt-auto btn-light btn-outline-dark float-right save" onClick={() => props.handleSaveButton(props._id)}>Save Article</a></h6>
                </div>
            </div>
        ))} */}
    </div>
);

export default Results;


// import React from "react";
// import "./SearchResults.css";

// const SearchResults = props => (
//   <ul className="list-group search-results">
//     {props.results.map(result => (
//       <li key={result} className="list-group-item">
//         <img alt="Dog" src={result} className="img-fluid" />
//       </li>
//     ))}
//   </ul>
// );

// export default SearchResults;
