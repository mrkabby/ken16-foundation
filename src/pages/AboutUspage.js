import React from 'react';
import Navbar from '../component/Navbar';
import SustainableDevelopment from '../component/SustainableDevelopment';
import VisionSection from '../component/VsionSection';
import SustainabilityPlan from '../component/SustainablePlan';
import MeetTheTeam from '../component/MeetTheTeam';
import Footer from '../component/Footer';

const AboutUspage = () => {
  return (
    <>
    <Navbar/>
    <VisionSection />
    <SustainableDevelopment/>
    <SustainabilityPlan />
    <MeetTheTeam />
    <Footer />
    </>
   
  )
}

export default AboutUspage