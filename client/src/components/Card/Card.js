import React from "react";
import "./Card.css";

const Card = (props) => (
  <div className="card article-card">
    <div className="card-body article-card-body">
      <h5>{props.title}</h5>
      <p className="card-text">{props.summary}</p>
      <a rel="noreferrer noopener" target="_blank" href={props.url}>
        Go to article
      </a>
    </div>
  </div>
);

export default Card;
