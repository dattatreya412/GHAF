import ImageBanner from './imageBanner';
import image1 from '../public/freebooks.jpeg';
import image2 from '../public/foodforblind.jpeg';
import image3 from '../public/donateingdress.jpeg';

const Programs = () => {
  const programsData=[
    {
      image: image1,
      title: "Donate Free Books to Children",
      description:
        "Support a child’s education by providing free books that inspire learning and creativity. Many children lack access to basic educational materials, and your donation can open doors to knowledge, confidence, and a brighter future. Give the gift of reading and help shape young minds.",
    },
    {
      image: image3,
      title: "Donate Groceries to Elderly People",
      description:
        "Help elderly individuals who struggle to meet their daily needs by donating essential groceries. Your contribution ensures they receive nutritious food, dignity, and support during their most vulnerable years. Even a small gesture can bring comfort, security, and smiles to those who need it the most.",
    },
    {
      image: image2,
      title: "Support the Blind with Essential Aid",
      description:
        "Extend your kindness to visually impaired individuals by providing essential support that improves their daily lives. Your contribution can help them access tools, resources, and care that foster independence, confidence, and dignity. A small act of generosity can make a world of difference.",
    },
  ];

  return (
    <section className="w-screen min-h-screen bg-[#F6F6F6] flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#163172] mb-12 text-center">
        Social Responsibility Programs
      </h1>

      <div className="w-full max-w-6xl flex flex-col gap-12">
        {programsData.map((program, index) => (
          <ImageBanner
            key={index}
            isLeft={index % 2 === 0}
            program={program}
          />
        ))}
      </div>
    </section>
  );
};

export default Programs;
