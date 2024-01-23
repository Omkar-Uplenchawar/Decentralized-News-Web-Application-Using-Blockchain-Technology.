

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi"; // Added a chat bubble icon for feedback
import FeedbackForm from "./feedback";
import logo from "../../images/images.png";

const Footer = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleFeedbackClick = () => {
    setShowFeedbackModal(true);
  };

  const closeFeedbackModal = () => {
    setShowFeedbackModal(false);
  };

  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer" onClick={handleFeedbackClick}>
            Feedback Or Suggestions
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={28} className="text-blue-500 hover:text-blue-700 cursor-pointer" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={28} className="text-blue-400 hover:text-blue-600 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} className="text-pink-500 hover:text-pink-700 cursor-pointer" />
          </a>
          <br />
          <br />
          <br />
          {/* Feedback Icon */}
          <FiMessageSquare
            size={28}
            className="text-green-500 hover:text-green-700 cursor-pointer"
            onClick={handleFeedbackClick}
          />
        </div>

        <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
        <p className="text-white text-sm text-center font-medium mt-2"></p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs"></p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>

      {showFeedbackModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <FeedbackForm onClose={closeFeedbackModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;

