import React, { useState } from 'react';
import NavBar from '../component/Navbar';

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
    <div className=" text-foreground p-8 bg-blue-800 ">
      <h1 className="text-3xl font-bold mt-24 text-center text-white">Contact Us</h1>
      <p className="mt-6 text-white">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {/* Contact Info Section */}
        <div className="space-y-4 ">
          <div className="flex items-center text-white ">
            <img aria-hidden="true" alt="address-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🏠" className="mr-2" />
            <div>
              <h2 className="font-semibold ">Address</h2>
              <p>
                4671 Sugar Camp Road,
                <br />
                Owatonna, Minnesota, 55060
              </p>
            </div>
          </div>
          <div className="flex items-center text-white">
            <img aria-hidden="true" alt="phone-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📞" className="mr-2" />
            <div>
              <h2 className="font-semibold">Phone</h2>
              <p>571-457-2321</p>
            </div>
          </div>
          <div className="flex items-center text-white">
            <img aria-hidden="true" alt="email-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✉️" className="mr-2" />
            <div>
              <h2 className="font-semibold">Email</h2>
              <p>ntamerrwael@mfano.ga</p>
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
    </div>
    </>
  );
};

export default ContactUs;
