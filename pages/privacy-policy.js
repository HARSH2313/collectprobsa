// pages/privacy-policy.js

import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Privacy Policy | CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="Learn how CollectPro Banking Support Agency collects, uses, and protects your personal information. Your privacy is important to us."
        />
      </Head>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700">
              Welcome to CollectPro Banking Support Agency. Your privacy is of the utmost importance to us. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our
              website.
            </p>
          </div>

          {/* Information Collection */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-700">
              We may collect the following types of information from users:
            </p>
            <ul className="list-disc list-inside pl-4 mt-4">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and other identifiable
                information provided by users when contacting us or using our services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website, such as IP address,
                browser type, and access times.
              </li>
              <li>
                <strong>Cookies:</strong> Data collected through cookies or similar tracking technologies.
              </li>
            </ul>
          </div>

          {/* Usage of Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside pl-4 mt-4">
              <li>To provide, operate, and maintain our services.</li>
              <li>To improve and personalize your experience on our website.</li>
              <li>To send you information about our services, including marketing communications.</li>
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To analyze how our website is used and improve its functionality.</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700">
              We do not share or sell your personal information to third parties, except in the following cases:
            </p>
            <ul className="list-disc list-inside pl-4 mt-4">
              <li>If required by law or to protect our legal rights.</li>
              <li>With service providers who assist us in operating our website or business.</li>
              <li>In connection with a merger, acquisition, or asset sale.</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700">
              We take reasonable precautions to protect your personal information from unauthorized access, use, or
              disclosure. However, no method of transmission over the internet is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          {/* User Rights */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, correct, or delete your personal information. To exercise these rights,
              please contact us using the information below. You may also opt out of receiving marketing communications
              by following the instructions in those messages.
            </p>
          </div>

          {/* Policy Updates */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you by
              updating the date at the top of this page. We encourage you to review this policy periodically to stay
              informed about how we are protecting your information.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or how we handle your personal information, please
              contact us at:
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Email:</strong> support@collectpros.in
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Address:</strong> 333 W 39th St, New York, NY 10018
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
