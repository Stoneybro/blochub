
'use client'
import Nav from './Nav'
import Hero from './Hero'
import About from './components/About'
import Services from './components/Services'
import Slider from './components/Slider'
import Events from './components/Events'
import Resources from './components/Resources'
import Strips from './components/Strips'
import Cta from './components/Cta'
import Slider2 from './components/Slider2'
import Footer from './components/Footer'
import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import './locomotive.css'



export default function Home() {
  const containerref=useRef(null)
    useEffect(()=>{
        const scrollElement=new LocomotiveScroll({
          el:containerref.current,
          smooth:true,
          smartphone:{
            smooth:true
          }
          
        })
    },[])
  return (
    
    <div className='' data-scroll-container ref={containerref}>

      <Nav />
     <Hero />
     <About />
     <Services />
    <Slider />
    <Events />
    <Resources />
    <Strips />
    <Cta />
    <Slider2 />
    <Footer /> 

    </div>
  )
}
{/* 

 */}