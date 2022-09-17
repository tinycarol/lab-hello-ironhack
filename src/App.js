import React from "react";
import "./App.css";
import Button from "./components/misc/Button/Button";
import Hero from "./components/misc/Hero/Hero";
import Navbar from "./components/misc/Navbar/Navbar";
import Card from "./components/misc/Card/Card"

const App = () => {
    return (
        <div className="App">
         <Navbar />
         <Hero>
            <Button>
                Awesome!
            </Button>
         </Hero>
            <Card> 
            </Card>
        </div>
    )
}

export default App;