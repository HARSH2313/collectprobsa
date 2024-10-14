import Head from 'next/head';
import Link from 'next/link';

const WhyChooseUs = () => {
  return (
    <>
      <Head>
        <title>Why Choose Us | CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="Discover the unique advantages of choosing CollectPro Banking Support Agency for your debt resolution and financial recovery needs."
        />
      </Head>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">Why Choose Us</h1>
          <p className="text-lg mb-8 text-gray-600 text-center">
            At CollectPro Banking Support Agency, we understand that choosing a financial partner is a significant decision. Here’s why we stand out.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Unique Selling Propositions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Customized Solutions",
                description: "Every business is unique, and we tailor our services to meet your specific needs. Our customized strategies ensure effective outcomes that align with your goals."
              },
              {
                title: "Client-Centric Approach",
                description: "We build lasting relationships with our clients, providing ongoing support and regular updates throughout the process. Your success is our priority."
              },
              {
                title: "Proven Track Record",
                description: "Our history of successful debt resolution speaks for itself. With a high success rate, we are proud to have helped numerous businesses regain financial stability."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Client Testimonials</h2>

          {[
            {
              quote: "Working with CollectPro transformed our approach to debt management. Their expertise and commitment made all the difference.",
              author: "Rahul Verma, CEO of ABC Corp"
            },
            {
              quote: "The team’s transparency and dedication gave us peace of mind during a challenging time.",
              author: "Anita Kapoor, Finance Director of XYZ Ltd"
            },
            {
              quote: "Their tailored solutions led to significant improvements in our cash flow. Highly recommended!",
              author: "Sanjay Mehta, Owner of 123 Enterprises"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <p className="text-gray-600 italic">{`“${testimonial.quote}”`}</p>
              <p className="text-right text-gray-800 font-bold">— {testimonial.author}</p>
            </div>
          ))}

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
              aria-label="Contact CollectPro Banking Support Agency"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
