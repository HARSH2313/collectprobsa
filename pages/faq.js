// pages/faq.js
import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useState } from "react";

const faqs = [
  {
    question: "What services does CollectPro offer?",
    answer:
      "We provide a range of debt resolution services, including NPA management, bank enforcement, legal services, loan settlement & recovery, financial consulting, and credit management.",
  },
  {
    question: "How can CollectPro help my business recover from debt?",
    answer:
      "Our tailored strategies are designed to improve cash flow, reduce bad debts, and enhance overall financial stability, helping your business recover and grow.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a diverse range of industries, including manufacturing, retail, technology, real estate, and more.",
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQ - CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about our debt resolution and financial recovery services."
        />
      </Head>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-xl font-semibold text-gray-700">
                    {faq.question}
                  </span>
                  <span className="text-2xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
