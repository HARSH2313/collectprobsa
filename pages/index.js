// pages/index.js

import Head from 'next/head';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { FaBalanceScale, FaBuilding, FaChartLine, FaFileContract } from 'react-icons/fa';

const services = [
  {
    title: 'Debt Resolution',
    icon: <FaBalanceScale className="w-12 h-12 text-primary mb-4" />,
    description: 'Strategies to manage and resolve outstanding debts effectively.',
    image: '/images/expertise/debt-resolution.jpg',
  },
  {
    title: 'Financial Consulting',
    icon: <FaChartLine className="w-12 h-12 text-primary mb-4" />,
    description: 'Expert financial advice to optimize your financial health.',
    image: '/images/expertise/financial-consulting.jpg',
  },
  {
    title: 'Legal Services',
    icon: <FaFileContract className="w-12 h-12 text-primary mb-4" />,
    description: 'Professional legal assistance for financial laws and compliance.',
    image: '/images/expertise/legal-services.jpg',
  },
  {
    title: 'Bank Enforcement',
    icon: <FaBuilding className="w-12 h-12 text-primary mb-4" />,
    description: 'Strategic enforcement actions for managing NPAs and recovering assets.',
    image: '/images/expertise/bank-enforcement.jpg',
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="CollectPro offers specialized banking support services including debt resolution, financial consulting, legal services, and more."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 text-center" >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">CollectPro Banking Support Agency</h1>
          <p className="text-xl md:text-2xl mt-4">
            Specialized services in debt resolution, financial consulting, and legal enforcement.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background" >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            CollectPro is a leading provider of banking support services with years of experience in debt recovery,
            financial consulting, and legal enforcement. We help businesses and financial institutions optimize
            operations and recover assets.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" >
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} title={service.title} description={service.description} image={service.image}>
                {service.icon}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background" >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose CollectPro</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We bring years of expertise, a deep understanding of financial operations, and a dedicated team to help you
            recover assets, resolve debts, and ensure compliance with financial laws.
          </p>
          <Button href="/why-choose-us" variant="primary">
            Learn More
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              title="Rahul Verma"
              description="CollectPro helped us recover a significant portion of our outstanding debts in a very short time."
              image="/images/testimonials/rahul-verma.jpg"
            />
            <Card
              title="Anita Kapoor"
              description="Their financial consulting services were instrumental in turning around our business."
              image="/images/testimonials/anita-kapoor.jpg"
            />
            <Card
              title="Sanjay Mehta"
              description="Their expertise in bank enforcement helped us manage our NPAs effectively."
              image="/images/testimonials/sanjay-mehta.jpg"
            />
            <Card
              title="Priya Singh"
              description="CollectPro's legal team provided us with top-notch assistance during a critical time."
              image="/images/testimonials/priya-singh.jpg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white text-center" >
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Contact us today to learn more about how CollectPro can assist your business in financial recovery,
            consulting, and legal matters.
          </p>
          <Button href="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
