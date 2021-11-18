import './App.css'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Gallery from './Gallery'
import Footer from './Footer'
import {
  // Link,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar className='navbar' />
      <Switch>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
