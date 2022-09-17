import React from 'react'
import './Hero.css'

const Hero = ({ children }) => {

    return (
        <div className="Hero">
            <h1>Say hello to<br />
             ReactJS</h1>
            <h5>You will learn how to use<br />
            most popular frontend library,<br />
            and become a super Ninja developer.
            </h5>
            {children}
        </div>
    )

}

export default Hero;

