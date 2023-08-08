import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'

import {BiMenu} from 'react-icons/bi'
const Nav = () => {
  return (
    <div className=" text-white py-[22px] fixed w-full top-0 z-40 mix-blend-difference">
        <div className="w-[1110px] mx-auto flex items-center">
            <div className="flex-1"><Image src={logo} /></div>
            <div className="flex-1 flex justify-center"><BiMenu size={37} color='white' className=' mix-blend-darken' /></div>
            <div className=" flex-1 flex justify-end">
              <button
              
              
              className="border rounded-full px-6 py-[0.3rem] border-white text-white mix-blend-difference inline font-light">REGISTER</button></div>
        </div>
    </div>
  )
}

export default Nav