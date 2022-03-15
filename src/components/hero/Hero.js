import './Hero.css'
import Navbar from '../navbar/Navbar.js'

function Hero() {
    return (
        <div className='hero'>
             <Navbar />
             <div id='intro-text'>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use <br/> the most popular frontend library,<br/> and become a super Ninja developer</p>
                <button id='btn'>Awesome!</button>
             </div>
        </div>
    )
}

export default Hero