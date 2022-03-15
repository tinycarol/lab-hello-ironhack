import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/ironhack-logo.svg" className="App-logo" alt="logo" />
        <img src="/images/menu-top.svg" className="Menu-top" alt="menu" />
      </header>
      <body>
        <div className="Hero-piece">
          <h1>Say hello to ReactJS</h1>
          <p>
            Your will learn how to use <br />
            the most popular frontend library, <br />
            and become a super Ninja developer.
          </p>
          <button>Awesome!</button>
          </div>
        <div className="Card-row">
          <div className="card">
            <img src="/images/icon1.png" className="card-img" />
            <h2 className="card-title">Declarative</h2>
            <p className="card-text">
              React makes it painless to create interactive UIs.
            </p>
          </div>
          <div className="card">
            <img src="/images/icon2.png" className="card-img" />
            <h2 className="card-title">Components</h2>
            <p className="card-text">
              Build encapsulated components that manage their state.
            </p>
          </div>
          <div className="card">
            <img src="/images/icon3.png" className="card-img" />
            <h2 className="card-title">Single-Way</h2>
            <p className="card-text">
              A set of immutable values are passed to the component's
            </p>
          </div>
          <div className="card">
            <img src="/images/icon4.png" className="card-img" />
            <h2 className="card-title">JSX</h2>
            <p className="card-text">
              Statically-typed, designed to run modern browsers
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
