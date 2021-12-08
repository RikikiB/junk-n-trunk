import React from 'react'
import Logo from './logo.jpeg'
// import Junk1 from './junk1.jpeg'
// import Junk5 from './junk5.jpeg'
// import Junk3 from './junk3.jpeg'
// import Junk6 from './junk6.jpeg'
// import Junk7 from './junk7.jpeg'
// import Junk8 from './junk8.jpeg'
// import Junk9 from './junk9.jpeg'
// import Junk11 from './Junk11.jpg'
// import Navbar from './Navbar.js'
// import Gallery from './Gallery.js'
// import About from './About.js'
// import Contact from './Contact.js'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from 'react-router-dom'
// import { Junk } from './public/Junk.jpg'
import './Home.scss'

function Home() {
  return (
    <>
      <>
        <div className='logo' img src={Logo}></div>
        <div className='animation'>
          Junk in The Trunk Junk Removal
        </div>
        <div>
          <h1>WE'LL REMOVE ALL OF YOUR JUNK!!!</h1>
        </div>
        <div className='wrapper'>
          <div className='carousel'>
            <div className='face'>
              <span>JUNK</span>
            </div>
            <div className='face'>
              <span>FURNITURE</span>
            </div>
            <div className='face'>
              <span>CAR PARTS</span>
            </div>
            <div className='face'>
              <span>BBQs</span>
            </div>
            <div className='face'>
              <span>APPLIANCES</span>
            </div>
            <div className='face'>
              <span>CONSTRUCTION</span>
            </div>
            <div className='face'>
              <span>YARD DEBRIS</span>
            </div>

            <div className='face'>
              <span>HOUSEHOLD JUNK</span>
            </div>
            <div className='face'>
              <span>EVERYTHING!!!</span>
            </div>
          </div>
        </div>
      </>
    </>
  )
}
export default Home
