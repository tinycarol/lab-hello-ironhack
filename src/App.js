import React from "react";
import styles from "./App.module.css";

const icons = [
  {
    image: "./images/icon1.png",
    title: "Declarative",
    text: "React makes it painless to create interactive UIs",
  },
  {
    image: "./images/icon2.png",
    title: "Components",
    text: "Build encapsulated components that manage their state",
  },
  {
    image: "./images/icon3.png",
    title: "Single-Way",
    text: "A set of immutable values are apssed to the components",
  },
  {
    image: "./images/icon4.png",
    title: "JSX",
    text: "Stactically-typed, designed to run on modern browsers",
  },
];

const App = () => {
  return (
    <div>
      <section
        className={styles.section_one}
        style={{ backgroundImage: "url('./images/react-logo.svg')" }}
        // unable to add images from css because of React src restrictions
      >
        <div className={styles.nav}>
          <img src="./images/ironhack-logo.svg" />
          <img src="./images/menu-top.svg" />
        </div>

        <h2>Say hello to ReactJS</h2>
        <p className={styles.hero_text}>
          You will learn how to use the most poopular frontend library, and
          become a super ninja developer!
        </p>

        <button className={styles.hero_button}>Awesome Sauce!</button>
      </section>
      <section className={styles.section_two}>
        <div className={styles.card_container}>
          {icons.map((icon, i) => {
            return (
              <div key={i} className={styles.card}>
                <img src={icon.image} />
                <h3>{icon.title}</h3>
                <p>{icon.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
