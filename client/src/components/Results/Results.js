import React from "react";
import "./Results.css";
import Card from "../../components/Card";

const Results = props => (
            
    <div className="container">
            
                    <Card key={props._id}  
                        id={props._id}   
                        href={props.url}
                        index = {props.index}
                        title={props.title}
                        onClick = {()=> props.onClick(props.index)}
                        >
                        <p>Date Published: {props.date}</p>
                        {/* <a class="btn mt-auto btn-light btn-outline-dark float-right save" >Save Article</a> */}
                    </Card>
           
    </div> 
)  
            
export default Results;
