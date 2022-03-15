import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App/App'
import { Navbar } from './components/Nav/Nav';
import { Mainblock } from './components/Main/Main';


ReactDOM.render(
  <React.StrictMode>

    <App />
    <Navbar />
    <Mainblock />

  </React.StrictMode>,
  document.getElementById('root')
);
