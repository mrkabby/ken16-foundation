import React from 'react'
import Navbar from '../component/Navbar'
import TargetGroups from '../component/TargetGroups'
import OurWork from '../component/OurWorks'
import LandingPage from '../component/HeroSection'
import Footer from '../component/Footer'

const Homepage = () => {
  return (
    <>
     <Navbar/>
     <LandingPage />
     <OurWork />
     <TargetGroups />
     <Footer />
    
    </>
   
  )
}

export default Homepage;