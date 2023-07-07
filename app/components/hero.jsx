import React from 'react'
import hero from '../../public/Hero.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='relative'>

    <Image src={hero} />
    <div className="hidden lg:block absolute top-[75.5%] font-semibold text-[35px] text-white px-20 py-4 bg-light border-b-4 border-pink">Empowering Minds, Shaping Futures</div>
  </div>
  )
}

export default Hero