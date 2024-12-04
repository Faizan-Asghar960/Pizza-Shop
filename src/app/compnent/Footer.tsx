import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 p-4 text-center text-white">
    <p>Gullzar Colony Street/03 Oppasite Norani Hotle vita chorangi industrial Area Korangi Karachi</p>
    <p>Name: M.Faizan Asghar</p>
    <p>Phone: 0312-1281966</p>
    <p>Phone: 0331-3507447</p>
    
    {/* Social Media Links with Images */}
    <div className="flex justify-center gap-6 mt-4">
      {/* WhatsApp Link with Logo */}
      <a
        href="https://wa.me/923121281966" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600"
      >
        <img src="/whatsapp-logo1.jpg" alt="WhatsApp" className="w-8 h-8" /> WhatsApp{/* WhatsApp Logo */}
      </a>

      {/* Instagram Link with Logo */}
      <a
        href="https://www.instagram.com/fiazan540/" // Replace with your Instagram link
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-600"
      >
        <img src="/insta-logo.jpg" alt="Instagram" className="w-8 h-8" /> Instagram {/* Instagram Logo */}
      </a>

      {/* Facebook Link with Logo */}
      <a
        href="https://web.facebook.com/malik.fiazan.129/" // Replace with your Facebook link
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600"
      >
        <img src="/fb-logo.png" alt="Facebook" className="w-8 h-8" /> Facebook {/* Facebook Logo */}
      </a>

      {/* Gmail Link with Logo */}
      <a
        href="mailto:fiazanfiazankhan@gmail.com" // Your email link added here
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-600"
      >
        <img src="/emil1.jpg" alt="Gmail" className="w-8 h-8" /> Email{/* Gmail Logo */}
      </a>
    </div>
<br></br>
    <p>&copy; 2024 Pizza Shop. All rights reserved.</p>
  </footer>
);

export default Footer;
