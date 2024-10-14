// pages/expertise.js

import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { FaBalanceScale, FaBuilding, FaChartLine, FaFileContract } from 'react-icons/fa';

const services = [
  {
    title: 'Debt Resolution',
    icon: <FaBalanceScale className="w-12 h-12 text-primary mb-4" />,
    description:
      'Comprehensive strategies to manage and resolve outstanding debts, tailored to your specific financial situation.',
    image: '/images/expertise/debt-resolution.jpg',
  },
  {
    title: 'Financial Consulting',
    icon: <FaChartLine className="w-12 h-12 text-primary mb-4" />,
    description:
      'Expert financial advice to help you optimize your financial health and achieve long-term stability.',
    image: '/images/expertise/financial-consulting.jpg',
  },
  {
    title: 'Legal Services',
    icon: <FaFileContract className="w-12 h-12 text-primary mb-4" />,
    description:
      'Professional legal assistance to navigate complex financial laws and ensure compliance.',
    image: '/images/expertise/legal-services.jpg',
  },
  {
    title: 'Bank Enforcement',
    icon: <FaBuilding className="w-12 h-12 text-primary mb-4" />,
    description:
      'Strategic enforcement actions to recover assets and manage non-performing assets (NPAs) effectively.',
    image: '/images/expertise/bank-enforcement.jpg',
  },
  // Add more services as needed
];

const Expertise = () => {
  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        <title>Our Expertise | CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="Discover the specialized services and expertise of CollectPro Banking Support Agency. We offer comprehensive debt resolution, financial consulting, legal services, and bank enforcement to support your financial health."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h1>
          <p className="text-xl md:text-2xl">
            Specialized Services Tailored to Your Financial Needs
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="md:w-1/2 relative h-64 md:h-auto mb-8 md:mb-0">
              <Image
                src="/images/expertise/overview.jpg" // Ensure this image exists
                alt="Expertise Overview"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-semibold mb-4">Why Choose Our Expertise</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At CollectPro Banking Support Agency, we bring a wealth of experience and specialized knowledge to address your financial challenges. Our team of experts is dedicated to providing tailored solutions that not only resolve immediate issues but also pave the way for long-term financial stability and growth.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We understand that every financial situation is unique. That's why we offer a range of services designed to meet your specific needs, ensuring that you receive the most effective and sustainable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-white dark:bg-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Explore the specialized services we offer to support your financial health and recovery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  {service.icon}
                  {/* Image */}
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src={service.image}
                      alt={`${service.title} Image`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>
                  {/* Learn More Button */}
                  <Button variant="outline" href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Financial Strategy?</h2>
          <p className="text-xl md:text-2xl mb-8">
            Contact us today to learn how our expertise can help you achieve financial stability and growth.
          </p>
          <Button variant="primary" href="/contact">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
};

export default Expertise;
