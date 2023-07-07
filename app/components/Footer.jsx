import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import {BiLogoFacebook} from 'react-icons/bi'
import {RxCaretUp} from 'react-icons/rx'
import evaton from '../../public/evaton2.png'
const Footer = () => {
  return (
    <>
    <div className='bg-secondary pb-16 text-white pt-12'>
            <div className="flex flex-col lg:flex-row lg:px-0 px-4 mx-auto lg:max-w-[1150px]">
              <div className="lg:w-full">
            <div className='mr-auto lg:flex justify-between lg:w-full '><Image src={evaton} width={250} height={150} />
            <div className="flex mt-4 lg:mt-0 justify-between flex-col lg:flex-row lg:w-[650px] gap-4 lg:gap-2 text-sm">
      <div>
      <Link href={'#'}>HOME </Link>
    </div>
    <div>
      <Link href={'#'}>ABOUT</Link>
    </div>
    <div  >
      <Link  href={'#'}>SCHOOLS<div></div></Link>
    </div>
    <div >
      <Link href={'#'}>ADMISSIONS<div></div></Link>
    </div>
    <div >
      <Link href={'#'}>ACADEMICS<div></div></Link>
    </div>

      <Link href={'#'}>CONTACT US<div></div></Link>

            </div>
            </div>
            <div className="text-sm mt-6">FOLLOW US</div>
            </div>

    
      </div>
      
        <div className="lg:max-w-[1150px] mx-auto flex justify-between items-center lg:px-0 px-4">
            <div className="flex gap-4">
            <div className="h-8 w-8 bg-white flex justify-center items-center rounded-full"> <BiLogoFacebook color='rgba(25, 41, 106, 1)' /></div>
            <div className="h-8 w-8 bg-white flex justify-center items-center rounded-full"><FaInstagram color='rgba(25, 41, 106, 1)' /> </div>
            <div className="h-8 w-8 bg-white flex justify-center items-center rounded-full"> <FaLinkedinIn color='rgba(25, 41, 106, 1)' /></div>
               
            </div>
            <div className="bg-pink rounded-full   p-1"><RxCaretUp color='white' size={40} /></div>
        </div>
    </div>
    <div className="bg-black py-4 text-center px-4 flex justify-center text-xs text-[#BCBCBC] font-semibold">Designed and Developed by NEXT STUDIO © Evaton International Schools 2023. All Rights Reserved</div>
    </>
  )
}

export default Footer