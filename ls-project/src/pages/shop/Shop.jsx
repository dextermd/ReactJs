import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'

import { FaMagnifyingGlass } from "react-icons/fa6";

const Shop = () => {
  return (
    <div>
        <Navbar/>
        <ul className="d-flex align-center justify-between mt-40">
            <h1>All You Need</h1>
            <div className="search_bloc d-flex align-center">
                <FaMagnifyingGlass />
                <input type="text" placeholder='Search...' />
            </div>
        </ul>
    </div>

  )
}

export default Shop