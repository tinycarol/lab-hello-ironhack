import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = (
  <div>
    <div id="cover">
      <div id="navBar">
        <img id="ironhack-logo" src="/images/ironhack-logo.svg" alt="ironhack logo"/>
        <img id="bar-icon" src="/images/menu-top.svg" alt="bar icon"/>
      </div>
      <div id="info">
        <h1>
          Say hello to ReactJS
        </h1>
        <p>
        You will learn how to use the most popular frontend library, and become a super ninja developer.
        </p>
        <button id="button" type="button" class="btn btn-light">Awesome!</button>
      </div>
    </div>
    <div id="cards">
      <div id="declarative">
        <img id="declarative-img" src="/images/icon1.png" alt="image"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div id="components">
        <img id="components-img" src="/images/icon2.png" alt="image"/>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div id="singleWay">
        <img id="singleWay-img" src="/images/icon3.png" alt="image"/>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div id="jsx">
        <img id="jsx-img" src="/images/icon4.png" alt="image"/>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>

  
)

ReactDOM.render(element, document.getElementById('root'));