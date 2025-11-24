import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="bg-linear-to-r from-green-700 to-green-500 py-16 px-6 text-center text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">
          Global Humanitarian Aid Foundation (GHAF)
        </p>
      </div>

      {/* Who We Are */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Who We Are</h2>
        <p className="text-lg leading-relaxed mb-4">
          Global Humanitarian Aid Foundation (GHAF) is one of the best
          registered charities in Australia. We are an independent organisation
          providing frontline support to young people and individuals facing
          disadvantage, unemployment, homelessness, poverty, sickness,
          discrimination, distress, and those impacted by natural disasters.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our highly skilled multi-disciplinary team provides judgement-free
          services with a strong focus on respect, client-centred care, and harm
          prevention. We aim to help every person lead a longer and healthier
          life, gain meaningful employment, and feel a sense of belonging,
          safety, and security through a holistic model of care.
        </p>
        <p className="text-lg leading-relaxed">
          As one of the best registered charities, we work with young people,
          orphaned children, newly arrived refugees, emotionally or physically
          distressed women, elderly individuals, and people experiencing
          homelessness. Our goal is to deliver timely intervention and break the
          cycle of poverty and disadvantage.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-4">
            We believe every person deserves respect, compassion, empathy, and
            the opportunity to thrive. Our work aims to empower individuals,
            uplift families, and strengthen communities through reliable and
            impactful humanitarian services.
          </p>
          <p className="text-lg leading-relaxed">
            GHAF is powered by a team of volunteers who work together to support
            people in need with dedication, kindness, and responsibility.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 bg-green-100 text-center">
        <h2 className="text-2xl font-semibold text-green-800">
          If you love the work we do, consider paying it forward.
        </h2>
        <p className="mt-3 text-lg text-gray-700">
          Every contribution helps us reach more people and change more lives.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition">
          Donate Today
        </button>
      </section>

      

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p className="mb-3">
          We welcome people of any age, gender, sexuality, culture, religion,
          and ability.
        </p>
        <p className="text-sm">
          © Global Humanitarian Aid Foundation — All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
