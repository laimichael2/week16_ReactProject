import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from "react-bootstrap/esm/Container";

function naviBar() {
    
      return (
    <div className='navbar'>
      <div className='navbar-logo'>
        Michael's Coffeeshop
      </div>
      <ul className='navbar-menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/Newsletter">Newsletter</Link></li>

      </ul>

    </div>
    )
  }
  export default naviBar