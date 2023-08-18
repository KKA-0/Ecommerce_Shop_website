import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'
const Nav = () => {
  return (
    <div>
        <nav>
        <Link to='/'><h1 class="nav-option underline">Agarwal Handloom</h1></Link>
            <div id="nav-option-div">
            <Link to='/'><h2 class="nav-option underline" id="removeOptions">HOME</h2></Link>
            <Link to='/product'><h2 class="nav-option underline" id="removeOptions">PRODUCTS</h2></Link>
            <div id="contact-us-option-div">
                <h2 class="nav-option" id="contact-us-option" onclick="location.href='./contact.html'">CONTACT US</h2>
            </div>
            </div>
            <div class="mobileNavbar" id="mobileNavbar" onclick="navbarForMobile()"></div>
        </nav>
        <div class="NavbarMobileOptions" id="NavbarMobileOptions">
            <h2 class="nav-option NavbarMobile" onclick="location.href='./'">HOME</h2>
            <h2 class="nav-option NavbarMobile" onclick="location.href='./products.html'">PRODUCTS</h2>
            <h2 class="nav-option NavbarMobile" id="contact-us-option" onclick="location.href='./contact.html'">CONTACT US</h2>
        </div>
    </div>
  )
}

export default Nav