import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero>
        <Button>Awesome!</Button>
      </Hero>
      <div>
        <Card/>
      </div>
    </div>
  );
};

export default App;
