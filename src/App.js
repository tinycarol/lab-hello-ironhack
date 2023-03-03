import './App.css';

function Card(props) {
  return (
    <div className='card-container'>
        {props.elem?.map((elem) => {
          return (
          <div key={elem.title} className="elem-card">
            <img src={elem.image} alt={elem.description} />
            <h2>{elem.title}</h2>
            <p>{elem.description}</p>
          </div>
          )
        })}
    </div>
  )
}



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
          <a href="https://my.ironhack.com/" target="_blank" rel="noopener noreferrer"><button>Awesome!</button></a>
        </div>
      </div>
      <Card elem = {[
        {
          title: "Declarative",
          description: "React makes it painless to create interactive UIs.",
          image: "/images/icon1.png",
        },
        {
          title: "Components",
          description: "Build encapsulated components that manage their state.",
          image: "/images/icon2.png",
        },
        {
          title: "Single-Way",
          description: "A set of immutable values are passed to the component's.",
          image: "/images/icon3.png",
        },
        {
          title: "JSX",
          description: "Statically-typed, designed to run on modern browsers.",
          image: "/images/icon4.png",
        },
      ]}/>
    </div>
  );
}

export default App;
