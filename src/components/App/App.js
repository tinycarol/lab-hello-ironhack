import React from "react";
import Button from "./../Button/Button";
import "./App.css";
import Card from './../Card/Card';

const App = () => {

    const cards = [
      {
        img: "/images/icon1.png",
        title: "Declarative",
        text: "React makes it painless to create interactive UIs.",
      },
      {
        img: "/images/icon2.png",
        title: "Components",
        text: "Build encapsulated components that manage their state.",
      },
      {
        img: "/images/icon3.png",
        title: "Single-Way",
        text: "A set of immutable values are passed to the components.",
      },
      {
        img: "/images/icon4.png",
        title: "JSX",
        text: "Statically-typed, designed to run on modern browsers.",
      },
    ];

    return (
      <div className="App">
        <div className="hero-container" style={{ backgroundImage: "url('/images/react-logo.svg')" }}>
          <nav className="nav">
            <img src="/images/ironhack-logo.svg" alt="Ironhack's logo"></img>
            <img src="/images/menu-top.svg" alt="Menu's icon"></img>
          </nav>
          <div className="hero-text">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </p>
            <Button text="Awesome!"/>
          </div>
        </div>

        <div className="cards-container">
          {
            cards.map(({ title, img, text }) => {
                return <Card img={img} title={title} text={text} key={title}/>;        
            })
          };
        </div>
      </div>
    );
};

export default App;
