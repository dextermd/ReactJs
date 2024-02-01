import React from 'react'

import SearchBlock from '../../components/search_block/SearchBlock';
import ShopCard from '../../components/shop_card/ShopCard';

const Shop = () => {
  return (
    <div>
        <div className="container">
            <div className="d-flex align-center justify-between mt-40">
                <h1>All You Need</h1>
                <SearchBlock/>
            </div>
            <ShopCard/>
        </div>
    </div>

  )
}

export default Shop