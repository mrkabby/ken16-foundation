import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import DinnerImage from '../assets/images/dinner with.jpg'; // Hero image
import Gallery1 from '../assets/images/dine with.jpg';
import Gallery2 from '../assets/images/dinner with team.jpg';
import Gallery3 from '../assets/images/dinner with.jpg';

const DinnerWithKids = () => {
  const galleryImages = [Gallery1, Gallery2, Gallery3]; // Add more images as needed

  return (
    <>
      <NavBar />
      {/* Main Content */}
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section with Background Overlay */}
        <div className="relative text-center mb-12">
          <img
            src={DinnerImage}
            alt="Dinner with the Kids"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white">
              Dinner with the Kids
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-12 px-6">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Money is not the only commodity that is fun to give. We can give time, we can give our expertise,
              we can give our love, or simply give a smile. What does that cost? The point is, none of us can
              ever run out of something worthwhile to give.
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

export default DinnerWithKids;
