import React from "react";
import "./Card.css";

  const cards = [
    {
      image: "/images/icon1.png",
      title: "Declarative",
      text: "React makes it painless to create interactive UIs.",
    },
    {
      image: "/images/icon2.png",
      title: "Components",
      text: "Build encapsulated components that manage their state.",
    },
    {
      image: "/images/icon3.png",
      title: "Single-Way",
      text: "A set of immutable values are passed to the components.",
    },
    {
      image: "/images/icon4.png",
      title: "JSX",
      text: "Statically-typed, designed to run on modern browsers.",
    },
  ];
function Card(){
  return (
    <div className="container">
    <div className='cards'>
            {cards.map((card, index) => 
                <div key={card-{index}} className="feature">
                    <img src={card.image} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.text}</p>
                </div>
                )}
    </div>
        </div>
  );
};

export default Card;
