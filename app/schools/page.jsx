import React from 'react'
import heroclip from '../../public/hero-clip.png'
import Image from 'next/image'

const Schools = () => {
  return (
    <div>
    <div className="relative">
    <Image src={heroclip} />
    <div className="lg:text-5xl text-xl top-4 left-5 text-white absolute lg:top-[75px] lg:left-[50px]">SCHOOLS</div>
    </div>
<div className="lg:w-[820px] px-4 mx-auto mt-24 flex flex-col">
<div className="text-pink text-2xl font-semibold mb-3 text-center">Secondary School</div>
    <div className=" text-lg font-medium text-justify lg:text-left">
    We believe in preparing students for a successful future, equipping them with the knowledge, skills, and character traits necessary to excel in a rapidly changing world. Our dedicated team of educators is passionate about guiding students through this crucial phase of their academic journey.
    </div>
    <div className=" text-lg font-medium text-justify lg:text-left">
    <div className="text-xl font-semibold mt-2 ">Our Approach: </div>
    We offer a comprehensive and rigorous curriculum that prepares students for higher education and beyond. Our experienced teachers create a dynamic learning environment that fosters critical thinking, research skills, and a global perspective. We promote independent learning, problem-solving, and effective communication, empowering our students to become confident and responsible young adults.

    <div className="text-xl font-semibold mt-2">Our Programs:</div>
    Our secondary school programs provide a wide range of subject choices, allowing students to explore their interests and talents. We offer a supportive and challenging academic environment, supplemented by extracurricular activities, leadership opportunities, and community engagement. Our goal is to develop well-rounded individuals who are prepared for the challenges of university and the professional world.
    </div>
      </div>
</div>
  )
}

export default Schools