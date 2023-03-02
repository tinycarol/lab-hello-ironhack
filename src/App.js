import React from "react";
import "./App.css";
import Button from "./components/misc/Button/Button";
import Hero from "./components/misc/Hero/Hero";
import Navbar from "./components/misc/Navbar/Navbar";
import Card from "./components/misc/Card/Card"
import Logo1 from './components/misc/images/icon1.png'
import Logo2 from './components/misc/images/icon2.png'
import Logo3 from './components/misc/images/icon3.png'
import Logo4 from './components/misc/images/icon4.png'

const cards = [
    {img: Logo1, title: "Declarative", description: "React makes ir painless to create interactive UIs."},
    {img: Logo2, title: "Components", description: "Build encapsulated components that manage their state."},
    {img: Logo3, title: "Single-Way", description: "A set of immutable values are passed to the component's."},
    {img: Logo4, title: "JSX", description: "Statically-typed, designed to run on modern browsers."},
]

const App = () => {
    return (
        <div className="App">
            <div className="header-container">
            <Navbar />
            <Hero>
                <Button>
                    Awesome!
                </Button>
            </Hero>
            </div>
            <div className="card-container">
                {cards.map(card => {
                    return (<Card key={card.img} img={card.img} title={card.title} description={card.description} />)
                })}
            </div>
        </div>
    )
}

export default App;