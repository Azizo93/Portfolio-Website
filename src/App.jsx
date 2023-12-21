import React from 'react'
import Sidenav from './components/Sidenav'
import Home from './components/Home'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='gradient'>
      <Sidenav />
      <Home />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App