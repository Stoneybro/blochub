"use Client"

import Hero from './components/hero'
import Nav from './components/nav'
import Features from './components/features'
import Contact from './components/Contact'
import Numbers from './components/numbers'
import Text from './components/Text'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import { Poppins,Open_Sans } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'] ,
  weight:['100','200','300','400','500','600','700','800','900']
})
const openSans = Open_Sans({ 
  subsets: ['latin'] ,
  weight:['300','400','500','600','700','800']
})

export default function Home() {

  return (
    
    <div>
      <Hero />
      <Text />
      <Features />
      <Numbers />
    </div>
  )
}
{/* 

 */}