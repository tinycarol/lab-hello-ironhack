import React from 'react'
import './Navbar.css'
import NavMenu from "../images/menu-top.svg"
import IronhackLogo from "../images/ironhack-logo.svg"

const Navbar = () => {

return (
    <div className="Navbar">
     <div className="container-nav">
      <img src={IronhackLogo} className="Ironhack-logo" alt="Ironhack Logo" />
      <img src={NavMenu} className="Nav-menu" alt="Nav Bar" />
     </div>
    </div>
)
}

export default Navbar;