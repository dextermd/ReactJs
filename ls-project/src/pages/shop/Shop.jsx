import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'

import SearchBlock from '../../components/search_block/SearchBlock';

const Shop = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="d-flex align-center justify-between mt-40">
                <h1>All You Need</h1>
                <SearchBlock/>
            </div>
        </div>
    </div>

  )
}

export default Shop