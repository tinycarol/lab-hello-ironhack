import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mainDiv">

        <div className="upperDiv">

          <div className="navbar">
            <img src="images/ironhack-logo.svg" alt="" />
            <img src="images/menu-top.svg" className='burger' alt="" />
          </div>

          <div className='content'>
            <div className='col1'>
              <div className='title'>
                <h1>Say hello to</h1>
                <h1>ReactJS</h1>
              </div>

              <div>
                <p>You will learn how to use </p> 
                <p>the most popular frontend library</p>
                <p>and become a super ninja developer.</p>
              </div>

              <button>Awesome!</button>
            </div>

            <div className='col2'>
              <img src="images/react-logo.svg" className='medium' alt="" />
              <img src="images/react-logo.svg" className='medium' alt="" />
              <img src="images/react-logo.svg" className='medium' alt="" />
            </div>

            <div className='col3'>
              <img src="images/react-logo.svg" className='small' alt="" />
              <img src="images/react-logo.svg" className='small' alt="" />
              <img src="images/react-logo.svg" className='small' alt="" />
            </div>

          </div>
        </div>

        <div className="lowerDiv">
          <div className='card'>
            <img src="images/icon1.png"  alt="" />
            <h3>Declarative</h3>
            <p>React make it painless to create interactive UIs.</p>
          </div>

          <div className='card'>
            <img src="images/icon2.png"  alt="" />
            <h3>Declarative</h3>
            <p>React make it painless to create interactive UIs.</p>
          </div>

          <div className='card'>
            <img src="images/icon3.png"  alt="" />
            <h3>Declarative</h3>
            <p>React make it painless to create interactive UIs.</p>
          </div>

          <div className='card'>
            <img src="images/icon4.png"  alt="" />
            <h3>Declarative</h3>
            <p>React make it painless to create interactive UIs.</p>
          </div>

        </div>
      </div>
 
    </div>
  );
}

export default App;


