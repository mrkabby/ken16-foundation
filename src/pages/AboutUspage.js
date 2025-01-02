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
    <div className="text-center mt-24 px-4 ">
    <Navbar/>
    <VisionSection />
    <SustainableDevelopment/>
    <SustainabilityPlan />
    <MeetTheTeam />
    <Footer />
    
    </div>
    </>
   
  )
}

export default AboutUspage