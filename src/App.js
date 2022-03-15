import './App.css';

function App() {

  return (
    <div>
      <main className="App-landing">
      <nabvar className="App-nav">
          <img className="img-logo" src="/images/ironhack-logo.svg" alt="Ironhack logo"/>
          <img className="img-menu" src="images/menu-top.svg" alt="menu"/>
      </nabvar>
        <h1>Say hello to ReactJS</h1>
        <p className="text-landing">You will learn to use the most popular frontend library, and become a super Ninja developer.</p>

      <button>Awesome!</button>
    </main>

    <section className="container">
      <div className="item"> 
      <img className="img-section" src="\images\icon1.png" alt="img test"/>
        <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
      </div>
      
      <div>
      <img className="img-section" src="\images\icon2.png" alt="img test"/>
        <h3>Components</h3>
          <p>Build encapsulated components that manager their state.</p>
      </div>
      
      <div>
      <img className="img-section" src="\images\icon3.png" alt="img test"/>
      <h3>Single-Away</h3>
      <p>A set of inmutable values passed to the components</p>
      </div>
      
      <div>
      <img className="img-section" src="\images\icon4.png" alt="img test"/>
      <h3>JSX</h3>
      <p>Statically-typed, designed to run on modern browser.</p>
      </div>
      
    </section>


    </div>
  )
} 

export default App;