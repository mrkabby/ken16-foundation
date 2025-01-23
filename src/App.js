import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUspage";
import ContactUs from "./pages/ContactUspage";
import Programs from "./pages/Programspage";
import Donate from "./pages/Donate";
import DinnerWithKids from './component/DinnerWithKids';
import ChosenChildren from './component/ChosenChildren';
import LessPrivileged from './component/LessPrivileged';
import SchoolForDeaf from './component/SchoolForDeaf';
import EmpowermentProgram from './component/EmpowermentProgram';
function App() {
  return (
    <Router>
      

        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/dinner-with-kids" element={<DinnerWithKids />} />
        <Route path="/chosen-children" element={<ChosenChildren />} />
        <Route path="/less-privileged" element={<LessPrivileged />} />
        <Route path="/school-for-deaf" element={<SchoolForDeaf />} />
        <Route path="/empowerment-program" element={<EmpowermentProgram />} />
        </Routes>
      
    </Router>
  );
}

export default App;
