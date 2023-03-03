import './App.css';

function App () {
  return (
    <div className='App'>
      <div className='nav'>
        <a href="https://my.ironhack.com/" target="_blank" rel="noopener noreferrer"><img  className ='logo' src ="/images/ironhack-logo.svg" alt="logo"/></a> 
        <img className='burger' src = "/images/menu-top.svg" alt="burger"/>
      </div>
      <div className='hero'> 
        <div className='hero-content'>
          <h1>Say hello to<br></br>ReactJS</h1>
          <p>You will learn how to use<br></br>the most popular fronted library,<br></br>and become a super Ninja developer.</p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="cards">
      </div>
    </div>
  );
}

export default App;
