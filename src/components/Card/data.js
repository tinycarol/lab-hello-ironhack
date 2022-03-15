import declarativeCard from "./images/icon1.png";
import componentsCard from "./images/icon2.png";
import singleWayCard from "./images/icon3.png";
import jsxCard from "./images/icon4.png";

const cardImages = {

  declarative: {
    logo: declarativeCard,
    title: "Declarative",
    text: "React makes it painless to create interactive UIs.",
  },

  components: {
    logo: componentsCard,
    title: "Components",
    text: "Build encapsulated components that manage their state.",
  },

  singleWay: {
    logo: singleWayCard,
    title: "Single-way",
    text: "A set of immutable values are passed to component's",
  },

  jsx: {
    logo: jsxCard,
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers.",
  }
};


export { cardImages };
