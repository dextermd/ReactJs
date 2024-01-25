import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import './SearchBlock.scss'

const SearchBlock = () => {
  return (
    <div>
        <div className="search_bloc d-flex align-center">
            <FaMagnifyingGlass />
            <input type="text" placeholder='Search...' />
        </div>
    </div>
  )
}

export default SearchBlock