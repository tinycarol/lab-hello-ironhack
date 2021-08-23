import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = (
  <div>
    <div id="titlePage">
      <div className="navbar">
        <img src="images/ironhack-logo.svg" alt="Ironhack logo"/>
        <img src="images/menu-top.svg" alt="Menu"/>
      </div>

      <div class="title">
        <h1>Say hello to <br/> ReactJS</h1>
        <p>You will learn how to use <br/> the most popular frontend library, <br/> and become a super Ninja developer</p>
        <button class="titleButton"> Awesome!</button>
      </div>
    </div>

    <div id="featuresPage">
      <div class="featureCard">
        <img src="images/icon1.png" alt="Declarative"/>
        <h3>Declarative</h3>
        <p class="featureDescription">React makes it <br/> painless to create <br/> interactive UIs.</p>
      </div>
      <div class="featureCard">
        <img src="images/icon2.png" alt="Components"/>
        <h3>Components</h3>
        <p class="featureDescription">Build encapsulated <br/> components that <br/> manage their state</p>
      </div>
      <div class="featureCard"> 
        <img src="images/icon3.png" alt="Single-Way"/>
        <h3>Single-Way</h3>
        <p class="featureDescription">A set of immutable  <br/> values are passed to <br/> the component's</p>
      </div>
      <div class="featureCard">
        <img src="images/icon4.png" alt="JSX"/>
        <h3>JSX</h3>
        <p class="featureDescription">Statically-typed, <br/> designed to run on <br/> modern browsers</p>
      </div>
    </div>    
  </div>
);

ReactDOM.render(element, document.getElementById('root'));