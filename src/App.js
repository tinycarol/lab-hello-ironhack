import React from "react";
import "./App.css";
import Navbar from './components/misc/Navbar/Navbar'
import Button from "./components/misc/Button/Button";
import Hero from "./components/misc/Hero/Hero";
import Card from "./components/misc/Card/Card";

const App = () => {
  const cardsInfo = [
    {
      image: "images/icon1.png",
      title:"Declarative",
      text:"Declarative ñldkf´pkf´s k+`qweokc`ss òw k`woitb ",
    },
    {
      image: "/images/icon2.png",
      title:"Components",
      text:"lllllclvkk +òd s`go w ñldkf´pkf´s k+`qweokc`ss òw k`woitb ",
    },
    {
      image: "/images/icon3.png",
      title:"Single-way",
      text:" jsjsj jsjsj kfldfl jsjsj l´pkf´s k+`qweokc`ss òw k`woitb ",
    },
    {
      image: "/images/icon4.png",
      title:"JSX",
      text:"JSX ñldkf´pkf´s k+`qweokc`ss òw k`woitb ",
    },
  ]


  return (
    <div>
      <Navbar className="Navbar"></Navbar>
      <div className="hero-container" style={{ backgroundImage: "url('/images/react-logo.svg')" }}>
        <Hero>
          <Button>Awesome!</Button>
        </Hero>
      </div>
      <div className="card-container">
        {cardsInfo.map(el => {
          return(
            <Card {...el}/>
          )
        })}
      </div>
    </div>
  );
};


export default App;