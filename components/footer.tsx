'use client';
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaTwitter />, url: 'https://twitter.com/', label: 'Twitter' },
  { icon: <FaFacebook />, url: 'https://facebook.com/', label: 'Facebook' },
  { icon: <FaInstagram />, url: 'https://instagram.com/', label: 'Instagram' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <FaGithub />, url: 'https://github.com/', label: 'GitHub' },
];

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F6] px-6 py-10 flex flex-col items-center border-t border-[#D6E4F0]">
      
      {/* Social Icons */}
      <div className="flex gap-5 mb-6">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D6E4F0] text-[#163172] text-xl shadow-md transition-all duration-300 hover:bg-[#1E56A0] hover:text-white hover:shadow-lg"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-[#163172] text-sm text-center">
        © {new Date().getFullYear()} GHAF — Serving Humanity, Transforming Lives.
      </p>
    </footer>
  );
};

export default Footer;
