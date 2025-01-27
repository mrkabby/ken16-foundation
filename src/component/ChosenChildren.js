import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import ChosenImage from '../assets/images/chosen children.jpg'; // Hero image
import Gallery4 from '../assets/images/IMG-20250125-WA0176.jpg';
import Gallery5 from '../assets/images/IMG-20250125-WA0177.jpg';
import Gallery6 from '../assets/images/IMG-20250125-WA0178.jpg';

const ChosenChildren = () => {
  const galleryImages = [Gallery4, Gallery5, Gallery6]; // Add more images as needed

  return (
    <>
      <NavBar />
      {/* Main Content */}
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section with Background Overlay */}
        <div className="relative text-center mb-12">
          <img
            src={ChosenImage}
            alt="Donation to the Less Privileged"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white">
            Donation to Chosen Children Center
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-12 px-6">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Teaching life skills and leadership to youth. Providing the essential resources needed to make a lasting
          impact in their lives.
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

export default ChosenChildren;
