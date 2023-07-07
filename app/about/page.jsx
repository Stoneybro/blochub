import React from 'react'
import heroclip from '../../public/hero-clip.png'
import Image from 'next/image'


const About = () => {
  return (
    <div>
            <div className="relative">
            <Image src={heroclip} />
            <div className="lg:text-5xl text-xl top-4 left-5 text-white absolute lg:top-[75px] lg:left-[50px]">ABOUT US</div>
            </div>
        <div className="lg:w-[820px] px-4 mx-auto mt-16 flex flex-col gap-16">
            <div className="text-center text-lg font-medium ">At Evaton International Schools, we believe in the transformative power of education. With a rich legacy of academic excellence and a commitment to nurturing the potential of every child, we strive to create a learning environment that inspires and empowers students to achieve their dreams.</div>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-32 ">
                        <div className="">
                            <div className="text-pink text-2xl font-semibold mb-3">Our Mission</div>
                            <div className="">To provide a holistic and innovative educational experience that promotes intellectual growth, character development, and global citizenship, equipping students with the skills and values needed to thrive in the 21st century.</div>
                        </div>
                        <div className="">
                            <div className="text-pink text-2xl font-semibold mb-3">Our Vision</div>
                            <div className="">To be a leading institution of education that prepares students to excel in a rapidly changing world, fostering a love for learning, and nurturing well-rounded individuals who positively impact their communities.</div>
                        </div>
                </div>
                <div className="text-center text-lg font-medium ">Join us at Evaton International Schools, where education goes beyond boundaries and dreams become realities. Together, let's embark on an extraordinary journey of knowledge, growth, and transformation.</div>
        </div>
    </div>
  )
}

export default About 