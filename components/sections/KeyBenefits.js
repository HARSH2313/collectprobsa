// components/sections/KeyBenefits.js
import Image from 'next/image';

const benefits = [
  {
    title: 'Expertise',
    description: 'With over 1 year of specialized experience in debt resolution and financial management, our team is equipped to handle a diverse range of financial challenges.',
    icon: '/images/icons/expertise.svg',
  },
  {
    title: 'Tailored Solutions',
    description: 'We develop customized strategies that align with your specific needs and goals, ensuring effective and sustainable outcomes.',
    icon: '/images/icons/tailored.svg',
  },
  {
    title: 'Transparency',
    description: 'We maintain full visibility into our processes, providing regular updates and fostering open communication to build trust.',
    icon: '/images/icons/transparency.svg',
  },
];

const KeyBenefits = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-text dark:text-white">Key Benefits</h2>
        <div className="flex flex-col md:flex-row justify-around">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center mb-8 md:mb-0">
              <div className="w-16 h-16 relative mx-auto mb-4">
                <Image
                  src={benefit.icon}
                  alt={`${benefit.title} Icon`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
