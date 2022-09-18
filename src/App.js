import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
	const cards = [
		{
			img: "/images/icon1.png",
			title: "Declarative",
			text: "React makes it painless to create interactive UIs.",
		},
		{
			img: "/images/icon2.png",
			title: "Components",
			text: "Build encapsulated components that manage their state.",
		},
		{
			img: "/images/icon3.png",
			title: "Single-Way",
			text: "A set of inmmutable values are pased to the component's.",
		},
		{
			img: "/images/icon4.png",
			title: "JSX",
			text: "Static-typed, designed to run on modern browsers",
		},
	];
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<div className="Container">
				{cards.map(({ img, title, text }) => {
					return <Card img={img} title={title} text={text} key={img} />;
				})}
			</div>
		</div>
	);
};

export default App;
