// libs
import React from 'react'
import { Link } from 'react-router-dom';
// styles
import './MainBackground.scss';


const MainBackground = () => {
    return (
        <div className="cover d-flex flex-column align-center justify-end">
            <Link to={"/shop"}>
                <button>Buy comics</button>
            </Link>
        </div>
    )
}

export default MainBackground