import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import ImageCarousel from './components/ImageCarousel'
import Home from './components/Home'


const App = () => {
  return (
  <>
    <div className="App bg-black h-full text-white"
     >
       <Home/>
      <Navbar />
      <Hero />
      <ImageCarousel/>
      <InfoSection />
      <Testimonials />
      <Footer />
    </div>
  </>
  )
}

export default App