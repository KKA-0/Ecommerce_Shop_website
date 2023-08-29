import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>    
    <footer>
        <div class="foot-section">
            <h1 class="underline">Quick Links</h1><br></br>
            <Link to='/'><h3 class="underline">Home</h3></Link><br></br>
            <Link to='/product'><h3 class="underline">Products</h3></Link><br></br>
            <h3 class="underline">Contact Us</h3><br></br>
        </div>
        <div class="foot-section">
            <h1 class="underline">Locate Us</h1>
            <h3 class="underline"><a href="https://goo.gl/maps/Tj5RHByNH4e2J1JM7">Agarwal Handloom 82, Mayur Market Thatipur Gwalior, India</a></h3>
            <h3 class="underline">+91-9827552747</h3><br/>
            <h3 class="underline">+91-9425716224</h3><br/>
            <h3 class="underline">Socials</h3>
        </div>
        <div class="copyright">
            <h3 class="underline">© Agarwal HandLoom - HANDLOOM & HANDICRAFT</h3>
        </div>
    </footer>
    </div>
  )
}

export default Footer