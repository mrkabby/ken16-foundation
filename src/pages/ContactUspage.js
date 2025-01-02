import React, { useState } from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';

const ContactUs = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, message } = formData;
    if (fullName && email && message) {
      alert(`Thank you, ${fullName}! Your message has been sent.`);
      // Clear the form
      setFormData({
        fullName: '',
        email: '',
        message: ''
      });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <>
      <NavBar />
      <div className="p-8  text">
        {/* Header Section */}
        <h1 className="text-4xl font-bold mt-24 text-center">Contact Us</h1>
        <p className="mt-6 text-center max-w-2xl mx-auto">
          "We're Here to Help!" Whether you have questions about our programs, want to get involved, 
          or share your thoughts, we’d love to hear from you! Your support helps us bring hope and 
          opportunities to underprivileged children and communities.
        </p>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {/* Contact Info Section */}
          <div className="space-y-6 bg-blue-700 p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                aria-hidden="true"
                alt="address-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=🏠"
                className="mr-4"
              />
              <div className=' text-white'>
                <h2 className="font-semibold text-lg text-white">Address</h2>
                <p>
                  P.O.Box KN 2251, Kaneshie<br />
                  GS-0181-8516, Nii Kpakpafio Street - New Gbawe
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                aria-hidden="true"
                alt="phone-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=📞"
                className="mr-4"
              />
              <div className=' text-white'>
                <h2 className="font-semibold text-lg">Phone</h2>
                <p>+233 543 158 680</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                aria-hidden="true"
                alt="email-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=✉️"
                className="mr-4"
              />
              <div className='text-white'>
                <h2 className="font-semibold text-lg">Email</h2>
                <p>Ken16foundation@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="bg-red-700 p-6 rounded-lg shadow-md text-white"
          >
            <h2 className="text-xl font-semibold mb-4 text-center">Send Us a Message</h2>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                rows="4"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-800 text-white hover:bg-blue-700 px-4 py-2 rounded-lg w-full font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
