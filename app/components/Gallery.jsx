import React from 'react'
import Gallery1 from '../../public/gallery1.png'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div>
        <div className=" lg:w-[1050px] mx-auto px-4 lg:pt-16">
        <div className="font-bold text-3xl text-center my-16">OUR GALLERY</div>
        <div className="lg:grid flex flex-wrap justify-center items-center grid-cols-3  grid-rows-2 gap-5 lg:gap-10">
            <div className=""><Image src={Gallery1} /></div>
            <div className=""><Image src={Gallery1} /></div>
            <div className=""><Image src={Gallery1} /></div>
            <div className=""><Image src={Gallery1} /></div>
            <div className=""><Image src={Gallery1} /></div>
            <div className=""><Image src={Gallery1} /></div>
        </div>
        </div>
    </div>
  )
}

export default Gallery