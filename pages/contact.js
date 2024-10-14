// pages/contact.js

import Head from "next/head";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        reset();
      } else {
        const errorData = await response.json();
        alert(errorData.message || "There was an error sending your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="Get in touch with CollectPro Banking Support Agency for effective debt resolution and financial recovery services. We're here to help you regain financial stability."
        />
      </Head>

      <section className="bg-primary text-white py-20" >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl">
            We&rsquo;re here to assist you with your financial needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background" >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <Card className="flex items-center mb-8 md:mb-0">
              <FaMapMarkerAlt className="text-primary w-6 h-6 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Our Office</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Office No. 1471-B, 14th Floor
                  <br />
                  Block D & E, CCC <br />
                  Zirakpur, Punjab 140603
                </p>
              </div>
            </Card>

            <Card className="flex items-center mb-8 md:mb-0">
              <FaPhoneAlt className="text-primary w-6 h-6 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  +91 7696330288
                </p>
              </div>
            </Card>

            <Card className="flex items-center">
              <FaEnvelope className="text-primary w-6 h-6 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  support@collectpros.in
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white dark:bg-gray-800" >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required." })}
                  className={`w-full px-4 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="Your Name"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="you@example.com"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Subject<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", { required: "Subject is required." })}
                  className={`w-full px-4 py-2 border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="Subject"
                  aria-invalid={errors.subject ? "true" : "false"}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required." })}
                  className={`w-full px-4 py-2 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="Your Message"
                  rows="5"
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div>
                <Button type="submit" variant="primary" className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>

              {isSubmitSuccessful && (
                <p className="text-green-500 text-center" aria-live="polite">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-20" >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Resolve Your Financial Challenges?
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Contact us today to explore how we can assist you in achieving
            financial stability and growth.
          </p>
          <Button variant="primary" href="/contact">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
};

export default Contact;
