import React from 'react'

import { Navbar } from '../../components/navbar/Navbar'
import { Promo } from '../../components/promo/Promo'

export const Home = () => {
  return (
    <div className="wrapper clear">
      <Navbar />
      <Promo />
  </div>
  )
}