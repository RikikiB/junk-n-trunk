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
// import Homeicon from 'home.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faInfoCircle,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <BootstrapNavbar>
      <BootstrapNavbar.Brand href='#home'></BootstrapNavbar.Brand>
      {/* <BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' /> */}
      {/* <BootstrapNavbar.Collapse id='basic-navbar-nav'> */}
      <Nav className='nav'>
        <NavLink Link to='/'>
          <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
          HOME
        </NavLink>

        <NavLink to='/about'>
          <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>ABOUT
        </NavLink>

        <NavLink to='/contact'>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          CONTACT
        </NavLink>
      </Nav>
      {/* </BootstrapNavbar.Collapse> */}
    </BootstrapNavbar>
  )
}

export default Navbar
