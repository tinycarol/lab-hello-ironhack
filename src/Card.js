import React from 'react';
import ReactDOM from 'react-dom';

const cardsInfo = [
  {
    img: '../images/icon1.png',
    title: 'Declarative',
    description: 'React makes it painless to create interactive Urs'
  },
  {
    img: '../images/icon2.png',
    title: 'Components',
    description: 'Build encapsulated componentes that manage their state.'
  },
  {
    img: '../images/icon3.png',
    title: 'Single-Way',
    description: 'A set of immutalbe values are passed to the component´s.'
  },
  {
    img: '../images/icon1.png',
    title: 'JSX',
    description: 'Stactically-typed, designed to run on modern browers.'
  }
]

function Card() {
  return (
    <>
      { cardsInfo.map( (card, index) => {
        const { img, title, description } = card
        return (
          <div className='card'>
            <img clasName="card-img" src={img}></img>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
          </div>
        )
      })}
    </>
  )
}

export default Card