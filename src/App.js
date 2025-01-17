import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUspage";
import ContactUs from "./pages/ContactUspage";
import Programs from "./pages/Programspage";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      

        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      
    </Router>
  );
}

export default App;
