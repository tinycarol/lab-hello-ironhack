import logo from "./images/ironhack-logo.svg";
import menu from "./images/menu-top.svg";
import image1 from "./images/icon1.png";
import image2 from "./images/icon2.png";
import image3 from "./images/icon3.png";
import image4 from "./images/icon4.png";
import "./App.css";

const cardItems = [
  {
    image: `${image1}`,
    title: "Declarative",
    text: "React makes it painless to create interactive UIs",
  },
  {
    image: `${image2}`,
    title: "Components",
    text: "Build encapsulated components that manage their state",
  },
  {
    image: `${image3}`,
    title: "Single Way",
    text: "A lot of unmutable values are passed to their components",
  },
  {
    image: `${image4}`,
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers",
  },
];

function Navbar() {
  return (
    <div className="nav">
      <img src={logo} />
      <img src={menu} />
    </div>
  );
}

function Button() {
  return <button className="btn-primary">Awesome!</button>;
}

function Header(props) {
  return (
    <div className="App-header">
      <div className="titles">
        <h1 className="title">{props.title}</h1>
        <h3 className="subtitle">
          You will learn how to use the most popular library and become a super
          ninja developer.
        </h3>
        <Button />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="body">
      <div className="cards">
        {cardItems.map((mappedItem) => (
          <Card item={mappedItem} key={mappedItem.title} />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.item.image} />
      <h2>{props.item.title}</h2>
      <p>{props.item.text}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header title={"Say Hello to ReactJS"} />
      </div>
      <div>
        <section>
          <Body />
        </section>
      </div>
    </>
  );
}

export default App;
