"use Client"
import localFont from 'next/font/local'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
export default function Home() {

  return (
    
    <div>
     <Nav />
     <Hero />
     <About />
     <Services />
    </div>
  )
}
{/* 

 */}