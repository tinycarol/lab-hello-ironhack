import React from "react";
import './Hero.css'

const Hero = ({children})=>{
  return (
    <div className="container">
      <h1>Say hello to ReactJS</h1>
      <p>You will lear how to use the most popular front library, and become a super Ninja developer</p>
      {children}
    </div>
  )
}

export default Hero;