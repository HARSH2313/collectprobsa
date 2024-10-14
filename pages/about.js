// pages/about.js

import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { FaHandshake, FaBullhorn, FaUserShield } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Rahul Verma',
    position: 'Chief Financial Officer',
    company: 'Verma Manufacturing Pvt. Ltd.',
    photo: '/images/testimonials/rahul-verma.jpg',
  },
  {
    name: 'Anita Kapoor',
    position: 'Business Owner',
    company: 'Kapoor Retail Solutions',
    photo: '/images/testimonials/anita-kapoor.jpg',
  },
  {
    name: 'Sanjay Mehta',
    position: 'Chief Executive Officer',
    company: 'Mehta Tech Innovations',
    photo: '/images/testimonials/sanjay-mehta.jpg',
  },
  {
    name: 'Priya Singh',
    position: 'Real Estate Investor',
    company: 'Singh Properties',
    photo: '/images/testimonials/priya-singh.jpg',
  },
];

const About = () => {
  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        <title>About Us | CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="Learn more about CollectPro Banking Support Agency, our mission, vision, team, and the values that drive our commitment to effective debt resolution and financial recovery."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CollectPro</h1>
          <p className="text-xl md:text-2xl">
            Your Trusted Partner in Debt Resolution and Financial Recovery
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="md:w-1/2 relative h-64 md:h-auto mb-8 md:mb-0">
              <Image
                src="/images/company-overview.jpg" // Ensure this image exists
                alt="Company Overview"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Founded in [Year], CollectPro Banking Support Agency has been at the forefront of debt resolution and financial recovery services. Our dedicated team of experts works tirelessly to provide tailored solutions that align with our clients' unique financial situations.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We understand the challenges that come with managing debt and financial instability. Our mission is to alleviate these burdens by offering comprehensive services that not only resolve immediate financial issues but also pave the way for long-term financial health and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-700 dark:text-gray-300">
              At CollectPro, our mission is to provide effective debt resolution strategies that empower individuals and businesses to regain financial stability. We envision a world where financial challenges are met with compassionate, strategic, and transparent solutions that foster growth and prosperity.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <FaHandshake className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To deliver personalized and strategic debt resolution services that alleviate financial burdens and promote sustainable economic well-being.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaBullhorn className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the leading financial recovery agency recognized for our integrity, innovation, and unwavering commitment to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The foundation of our operations is built upon the following core values:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <FaUserShield className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We uphold the highest standards of honesty and transparency in all our dealings.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We approach every situation with empathy and understanding, prioritizing our clients' well-being.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaBullhorn className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We strive for excellence in every aspect of our work, ensuring optimal outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white dark:bg-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our dedicated team of professionals brings a wealth of experience and expertise to every project, ensuring that our clients receive the highest level of service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={member.photo}
                    alt={`${member.name} - ${member.position}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {member.position} at {member.company}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl md:text-2xl mb-8">
            Whether you're facing financial challenges or looking to optimize your financial strategies, we're here to help.
          </p>
          <Button variant="primary" href="/contact">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
