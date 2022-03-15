import ironhackLogo from "./images/ironhack-logo.svg";
import menuLogo from "./images/menu-top.svg";
import './nav.css'


const Navbar = () => {
	return (
		<nav className="nav">
			<div><img src={ironhackLogo} className="App-logo" alt="logo" /></div>
			<div><img src={menuLogo} className="App-logo" alt="logo" /></div>
		</nav>
	);
};


export { Navbar };
