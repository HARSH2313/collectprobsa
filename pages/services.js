// pages/services.js

import Head from 'next/head';
import Image from 'next/image';

const Services = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Our Services | CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="Explore the range of services offered by CollectPro Banking Support Agency, including debt recovery, legal consultation, financial planning, and more."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Professional Services</h1>
          <p className="text-xl mb-8">
            We offer a comprehensive range of banking support services to help your business thrive.
          </p>
          <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Debt Recovery Service */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <Image src="/images/icons/debt-recovery.svg" alt="Debt Recovery" width={64} height={64} />
              <h3 className="text-xl font-semibold mt-4">Debt Recovery</h3>
              <p className="mt-4 text-gray-600">
                Helping businesses recover outstanding debts efficiently with a focus on legal compliance and professionalism.
              </p>
            </div>

            {/* Financial Planning Service */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <Image src="/images/icons/financial-planning.svg" alt="Financial Planning" width={64} height={64} />
              <h3 className="text-xl font-semibold mt-4">Financial Planning</h3>
              <p className="mt-4 text-gray-600">
                Our expert advisors will assist you in making sound financial decisions to secure your business’s future.
              </p>
            </div>

            {/* Legal Consultation Service */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <Image src="/images/icons/legal-consultation.svg" alt="Legal Consultation" width={64} height={64} />
              <h3 className="text-xl font-semibold mt-4">Legal Consultation</h3>
              <p className="mt-4 text-gray-600">
                We provide tailored legal advice to help you navigate complex financial regulations and disputes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Service Blocks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Detailed Service Offerings</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Debt Recovery Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Debt Recovery</h3>
              <p className="text-gray-600">
                Our team specializes in recovering outstanding debts for businesses in a timely and professional manner. 
                We work within legal frameworks to ensure compliance and protect your reputation. Whether you need assistance 
                with overdue invoices or larger corporate debts, our solutions are tailored to meet your specific needs.
              </p>
            </div>

            {/* Financial Planning Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Financial Planning</h3>
              <p className="text-gray-600">
                We provide comprehensive financial planning services to ensure your business remains financially stable and 
                prosperous. Our experts will help you create long-term strategies to manage risks, improve cash flow, and achieve 
                your financial goals. Let us guide you toward better financial health.
              </p>
            </div>

            {/* Legal Consultation Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Legal Consultation</h3>
              <p className="text-gray-600">
                Navigating the legal complexities of the financial world can be challenging. Our experienced legal consultants 
                provide actionable advice to help your business comply with regulations and resolve disputes effectively.
                From contract negotiations to regulatory compliance, we’ve got you covered.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about how our services can help your business succeed.
          </p>
          <a href="/contact" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded hover:bg-gray-100">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
