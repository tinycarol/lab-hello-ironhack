import React from "react";
import "./Hero.css";
import Button from "../button/Button";

const Hero = (props) => {
    return (
        <div className="hero">
            <h1>Say Hello to React</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id a nobis harum ab deleniti ex consectetur itaque odit! Nam, voluptatem.</p>
            {props.children}
        </div>
    )
}

// const Hero = ({children}) => {
//     return (
//         <div className="hero">
//             <h1>Say Hello to React</h1>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id a nobis harum ab deleniti ex consectetur itaque odit! Nam, voluptatem.</p>
//             {children}
//         </div>
//     )
// }


export default Hero;