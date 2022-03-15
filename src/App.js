
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Navbar'>
          <img src='/images/ironhack-logo.svg' className="Ironhack-logo" alt="logo" />
          <img src='/images/menu-top.svg' className="Menu-logo" alt="logo" />
        </div>
        <h1 className='H1-text'>Say Hello to<br/> ReactJS</h1>
        <p className='P1-text'>
          You will learn how to use <br/>
          the most popular frontend library,<br/>
          and become a super Ninja Developer<br/>
        </p>
       
        <button className='Button1'>
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Awesome!
</button>
      </header>
      <div className='cards'>
  <div className='card'>
  <img src='/images/icon1.png'></img>
  <h2>Declarative</h2>
  <p> React makes it painless <br/> to create interactive UIs</p>
  </div>
  <div className='card'>
  <img src='/images/icon2.png'></img>
  <h2>Components</h2>
  <p> Build encapsulated components<br/> that manage their state</p>

  </div>
  <div className='card'>
  <img src='/images/icon3.png'></img>
  <h2>Single Way</h2>
  <p> A set of immutable values<br/> are passed to the component's</p>


  </div>
  <div className='card'>
  <img src='/images/icon4.png'></img>
  <h2>JSX</h2>
  <p>Statically-typed, designed <br/>to run on modern browsers</p>

  </div>
</div>
    </div>
  );
}








export default App;