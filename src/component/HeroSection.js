import React from 'react';
import Logo from '../assets/images/ken16f.jpg';
import KidsImage from '../assets/images/donation.jpg';

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen p-8 lg:mt-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Image Section */}
        <div className="relative">
          {/* Main Hero Image */}
          <img
            src= {Logo} // Replace with the actual image path
            alt="Ken16 Foundation helping children"
            className="rounded-full object-cover w-full h-auto"
          />
          {/* Second Image Overlay (like in the bottom of the main image) */}
          <img
            src={KidsImage} // Replace with the actual image path
            alt="Ken16 Foundation group"
            className="absolute bottom-0 right-0 w-40 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Text Section */}
        <div>
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Introduction</h1>

          {/* Help to Give Hope Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-teal-500">Help To Give Hope.</h2>
            <p className="text-gray-700 mt-2">
              Welcome to the KEN16 Foundation - a beacon of hope, compassion, and transformative change.
              Established with a profound commitment to eradicating poverty in rural areas, providing educational
              resources, and empowering underprivileged children through education and sports, the KEN16 Foundation
              aims to illuminate the lives of those in need.
            </p>
          </div>

          {/* Help for Happiness Section */}
          <div>
            <h2 className="text-2xl font-bold text-teal-500">Help For Happiness.</h2>
            <p className="text-gray-700 mt-2">
              Our dedication to creating a positive impact stems from a genuine desire to foster togetherness, provide
              essential resources, and promote unity through various initiatives, embracing the power of education and
              recreation. This proposal unveils our vision, objectives, and strategies to achieve sustainable
              transformation in the lives of the less privileged. Join us on this journey as we strive to make the world
              a better place, one child at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
