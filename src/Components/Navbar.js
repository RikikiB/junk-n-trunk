import React from 'react'
import {
  NavLink,
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
} from 'react-router-dom'
import BootstrapNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.scss'

function Navbar() {
  return (
    <BootstrapNavbar>
      <BootstrapNavbar.Brand href='#home'></BootstrapNavbar.Brand>
      {/* <BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' /> */}
      {/* <BootstrapNavbar.Collapse id='basic-navbar-nav'> */}
      <Nav className='nav'>
        <NavLink Link to='/'>
          HOME
        </NavLink>

        <NavLink to='/gallery'>GALLERY</NavLink>

        <NavLink to='/about'>ABOUT</NavLink>

        <NavLink to='/contact'>CONTACT</NavLink>
      </Nav>
      {/* </BootstrapNavbar.Collapse> */}
    </BootstrapNavbar>
  )
}

export default Navbar
