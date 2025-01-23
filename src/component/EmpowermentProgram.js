import React from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import EmpowermentImage from '../assets/images/Empower.jpg'; // Hero image
import Gallery13 from '../assets/images/Empower.jpg';
import Gallery14 from '../assets/images/Empower.jpg';
import Gallery15 from '../assets/images/Empower.jpg';

const EmpowermentProgram = () => {
  const galleryImages = [Gallery13, Gallery14, Gallery15]; // Add more images as needed

  return (
    <>
      <NavBar />
      {/* Main Content */}
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section with Background Overlay */}
        <div className="relative text-center mb-12">
          <img
            src={EmpowermentImage}
            alt="Empowerment Program"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white">
            Empowerment Program
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-12 px-6">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Empowering individuals and communities through skill development, mentorship, and access to opportunities for growth.
          </p>
        </div>


        {/* Gallery Section */}
        <div className="py-12 px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Event Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmpowermentProgram;
