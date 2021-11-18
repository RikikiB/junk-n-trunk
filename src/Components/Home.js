import React from 'react'
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
      <div className='animation'>Junk in The Trunk Junk Removal</div>
      <div>
        <span>WE'LL REMOVE ALL OF YOUR JUNK!!!</span>
      </div>
      <div className='container'>
        <div className='text'>
          <ol>-Junk</ol>
          <ol>-Furniture</ol>
          <ol>-Car Parts</ol>
          <ol>-BBQ's</ol>
          <ol>-Construction</ol>
          <ol>-Yard Debris</ol>
          <ol>-Appliances</ol>
          <ol>-Household Junk</ol>
          <ol>EVERYTHING!!!</ol>
        </div>
        <div className='p'>
          <p>Fast ,Friendly and Free Estimates</p>
        </div>
      </div>
    </>
  )
}
export default Home
