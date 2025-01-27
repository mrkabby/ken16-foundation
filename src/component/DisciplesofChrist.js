import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import Gallery from '../assets/images/IMG-20250125-WA0008.jpg'; // Hero image
import Gallery16 from '../assets/images/IMG-20250125-WA0010.jpg';
import Gallery17 from '../assets/images/IMG-20250125-WA0013.jpg';
import Gallery18 from '../assets/images/IMG-20250125-WA0051.jpg';

const DisciplesofChrist = () => {
  const galleryImages = [Gallery, Gallery16, Gallery17, Gallery18]; // Add more images as needed

  return (
    <>
      
      <NavBar />
      {/* Main Content */}
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section with Background Overlay */}
        <div className="relative text-center mb-12">
          <img
            src={Gallery}
            alt="Donation of musical instruments"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white">
              Donation to Disciples of Christ
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-12 px-6">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            On April 21, 2024, the Ken16 Foundation made a generous donation of musical instruments to the Disciples of Christ church. This donation aims to support the church's music ministry and enhance their worship services. The event was marked by a joyous celebration, with members of the church expressing their gratitude and excitement for the new instruments.
          </p>
        </div>

        {/* Event Gallery Section */}
        <div className="py-12 px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Event Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Gallery  ${index + 1}`}
                  className="w-full h-56 object-cover"
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

export default DisciplesofChrist;
