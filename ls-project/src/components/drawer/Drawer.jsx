import React from 'react'

import { IoMdClose } from "react-icons/io";

const Drawer = () => {
  return (
    <div className="clear">
        <div className="drawer">
            <h2 className='d-flex justify-between align-center cu-p'>Cart <IoMdClose /></h2>
            <div className="items">
                <div className="cartItem d-flex align-center justify-between mb-20">
                    <div style={{backgroundImage: `url(${Gwen})`}} className='cartItemImg'>
                        <div className="mr-20">
                            <p className="mb-5">Название комикса</p>
                            <b>60 $</b>
                        </div>
                        <IoMdClose/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Drawer