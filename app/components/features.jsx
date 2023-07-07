 import React from 'react'
 import Book from '../../public/book.svg'
 import Building from '../../public/building.svg'
 import Building2 from '../../public/building2.svg'
 import Image from 'next/image'
 const Features = () => {
   return (
     <div className='bg-secondary lg:px-20 gap-8 lg:gap-0 py-[4.1rem] flex flex-col lg:flex-row text-white' >
        <div className="flex flex-col justify-center items-center lg:px-8">
            <div className=""><Image src={Book} /></div>
            <div className="">
                <h1 className='font-semibold text-center mt-4 mb-2 lg:my-4 text-[18px]'>BALANCED CURRICULUM</h1>
                <div className='text-center text-text-light px-3'>
Your chance to give your ward a solid educational background. Our curriculum and activities give them good exposure and detailed training.</div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:px-8 lg:border-l-[0.5px] border-r-[0.5px] py-2 border-white border-opacity-20">
            <div className=""><Image src={Building} /></div>
            <div className="">
                <h1 className='font-semibold  text-center mt-4 mb-2 lg:my-4 text-[18px]'>STATE OF THE ART FACILITIES</h1>
                <div className='text-center text-text-light px-3'>
Our facilities go beyond the major. It covers more areas of learning and creates a good environment to make schooling a great experience.</div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:px-8">
            <div className=""><Image src={Building2} /></div>
            <div className="">
                <h1 className='font-semibold text-center mt-4 mb-2 lg:my-4 text-[18px]'>UNIQUE EDUCATIONAL GOALS</h1>
                <div className='text-center text-text-light px-2'>
The educational goals set before our students are well integrated and blended into the learning process to ensure nothing is left out.</div>
            </div>
        </div>
     </div>
   )
 }
 
 export default Features