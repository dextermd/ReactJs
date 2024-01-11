import React from 'react'
import './App.scss'

import Logo from '../src/assets/img/logo.png'
import Vn from '../src/assets/img/vn.jpg'

function App() {
  return (
    <div className="wrapper clear">
      <div className="container">
        <nav className='d-flex justify-between align-center p-40'>
          <div>
            <a href="#"><img src={Logo} alt="logo" /></a>
          </div>
          <a className='nav_link' href="">About</a>
          <a className='nav_link' href="">Contacts</a>
          <a className='nav_link' href="">News</a>
          <a className='nav_link' href="">Parteners</a>
        </nav>
      </div>

      <div className='promo_comics d-flex flex-column align-center'>
          <a href="#">
            <button>Go to</button>
          </a>
          
      </div>
    </div>
  )
}

export default App
