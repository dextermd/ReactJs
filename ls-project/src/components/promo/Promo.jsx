import React from 'react'
import { Link } from 'react-router-dom'

import './Promo.scss'
import Shop from '../../pages/shop/Shop'

export const Promo = () => {
  return (
    <div className='promo_comics d-flex flex-column align-center'>
        <Link to={"/shop"}>
          <button>Buy</button>
        </Link>
    </div>      
  )
}
