"use client";
import React from "react";
import Image from "next/image";
import image1 from "../public/main_page_01.jpeg";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  return (
    <section className="w-screen min-h-screen flex items-center justify-center px-6 py-12 bg-[#F6F6F6]">
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">

        {/* Left Content */}
        <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#163172]">
            Serving humanity and spreading hope
          </h1>

          <p className="mt-4 text-lg text-[#1E56A0]">
            Join us in making a difference by contributing to our cause. Your support
            helps us reach more people in need and create a better world for everyone.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            {/* NEW: Go to Donate Page */}
            <button
              onClick={() => router.push("/donate")}
              className="bg-[#1E56A0] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#163172] transition"
            >
              Donate Now
            </button>

            {/* Scroll for Volunteer or other page later */}
            <button
              onClick={() => router.push("/volunteer")}
              className="bg-white border border-[#1E56A0] text-[#1E56A0] px-6 py-3 rounded-lg shadow-md hover:bg-[#D6E4F0] transition"
            >
              Join as Volunteer
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={image1}
            alt="Landing Page Image"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
