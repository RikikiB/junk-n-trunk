import React from 'react'
import BootstrapCarousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import './Gallery.scss'
import Junk from './junk1.jpeg'
import Junk1 from './junk2.jpeg'
// import Junk2 from './Junk3.jpg'
import Junk3 from './Junk4.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
function Gallery() {
  return (
    <div className='carousel'>
      <BootstrapCarousel>
        <BootstrapCarousel.Item interval={1000}>
          <img className='pics1' src={Junk} alt='First slide' />
          <BootstrapCarousel.Caption>
            <h3>Furniture</h3>
            <p>Removing unwanted furniture </p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item interval={500}>
          <img className='pics2' src={Junk1} alt='Second slide' />
          <BootstrapCarousel.Caption>
            <h3>Heavy Furniture</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          {/* <img className='pics3' src={Junk2} alt='Third slide' /> */}
          <BootstrapCarousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.
            </p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img className='pics4' src={Junk3} alt='Third slide' />
          <BootstrapCarousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.
            </p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
      <Link to='/home'></Link>
    </div>
  )
}
export default Gallery
