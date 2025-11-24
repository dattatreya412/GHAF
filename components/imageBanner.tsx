import React from "react";
import Image from "next/image";

type ImageBannerProps = {
  isLeft: boolean;
  program: {
    title: string;
    description: string;
    image: string;
  };
};

const ImageBanner: React.FC<ImageBannerProps> = ({ isLeft, program }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-xl shadow-lg bg-[#F6F6F6] border border-[#D6E4F0] hover:shadow-2xl transition-all ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Text */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-[#163172] mb-4">
          {program.title}
        </h3>
        <p className="text-[#1E56A0] leading-relaxed">
          {program.description}
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="h-60 w-60 rounded-xl  flex items-center justify-center text-white text-lg font-semibold shadow-md transition-colors">
        <Image src={program.image} alt={program.title} className="rounded-xl" />
      </div>
    </div>
  );
};

export default ImageBanner;
