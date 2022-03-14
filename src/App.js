import React from 'react';
import logo from "./images/ironhack-logo.svg"
import menu from "./images/menu-top.svg"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {
    return (
        <div className="App">
            <div className='header'>
                <div className='navbar'>
                    <img src={logo} className='logo' />
                    <img src={menu} className='menu' />
                </div>
                <div className='main-text'>
                    <h1>Say hello to <br /> ReactJS </h1>
                    <p>
                        You will learn how to use <br /> the most popular frontend library, <br />
                        and become a super Ninja developer.
                    </p>
                </div>
                <button>Awesome!</button>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img src={icon1} className='card-img' />
                    <h3 className='card-title'>Declarative</h3>
                    <p className='card-text'>React makes it painless to create interactive UIs.</p>
                </div>
                <div className='card'>
                    <img src={icon2} className='card-img' />
                    <h3 className='card-title'>Components</h3>
                    <p className='card-text'>Build encapsulated components that manage their state.</p>
                </div>
                <div className='card'>
                    <img src={icon3} className='card-img' />
                    <h3 className='card-title'>Single-Way</h3>
                    <p className='card-text'>A set of immutable values are passed to the component's</p>
                </div>
                <div className='card'>
                    <img src={icon4} className='card-img' />
                    <h3 className='card-title'>JSX</h3>
                    <p className='card-text'>Statically-typed, designed to run modern browsers</p>
                </div>
            </div>
        </div>
    )
}

export default App;