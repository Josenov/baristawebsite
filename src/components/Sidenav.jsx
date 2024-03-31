import React, { useState } from 'react'

import {AiOutlineMenu} from 'react-icons/ai'


const Sidenav = () => {
    const [burguerMenu, setBurguerMenu] = useState(false);

    const handleBurguerMenu = () => {
        setBurguerMenu(!burguerMenu);
        console.log("state changed")
    }
  return (
    <div>
        <AiOutlineMenu onClick={handleBurguerMenu} className='top-8 right-4 text-xl z-[99] md:hidden text-black fixed'/>
    </div>
  )
}

export default Sidenav