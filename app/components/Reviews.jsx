'use-client'

import React from 'react'
import Image from 'next/image'
import quotes from '../../public/quotes.svg'
import { RxCaretLeft,RxCaretRight } from 'react-icons/rx'
import face from '../../public/face.svg'


// import { useState } from 'react'
// import { AnimatePresence } from 'framer-motion'

const Reviews = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const images=[]
  //   const handleNext = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex + 1 === images.length ? 0 : prevIndex + 1
  //     );
  //   };
  //   const handlePrevious = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
  //     );
  //   };
  //   const handleDotClick = (index) => {
  //     setCurrentIndex(index);
  //   };
  


  return (
    <div className='flex flex-col lg:w-[1000px] mx-auto justify-center items-center my-32 py-8 gap-6 relative'>
        <div className="absolute top-[4.7rem] md:top-[4rem] left-6 md:left-12 lg:left-24"><Image src={quotes} className='w-[70%]' /></div>
        <div className="text-2xl font-bold mb-2">What Our Parents Say</div>
        <div className="flex w-full items-center">
            <div className="bg-[#F1F1F1] rounded-[50%] p-1 hidden lg:block"><RxCaretLeft color='white' size={30} /></div>
            <div className="lg:w-[650px] text-center text-[#858484] mx-auto px-12 lg:px-0">
            Evaton Schools has been a game-changer for our child's education. The balanced curriculum and detailed training have given our child a solid educational foundation. <div className='hidden md:block'> The dedicated teachers and state-of-the-art facilities have created a nurturing environment for growth. We are impressed with the personalized attention our child receives and the focus on holistic development.</div> 
            </div>
            <div className="bg-[#F1F1F1] rounded-[50%]  p-1 hidden lg:block"><RxCaretRight  color='white' size={30} /></div>
        </div>
        <div className="flex items-center gap-2 ">
            <div className="">
                <Image src={face} />
            </div>
            <div className="font-medium">Mrs Oladele Bisola</div>
        </div>
        <div className="mx-auto"><svg width="100" height="10" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" fill="#ABABAB"/>
        <circle cx="35" cy="5" r="5" fill="#EEEEEE"/>
        <circle cx="65" cy="5" r="5" fill="#EEEEEE"/>
        <circle cx="95" cy="5" r="5" fill="#EEEEEE"/>
</svg>
</div>
    </div>
  )
}

export default Reviews