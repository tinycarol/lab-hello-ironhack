import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = (
  <div className='home'>
    <h1>Say Hello to ReactJS</h1>
    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
    <div className='second'>
  <img
      src='/images/icon1.png'
      alt='A kid using a keyboard as a surf board'
    />
  </div>
  <div className='second'>
  <img
      src='/images/icon2.png'
      alt='A kid using a keyboard as a surf board'
    />
  </div>


  </div>
 
);



ReactDOM.render(element, document.getElementById('root'));