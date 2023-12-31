import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'
const Nav = () => {

  const NavbarMobileOptions = () => {
    const navbar = document.getElementById("NavbarMobileOptions");
    const isHidden = navbar.style.display === "none";
    if (isHidden) {
      navbar.style.display = "block";
    }else{
      navbar.style.display = "none";
    }
  };

  return (
    <div>
        <nav>
        <Link to='/'><h1 class="nav-option underline">Agarwal Handloom</h1></Link>
            <div id="nav-option-div">
            <Link to='/'><h2 class="nav-option underline" id="removeOptions">HOME</h2></Link>
            <Link to='/product'><h2 class="nav-option underline" id="removeOptions">PRODUCTS</h2></Link>
            <div id="contact-us-option-div">
                <h2 class="nav-option" id="contact-us-option">CONTACT US</h2>
            </div>
            </div>
            <div class="mobileNavbar" onClick={ NavbarMobileOptions } id="mobileNavbar"></div>
        </nav>
        <div class="NavbarMobileOptions" style={{ display: "none" }} id="NavbarMobileOptions">
            <h2 class="nav-option NavbarMobile">HOME</h2>
            <h2 class="nav-option NavbarMobile">PRODUCTS</h2>
            <h2 class="nav-option NavbarMobile" id="contact-us-option">CONTACT US</h2>
        </div>
    </div>
  )
}

export default Nav