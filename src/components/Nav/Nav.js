import ironhackLogo from "./images/ironhack-logo.svg";
import menuLogo from "./images/menu-top.svg";
import './nav.css'


const Navbar = () => {
	return (
		<nav>
			<img src={ironhackLogo} className="App-logo" alt="logo" />
			<img src={menuLogo} className="App-logo" alt="logo" />
		</nav>
	);
};


export { Navbar };
