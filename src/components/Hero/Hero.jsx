import React from "react";
import "./Hero.css";

const Hero = ({children}) => {
    return(

        <div className="Hero-Container">

                <h1 className="title"> Say hello to <br/>ReactJS</h1>
                <p className="text">You will learn to use <br/>
                the most popular fronted library,<br/>
                and become a super Ninja developer.</p>

                { children }
        </div>



    )
}



export default Hero