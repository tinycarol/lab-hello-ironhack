import React from "react";
import './Card.css';

const Card = (({image, title, text}) => {
  return (
    <div clasName='card'>
      <img src={image} alt="image.."/>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
})

export default Card;