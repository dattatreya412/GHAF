'use client';
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["About", "Programs", "Donate", "Volunteer", "Contact Us"];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1E56A0] text-[#F6F6F6] shadow-lg z-50">
      <div className="flex justify-between items-center h-24 px-6 md:px-10">

        {/* Logo + Title (Clickable → Home) */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer">
          <Image
            src={logo}
            alt="GHAF Logo"
            width={55}
            height={55}
            className="object-contain"
          />
          <div className="flex items-end leading-none">
            <h3 className="text-3xl font-bold">G</h3>
            <h3 className="text-xl font-semibold">HAF</h3>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-lg font-medium">
            {navItems.map((item, idx) => {
              const href = "/" + item.toLowerCase().replace(/\s+/g, "-");
              return (
                <li key={idx}>
                  <Link
                    href={href}
                    className="hover:text-[#D6E4F0] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-1 w-7 bg-[#F6F6F6] rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-1 w-7 bg-[#F6F6F6] rounded transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-1 w-7 bg-[#F6F6F6] rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1E56A0] w-full overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-4 py-6 px-6 text-lg font-medium">
          {navItems.map((item, idx) => {
            const href = "/" + item.toLowerCase().replace(/\s+/g, "-");
            return (
              <li key={idx}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#D6E4F0] transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
