import './Hero.css';

const Hero = () => {
    return(
        <div className='Hero' style={{ backgroundImage: "url('/images/react-logo.svg')" }}>
            <h1>Say hello to ReactJS</h1>
             <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
             <button>Awesome</button>
        </div>
    )
}
  
  export default Hero