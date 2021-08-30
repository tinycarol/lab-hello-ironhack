import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = (
  <div>
    <div id="cover">
      <div class="navbar">
        <img alt="logo" id="logo" src="/images/ironhack-logo.svg"/>
        <img alt="menu" id="menu" src="/images/menu-top.svg"/>
      </div>
      <div class="text">
        <h1>
          Say hello to ReactJS
        </h1>
        <p>
        You will learn how to use the most popular frontend library, and become a super ninja developer.
        </p>
        <button id="button" type="button" class="button">Awesome!</button>
      </div>
    </div>

  
    <div class="containers">
      <div class="container">
        <img alt="declarative" id="declarative" src="/images/icon1.png"/>
        <h3>
          Declarative
        </h3>
        <p>
          React makes it painless to create interactive UIs.
        </p>
      </div>

      <div class="container">
        <img alt="components" id="components" src="/images/icon2.png"/>
        <h3>
          Components
        </h3>
        <p>
          Build encapsulated components that manage their state.
        </p>
      </div>

      <div class="container">
        <img alt="single-way" id="single-way" src="/images/icon3.png" alt="image"/>
        <h3>
          Single-Way
        </h3>
        <p>
          A set of immutable values are passed to the component's.
        </p>
      </div>

      <div class="container">
        <img alt="jsx" id="jsx" src="/images/icon4.png"/>
        <h3>
          JSX
        </h3>
        <p>
          Statically-typed, designed to run on modern browsers.
        </p>
      </div>

    </div>
  </div>

)








ReactDOM.render(element, document.getElementById('root'));

