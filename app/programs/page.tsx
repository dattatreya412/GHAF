import React from "react";
import image1 from '../../public/freebooks.jpeg';
import image2 from '../../public/foodforblind.jpeg';
import image3 from '../../public/donateingdress.jpeg';
import Image from "next/image";

const page = () => {
  const programs = [
    {
      image: image1,
      title: "Donate Free Books to Children",
      description:
        "Support a child's education by providing free books that inspire learning and creativity. Many children lack access to basic educational materials, and your donation can open doors to knowledge, confidence, and a brighter future.",
      extra:
        "Your contribution helps build strong foundations in reading, comprehension, and imagination. By donating books, you empower young minds to dream bigger, think smarter, and make better choices for their future.",
    },
    {
      image: image3,
      title: "Donate Groceries to Elderly People",
      description:
        "Help elderly individuals who struggle to meet their daily needs by donating essential groceries. Your support ensures they receive nutritious food, dignity, and care during their most vulnerable years.",
      extra:
        "Many elderly people live alone with limited financial support. By contributing groceries, you provide warmth, comfort, and assurance that they are not forgotten. A small gesture can fill hearts with hope and gratitude.",
    },
    {
      image: image2,
      title: "Support the Blind with Essential Aid",
      description:
        "Extend your kindness to visually impaired individuals by providing essential support that improves their daily lives.",
      extra:
        "Your contribution can help them access mobility tools, daily use items, assistive technology, and emotional support. These resources foster independence, confidence, and dignity — making the world more accessible for them.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="bg-linear-to-r from-green-700 to-green-500 py-16 px-6 text-center text-white">
        <h1 className="text-4xl font-bold">Our Programs</h1>
        <p className="mt-2 text-lg">Social Responsibility • Care • Humanity</p>
      </div>

      {/* Programs Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {programs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-green-700">
                {item.title}
              </h2>

              <p className="mt-4 text-gray-700">{item.description}</p>

              <p className="mt-3 text-gray-600">{item.extra}</p>

            </div>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-6 text-center bg-green-100">
        <h2 className="text-3xl font-bold text-green-800">
          Your Support Can Change Lives
        </h2>
        <p className="mt-3 text-lg text-gray-700 max-w-3xl mx-auto">
          Every contribution helps empower children, elderly, and the visually
          impaired. Together, we can create a brighter, kinder, and more
          supportive world for everyone.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition">
          Donate Today
        </button>
      </section>
    </div>
  );
};

export default page;
