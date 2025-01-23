import React from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import DeafImage from '../assets/images/school for deaf.jpg'; // Hero image
import Gallery10 from '../assets/images/ken and teacher.jpg';
import Gallery11 from '../assets/images/group pic.jpg';
import Gallery12 from '../assets/images/both mnf.jpg';

const SchoolForDeaf = () => {
  const galleryImages = [Gallery10, Gallery11, Gallery12]; // Add more images as needed

  return (
    <>
      <NavBar />
      {/* Main Content */}
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section with Background Overlay */}
        <div className="relative text-center mb-12">
          <img
            src={DeafImage}
            alt="Donation to the School for the Deaf"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white">
            Donation to the School for the Deaf
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-12 px-6">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Empowering the hearing-impaired community by providing essential resources, fostering education, and promoting inclusion.
          </p>
        </div>


        {/* Gallery Section */}
        <div className="py-12 px-8">
          <h2 className="text-3xl font-bold  text-center mb-8">Event Gallery</h2>
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

export default SchoolForDeaf;
