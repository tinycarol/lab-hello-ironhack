import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";
import Button from "./components/button/Button";

const cardArray = [
    {
        name: 'Declarative',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quisquam.',
        image: '/images/icon1.png'
    },
    {
        name: 'Components',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quisquam.',
        image: '/images/icon2.png'
    },
    {
        name: 'Single Way',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quisquam.',
        image: '/images/icon3.png'
    },
    {
        name: 'JSX',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quisquam.',
        image: '/images/icon4.png'
    },
    {
        name: 'JSX',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quisquam.',
        image: '/images/icon4.png'
    },
]


const App = () => {
    return (
        <div className="container">
            <div className="header-container">
                <Navbar />
                <Hero>
                    <Button />
                </Hero>
            </div>
            <div className="card-container">
                {cardArray.map(({ name, text, image }) => {
                    return (
                        <Card name={name} text={text} image={image} />
                    );
                })}  
                {/* {cardArray.map((card) => {
                    return (
                        <Card {...card} />
                    );
                })}        */}
            </div>
        </div>
    )
}

export default App;