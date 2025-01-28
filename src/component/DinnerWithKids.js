import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import DinnerImage from '../assets/images/dinner with.jpg'; // Hero image
import Gallery1 from '../assets/Dinner with the kids/IMG_1347.jpg';
import Gallery2 from '../assets/Dinner with the kids/IMG_1348.jpg';
import Gallery3 from '../assets/Dinner with the kids/IMG_1521.jpg';
import Gallery4 from '../assets/Dinner with the kids/IMG_1471.jpg';
import Gallery5 from '../assets/Dinner with the kids/IMG_1502.jpg'; 
import Gallery6 from '../assets/Dinner with the kids/IMG_1519.jpg';
import Gallery7 from '../assets/Dinner with the kids/IMG_1582.jpg';
import Gallery8 from '../assets/Dinner with the kids/IMG_1592.jpg';
import Gallery9 from '../assets/Dinner with the kids/IMG_1598.jpg';
import Gallery10 from '../assets/Dinner with the kids/IMG_1471.jpg';
import Gallery11 from '../assets/Dinner with the kids/IMG_1448.jpg';
import Gallery12 from '../assets/Dinner with the kids/IMG_1504.jpg';
import Gallery13 from '../assets/Dinner with the kids/IMG_1518.jpg';
import Gallery14 from '../assets/Dinner with the kids/IMG_1516.jpg';
import Gallery15 from '../assets/Dinner with the kids/IMG_1603.jpg';
import Gallery16 from '../assets/Dinner with the kids/IMG_1614.jpg';
import Gallery17 from '../assets/Dinner with the kids/IMG_1607.jpg';
import Gallery18 from '../assets/Dinner with the kids/IMG_1515.jpg';
import Gallery19 from '../assets/Dinner with the kids/IMG_1524.jpg';
import Gallery20 from '../assets/Dinner with the kids/IMG_1576.jpg';

const DinnerWithKids = () => {
  const galleryImages = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8, Gallery9, Gallery10, Gallery11,Gallery12, Gallery13,Gallery14,Gallery15,Gallery16,Gallery17,Gallery18,Gallery19,Gallery20 ]; // Add more images as needed

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
