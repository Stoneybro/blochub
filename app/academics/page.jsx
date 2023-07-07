import React from 'react'
import heroclip from '../../public/hero-clip.png'
import Image from 'next/image'

const Academics = () => {
  return (
    <div>
    <div className="relative">
    <Image src={heroclip} />
    <div className="lg:text-5xl text-xl top-4 left-5 text-white absolute lg:top-[75px] lg:left-[50px]">ACADEMICS</div>
    </div>
<div className="lg:w-[820px] px-4 mx-auto mt-24 flex flex-col gap-4">
    <div className=" text-lg font-medium text-justify lg:text-left ">
    At Evaton International Schools, academic excellence is at the core of our educational philosophy. We strive to provide a rigorous and comprehensive academic program that prepares students for success in the ever-evolving global landscape.
    </div>
    <div className=" text-lg font-medium text-justify lg:text-left">
    <div className="text-xl font-semibold">Curriculum:</div>
    Our curriculum is carefully designed to meet the highest standards of education while fostering a love for learning and a thirst for knowledge. We offer a diverse range of subjects, ensuring a well-rounded education that prepares students for their future endeavors. From the foundational years of nursery and primary school to the specialized subjects in secondary school, our curriculum is continuously reviewed and updated to align with the latest educational research and global best practices.
    <br/><br/>
At Evaton International Schools, we are committed to providing an exceptional academic experience that prepares students for success in higher education, careers, and life. Join us as we embark on a journey of academic excellence, personal growth, and limitless possibilities.
    </div>
 

      </div>
</div>
  )
}

export default Academics