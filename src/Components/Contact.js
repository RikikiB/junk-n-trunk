import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeOpen,
  faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons'
import './Contact.scss'

// import { useState } from 'react'

function Contact() {
  return (
    <div className='contact-us'>
      <h1>CONTACT US TODAY!!!</h1>
      <ol>
        <ol>Junk in The Trunk</ol>
        <p>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          Junkinthetrunklasvegas@gmail.com
        </p>
        <FontAwesomeIcon icon={faPhoneSquare} />
        775-237-8471
      </ol>
    </div>
  )
}

export default Contact
