import React from 'react'
import './Card.css'
import Logo1 from '../images/icon1.png'
import Logo2 from '../images/icon2.png'
import Logo3 from '../images/icon3.png'
import Logo4 from '../images/icon4.png'

const Card = () => {

    return (
        <div className="container-card">
         <div className="Card">
            <img src={Logo1} alt="logo1"/>
            <h3>Declarative</h3>
            <p>React makes it<br />
            painless to create<br />
            interactive UIs.
            </p>
            </div>  
            <div className="Card">
            <img src={Logo2} alt="logo2"/>
            <h3>Components</h3>
            <p>Build encapsulated<br />
            components that<br />
            manage their state.
            </p>
            </div>  
            <div className="Card">
            <img src={Logo3} alt="logo3"/>
            <h3>Single-Way</h3>
            <p>A set of immutable<br />
            values are passed to<br />
            the component's.
            </p>
            </div>  
            <div className="Card">
            <img src={Logo4} alt="logo4"/>
            <h3>JSX</h3>
            <p>Statically-typed<br />
            designed to run on<br />
            modern browsers.
            </p>
            </div> 
         </div>
    )
}

export default Card;