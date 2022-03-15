// import logo from './ironhack-logo.svg -->> no funciona porque está en public y peta todo
import "./App.css";

const components = [
    {
        title: 'Declarative',
        paragraph:'React makes it painless to create interactive UIs',
        img: '/images/icon1.png',

    },
    {
        title: 'Components',
        paragraph:'Build encapsulated components that manage their state',
        img: '/images/icon2.png'
    },
    {
        title: 'Single-Way',
        paragraph:'A set of inmutable values are passed to the components',
        img: '/images/icon3.png'
    },
    {
        title:  'JSX',
        paragraph:'Statically-typed designed to run on modern browsers',
        img: '/images/icon4.png'
    }
]
    
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/ironhack-logo.svg" className="App-logo" alt="logo" />
        <div>
          <li>
            <img
              src="/images/menu-top.svg"
              className="menu-top"
              alt="menu top"
            />
          </li>
        </div>
      </header>
      <div className="title-text">
        <h1 className="App-title">
          Say hello to <br></br>ReactJS
        </h1>
        <p className="header-text">
          You will learn how to use <br></br>
          the most popular frontend library, <br></br>
          and become a super Ninja developer.
        </p>
        <button className="awesome-button">Awesome!</button>
      </div>

   {
       components.map((components, index) => {
           return (
               <div className="elements">
               <div key={index}>
               <h5>{components.title}</h5>
               <p>{components.paragraph}</p>
              <img className="img-icon" src={components.img} alt="img" />

               </div>
  
               </div>
           )
       })
   }
    </div>
  );
}

export default App;
