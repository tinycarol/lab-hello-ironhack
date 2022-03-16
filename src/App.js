import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import Grid from './components/Grid/Grid.js';
import './App.css';

function App() {
    return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Hero />
          <img className="react-logo-header" id="react-logo-1" src="./images/react-logo.svg" alt="" />
          <img className="react-logo-header" id="react-logo-2" src="./images/react-logo.svg" alt="" />
          <img className="react-logo-header" id="react-logo-3" src="./images/react-logo.svg" alt="" />
        </header>
        <body>
          <Grid />
        </body>
      </div>
    </>
    );
  }
  
  export default App;