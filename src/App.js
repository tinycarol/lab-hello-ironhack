import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Button from "./components/Button/Button.jsx";
import Card from "./components/Card/Card.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="hero-container">
        <nav className="navbar">
          <Navbar />
        </nav>
      </div>
      <section className="hero">
        <Hero>
          <Button>Awesome!</Button>
        </Hero>
      </section>
      <section className="card-container">
        <Card />
      </section>
    </div>
  );
};

export default App;
<div className="App">
  <Navbar />
  <Hero>
    <Button>Awesome!</Button>
  </Hero>
  <div>
    <Card />
  </div>
</div>;
