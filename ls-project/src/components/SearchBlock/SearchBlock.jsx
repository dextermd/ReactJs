import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import './SearchBlock.scss';

const SearchBlock = () => {
    return (
        <div className="search__block d-flex align-center">
            <FaMagnifyingGlass />
            <input type="text" placeholder='Search..' />
        </div>
    )
}

export default SearchBlock