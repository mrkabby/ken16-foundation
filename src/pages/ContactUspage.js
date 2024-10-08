import React, { useState } from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import MerchantImage from '../assets/images/momo it.jpeg';
import MomoImage from '../assets/images/MTN-Momo-e1584721116128.jpeg';
import EcobankImage from '../assets/images/ecobank.jpeg';

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
      <div className="text-foreground p-8 bg-blue-800">
        <h1 className="text-3xl font-bold mt-24 text-center text-white">Contact Us</h1>
        <p className="mt-6 text-white">
        "We're Here to Help!"

At the KEN16 Foundation, we believe in making a difference one step at a time. Whether you have questions about our programs, would like to get involved, or want to share your thoughts, we’d love to hear from you! Your support helps us bring hope, happiness, and opportunities to underprivileged children and communities.

Feel free to reach out, and let’s work together to make the world a better place!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* Contact Info Section */}
          <div className="space-y-4">
            <div className="flex items-center text-white">
              <img aria-hidden="true" alt="address-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🏠" className="mr-2" />
              <div>
                <h2 className="font-semibold">Address</h2>
                <p>
                  P.O.Box KN 2251, Kaneshie
                  <br />
                  GS-0181-8516, Nii Kpakpafio Street - New Gbawe
                </p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <img aria-hidden="true" alt="phone-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📞" className="mr-2" />
              <div>
                <h2 className="font-semibold">Phone</h2>
                <p>+233 543 158 680</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <img aria-hidden="true" alt="email-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✉️" className="mr-2" />
              <div>
                <h2 className="font-semibold">Email</h2>
                <p>Ken16foundation@gmail.com</p>
              </div>
            </div>

            {/* Three Images with Titles and Descriptions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <img
                  src= {MerchantImage} // Replace with actual image path
                  alt="Image 1"
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-white"> MTN MoMo Pay</h3>
                <p className="text-sm text-gray-300">Pay with MoMoPay *165*3#</p>
              </div>
              <div className="text-center">
                <img
                  src={MomoImage} // Replace with actual image path
                  alt="Image 2"
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-white">MTN Mobile Money</h3>
                <p className="text-sm text-gray-300">Just Momo it</p>
              </div>
              <div className="text-center">
                <img
                  src={EcobankImage} // Replace with actual image path
                  alt="Image 3"
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-white">Ecobank Bank Transfer</h3>
                <p className="text-sm text-gray-300">The Pan African Bank</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form id="contact-form" onSubmit={handleSubmit} className="bg-red-700 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center text-white">Send Message</h2>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border border-border rounded-lg p-2"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-border rounded-lg p-2"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Type your Message...
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-border rounded-lg p-2"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-800 text-white hover:bg-primary/80 px-4 py-2 rounded-lg w-full">
              Send
            </button>
          </form>
        </div>

        {/* Donation Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center text-white">Donate</h2>
          <p className="text-center text-gray-300 mb-4">Support us by donating via the following channels:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-sky-700 p-4 rounded-lg text-white">
              <h3 className="font-semibold text-lg">Merchant</h3>
              <p>Merchant Account: 456798</p>
            </div>
            <div className="bg-yellow-400 p-4 rounded-lg text-white">
              <h3 className="font-semibold text-lg">MoMo</h3>
              <p>MTN MoMo: 0538846951</p>
            </div>
            <div className=" bg-sky-900 p-4 rounded-lg text-white">
              <h3 className="font-semibold text-lg">Ecobank</h3>
              <p>Ecobank A/C: 1441004715078</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
