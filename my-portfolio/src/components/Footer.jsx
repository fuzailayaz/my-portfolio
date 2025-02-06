import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://github.com/fuzailayaz" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/fuzailayaz" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:mdfuzailayaz@icloud.com" className="text-white">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="mb-0">&copy; 2023 [Muhammad Fuzail Ayaz]. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;