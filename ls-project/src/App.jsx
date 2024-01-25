// Libs
import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// Styles
import './App.scss'

import { Home } from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/shop/Shop'

const  App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/shop" element={ <Shop /> } />
      </Routes>
    </Router>
  )
}

export default App
