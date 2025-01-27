import React from "react";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import EmpowermentImage from "../assets/images/Empower.jpg"; // Hero image
import Gallery13 from "../assets/Set 2/IMG_0028.jpg";
import Gallery14 from "../assets/Set 2/IMG_0058.jpg";
import Gallery15 from "../assets/Set 2/IMG_0114.jpg";
import Gallery16 from "../assets/Set 2/IMG_0126.jpg";
import Gallery17 from "../assets/Set 2/IMG_0148.jpg";
import Gallery18 from "../assets/Set 2/IMG_0154.jpg";
import Gallery19 from "../assets/Set 2/IMG_0180.jpg";
import Gallery20 from "../assets/Set 2/IMG_0188.jpg";
import Gallery21 from "../assets/Set 2/IMG_0201.jpg";
import Gallery22 from "../assets/Set 2/IMG_0203.jpg";
import Gallery23 from "../assets/Set 2/IMG_0232.jpg";
import Gallery24 from "../assets/Set 2/IMG_0241.jpg";
import Gallery25 from "../assets/Set 2/IMG_0244.jpg";
import Gallery26 from "../assets/Set 2/IMG_0254.jpg";
import Gallery27 from "../assets/Set 2/IMG_0257.jpg";
import Gallery28 from "../assets/Set 2/IMG_0284.jpg";
import Gallery29 from "../assets/Set 2/IMG_0291.jpg";
import Gallery30 from "../assets/Set 2/IMG_0294.jpg";

const EmpowermentProgram = () => {
  const galleryImages = [
    Gallery13,
    Gallery14,
    Gallery15,
    Gallery16,
    Gallery17,
    Gallery18,
    Gallery19,
    Gallery20,
    Gallery21,
    Gallery22,
    Gallery23,
    Gallery24,
    Gallery25,
    Gallery26,
    Gallery27,
    Gallery28,
    Gallery29,
    Gallery30,
  ]; // Add more images as needed

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
            Empowering individuals and communities through skill development,
            mentorship, and access to opportunities for growth.
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
