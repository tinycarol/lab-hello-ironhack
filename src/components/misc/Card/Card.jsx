import React from 'react'
import './Card.css'

const Card = ({img, title, description}) => {

    return (
         <div className="Card">
            <img src={img} alt="logo"/>
            <h3>{title}</h3>
            <p>{description}</p>
            </div>  
    )
}

export default Card;