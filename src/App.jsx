import React from 'react'
import './app.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'

import Gallery from './Gallery/Gallery'
import FixButton from './components/fixedButton/Button'
import Banner from './banner/Banner'
import Contact from './Contact/Contact'
import About from './About/About'


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Banner/>
      <Gallery/>
      <FixButton/>
      <Contact/>
    </div>
  )
}

export default App