import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const landingPage = (
  <div>
    <div className='home'>
      <div className='homeLogos'>
        <img
        src='images/ironhack-logo.svg'
        alt='Ironhack logo'
        />
        <img
        src='images/menu-top.svg'
        alt='Ironhack menu'
        />
      </div>

      <div className='homeText'>
        <h1>Say hello to <br/> ReactJS</h1>
        <p>You will learn how to use <br/> the most popular frontend library, <br/> and become a super Ninja developer.</p>
      </div>
      <button className='button'>Awesome!</button>
    </div>

   <div className='homeDescription'>
    <div className='card'>
      <img 
      src='images/icon1.png' 
      alt='Declarative logo'
      />
      <h3>Declarative</h3>
      <p className='description'>React makes it <br/> painless to create <br/> interactive UIs.</p>
    </div>
    <div className='card'>
      <img 
      src='images/icon2.png' 
      alt='Components logo'
      />
      <h3>Components</h3>
      <p className='description'>Build encapsulated <br/> components that <br/> manage their state.</p>
    </div>
    <div className='card'>
      <img 
      src='images/icon3.png' 
      alt='Single way logo'
      />
      <h3>Components</h3>
      <p className='description'>A set of immutable <br/> values are passed to <br/> the component's.</p>
    </div>
    <div className='card'>
      <img 
      src='images/icon4.png' 
      alt='JSX logo'
      />
      <h3>JSX</h3>
      <p className='description'>Statically-typed, <br/> designed to run on <br/> modern browsers.</p>
    </div>
   </div>
  </div>
);

ReactDOM.render(landingPage, document.getElementById('root'));