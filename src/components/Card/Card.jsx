import React from "react";
import "./Card.css";

const Card = () => {
  const cards = [
    {
      image: "/images/icon1.png",
      title: "Declarative",
      text: "React makes it painless to create interactive UIs.",
    },
    {
      image: "/images/icon2.png",
      title: "Components",
      text: "Build encapsulated components that manage their state",
    },
    {
      image: "/images/icon3.png",
      title: "Single-Way",
      text: "A set of inmutable values are passed to the components",
    },
    {
      image: "/images/icon4.png",
      title: "JSX",
      text: "Statically-typed, designed to run on modern browsers",
    },
  ];

  return (
    <div className="Row">
      {cards.map(({ image, title, text }, i) => {
        return (
          <div key={title}>
            <img src={image} alt="{title}"></img>
            <h2>{title}</h2>
            <p className="Card-Text">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
