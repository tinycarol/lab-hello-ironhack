import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card" key={props.name}>
            <img className="card-img" src={props.image} alt={props.name} />
            <h2 className="title">{props.name}</h2>
            <p className="text">{props.text}</p>
        </div>
    )
}

export default Card;