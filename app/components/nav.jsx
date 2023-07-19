'use client'
import React,{useState} from 'react'
import Evaton from '../../public/evaton.svg'
import {RxCaretDown,RxCaretRight} from 'react-icons/rx'
import Link from 'next/link'
import { BiMenu,BiX } from 'react-icons/bi'
import Image from 'next/image'
import { usePathname } from 'next/navigation'



const Nav = () => {
  const router=usePathname()
  const [school,setSchool]=useState(false)
  const [nav,setNav]=useState(false)
  const [toggle,setToggle]=useState(false)
  const [mobilenav,setMobilenav]=useState({school:true,admission:true})



  return (
    <nav className=' sticky top-0 w-full bg-primary  h-[82px] z-10 pb-4  '>

      <div className="flex  items-center mx-auto max-w-[1200px] relative">
      <div className='mr-auto '><Link href={'/'} className='inline'><Image src={Evaton}  /></Link></div>
      <div className="lg:hidden flex mr-4 ml-1 z-10" onClick={()=>setToggle(!toggle)}>{toggle?<BiX size={45} color='rgba(25, 41, 106, 1)' />:<BiMenu size={45} color='rgba(25, 41, 106, 1)' />}</div>
     {toggle&& <div className="bg-white h-screen w-screen fixed overflow-hidden top-0  left-0  flex items-start justify-center">
     <div className="text-secondary flex flex-col justify-center items-center gap-8 mt-20 text-xl font-semibold">
        <Link href={'#'} className="text-secondary">HOME</Link>
        <Link href={'#'} className="">ABOUT </Link>
        <button onClick={()=>setMobilenav({...mobilenav,school:!mobilenav.school})} className={`flex items-center  ${!mobilenav.school && 'text-pink'}`}>SCHOOLS<RxCaretDown size={32} /></button>
        <div className={`${mobilenav.school&&'hidden'} flex flex-col gap-8 items-center`}>
         <Link href={'#'} className="">Nursery and Primary School</Link>
         <Link href={'#'} className="">Secondary School</Link>
        </div>
        <button onClick={()=>setMobilenav({...mobilenav,admission:!mobilenav.admission})} className="flex items-center"><Link href={'#'} className={`flex items-center  ${!mobilenav.admission && 'text-pink'}`}>ADMISSIONS <RxCaretDown size={32} /></Link></button>
        <div className={`${mobilenav.admission&&'hidden'} flex flex-col gap-8 items-center`}>
         <Link href={'#'} className="">Admission Procedure</Link>
         <Link href={'#'} className="">Boarding</Link>
         <Link href={'#'} className="">School Fees</Link>
         <Link href={'#'} className="">Scholarships</Link>
        </div>
        <Link href={'#'} className="">ACADEMICS </Link>
        <Link href={'#'} className="">CONTACT US</Link>
      </div>
      </div>}
      <div className=" hidden lg:flex justify-between items-center gap-8  h-[80px]   mb-2 font-bold text-sm">
      <div >

      <Link href={'/'} className={`hover:text-pink hover:border-b-2 border-pink pb-[3px] ${router==='/'?'text-pink':''} `}>HOME </Link>

    </div>
    <div>
      <Link href={'/about'}  className={`hover:text-pink hover:border-b-2 border-pink pb-[3px] ${router==='/about'?'text-pink':''} `}>ABOUT</Link>
    </div>
    <div className='relative h-full flex justify-center items-center ' onMouseOver={()=>setNav(true)} onMouseLeave={()=>setNav(false)} >
      <Link className='hover:text-pink flex gap-[0.5px] items-center'  href={'#'}>SCHOOLS<div><RxCaretDown size={22} /></div></Link>
      {nav&&<div className="flex bg-white border-t-2 border-pink  flex-col gap-5 px-6 w-60 py-6 absolute top-[78px] text-[#696868da] left-0 z-20">
        <div className="hover:text-pink "><Link href={'/schools'}>Nursery & Primary School</Link></div>
        <div className="hover:text-pink "><Link href={'/schools'}>Secondary School</Link></div>
      </div>}
    </div>
    <div className='relative h-full flex justify-center items-center ' onMouseOver={()=>setSchool(true)} onMouseLeave={()=>setSchool(false)} >
      <Link className='hover:text-pink flex gap-[0.5px] items-center' href={'#'} >ADMISSIONS<div><RxCaretDown size={22} /></div></Link>
      {school&&<div className="bg-white border-t-2 border-pink flex flex-col gap-5 px-6 w-52 py-6 absolute top-[78px] text-[#696868da] left-0 z-20">
        <div className="hover:text-pink "><Link href={'#'}>Admission Procedure</Link></div>
        <div className="hover:text-pink "><Link href={'#'}>Boarding</Link></div>
        <div className="hover:text-pink "><Link href={'#'}>School Fees</Link></div>
        <div className="hover:text-pink "><Link href={'#'}>Scholarships</Link></div>
      </div>}
    </div>
    <div >
      <Link href={'/academics'} className={`hover:text-pink hover:border-b-2 border-pink pb-[3px] ${router==='/academics'?'text-pink':''} `}>ACADEMICS<div></div></Link>
    </div>
    <button className=' bg-secondary hover:bg-pink text-primary px-5 py-3 xl:mr-0 mr-4 min-w-[158px]' >
      <Link className='flex gap-[0.5px] items-center whitespace-nowrap' href={'#'}>CONTACT US<div><RxCaretRight color='white' size={22}/></div></Link>
    </button>
      </div>
    
      </div>

      
      </nav>
      
      
  )
}

export default Nav