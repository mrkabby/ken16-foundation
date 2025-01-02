import React from 'react';
import MerchantImage from '../assets/images/momo it.jpeg';
import MomoImage from '../assets/images/MTN-Momo-e1584721116128.jpeg';
import EcobankImage from '../assets/images/ecobank.jpeg';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';

const Donate = () => {
  return (
    <>
    <NavBar />
      {/* Header Section */}
      <div className="text-center mt-24 px-4 ">
        <h1 className="text-4xl font-bold text mb-4">Donate to Us</h1>
        <p className="text-lg  max-w-2xl mx-auto">
          Your contribution helps us continue our mission. Whether through Mobile Money, Bank Transfers, 
          or Merchant Payments, every donation makes a difference. Thank you for your support!
        </p>
      </div>

      {/* Donation Channels with Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 px-4">
        <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src={MerchantImage}
            alt="MTN MoMo Pay"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-white">MTN MoMo Pay</h3>
          <p className="text-sm text-gray-300">Pay with MoMoPay *165*3#</p>
        </div>

        <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src={MomoImage}
            alt="MTN Mobile Money"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-white">MTN Mobile Money</h3>
          <p className="text-sm text-gray-300">Just Momo it</p>
        </div>

        <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src={EcobankImage}
            alt="Ecobank Bank Transfer"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <h3 className="text-lg font-semibold text-white">Ecobank Bank Transfer</h3>
          <p className="text-sm text-gray-300">The Pan African Bank</p>
        </div>
      </div>

      {/* Donation Details */}
      <div className="mt-12 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Donation Details</h2>
        <p className="text-center text mb-6">
          Choose your preferred payment method below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-sky-700 p-6 rounded-lg shadow-md text-white">
            <h3 className="font-semibold text-xl mb-2">Merchant</h3>
            <p className="text-md">Merchant Account: <strong>456798</strong></p>
          </div>

          <div className="bg-yellow-500 p-6 rounded-lg shadow-md text-white">
            <h3 className="font-semibold text-xl mb-2">MoMo</h3>
            <p className="text-md">MTN MoMo: <strong>0538846951</strong></p>
          </div>

          <div className="bg-sky-900 p-6 rounded-lg shadow-md text-white">
            <h3 className="font-semibold text-xl mb-2">Ecobank</h3>
            <p className="text-md">Ecobank A/C: <strong>1441004715078</strong></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
