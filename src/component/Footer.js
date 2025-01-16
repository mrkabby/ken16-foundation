import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-4">
          <a
            href="https://www.tiktok.com/@ken16foundation?_t=8qN51hSJeek&_r=1"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-black hover:text-red-400"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://www.instagram.com/@Ken16foundation"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-black hover:text-red-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552154004133"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-black hover:text-red-400"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://wa.me/0260305201"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-black hover:text-red-400"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/ken16-foundation/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-black hover:text-red-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Footer Text */}
        <p>&copy; 2025 Ken16 Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
