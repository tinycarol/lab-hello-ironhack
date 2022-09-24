import React from 'react'
import "./Hero.css"

const Hero = ({ children }) => {
    return (
        <div className='HeroContainer'>
            <h1 className="Title">Say hello to<br/>
                                  React JS
            </h1>
            <p className="Text">You will learn how to use <br/>
                                the most popular fronted library,<br/>
                                and become a super Ninja developer.
            </p>
            { children }
        </div>
    )
}

export default Hero