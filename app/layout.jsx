import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/nav'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Gallery />
        <Reviews />
        <Contact />
        <Footer />

        </body>
    </html>
  )
}
