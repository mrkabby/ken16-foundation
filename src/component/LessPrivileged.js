import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import LessPrivImage from "../assets/images/less priv.jpg"; // Hero background image
import Gallery7 from "../assets/images/sustain.jpg";
import Gallery8 from "../assets/images/donation.jpg";
import Gallery9 from "../assets/images/serve.jpg";

const LessPrivileged = () => {
  const galleryImages = [Gallery7, Gallery8, Gallery9]; // Add more images as needed

  return (
    <>
      <NavBar />
      {/* Main Content */}
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section with Background Overlay */}
        <div className="relative text-center mb-12">
          <img
            src={LessPrivImage}
            alt="Donation to the Less Privileged"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white">
              Donation to the Less Privileged
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-12 px-6">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Supporting the less privileged by providing resources, love, and
            hope for a better future. Together, we can make a difference. Our
            efforts focus on providing essential resources, fostering a sense of
            community, and inspiring hope. Through our initiatives, we aim to
            create meaningful change for the less privileged. Join us in making
            a difference by contributing to this noble cause.
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

export default LessPrivileged;
