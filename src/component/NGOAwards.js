import React from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import Award from '../assets/images/Award.jpg'; // Hero image
import Gallery16 from '../assets/images/gallery16.jpg';
import Gallery17 from '../assets/images/gallery17.jpg';
import Gallery18 from '../assets/images/gallery18.jpg';

const NGOAward = () => {
  const galleryImages = [Gallery16, Gallery17, Gallery18]; // Add more images as needed

  return (
    <>
      <NavBar />
      <div className="bg-blue-900 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-blue-800 text-white py-20 px-8">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4">NGO of the Year (Nominee)</h1>
            <p className="text-lg max-w-2xl">
              A recognition of our continuous effort to uplift underprivileged communities and promote education, health, and empowerment.
            </p>
          </div>
          <img
            src={Award}
            alt="NGO Award"
            className="absolute top-0 right-0 w-full h-96 object-cover opacity-20"
          />
        </div>

        {/* Gallery Section */}
        <div className="py-12 px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Event Gallery</h2>
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

export default NGOAward;
