// pages/terms-of-service.js

import Head from 'next/head';

const TermsOfService = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Terms of Service | CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="Read the terms of service for CollectPro Banking Support Agency, outlining the rules and conditions for using our services."
        />
      </Head>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          <p className="text-lg mb-8 text-gray-600">
            Welcome to CollectPro Banking Support Agency. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4 text-gray-600">
            By using our services, you confirm that you accept these terms of service and that you agree to comply with them. If you do not agree to these terms, you must not use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services Offered</h2>
          <p className="mb-4 text-gray-600">
            CollectPro Banking Support Agency provides services including debt recovery, financial planning, legal consultation, and other related services. The specific details of these services can be found on our services page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
          <p className="mb-4 text-gray-600">
            Users are responsible for providing accurate information and using our services in accordance with all applicable laws and regulations. You agree not to engage in any fraudulent or illegal activities while using our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="mb-4 text-gray-600">
            To the maximum extent permitted by law, CollectPro Banking Support Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, arising out of or related to your use of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Governing Law</h2>
          <p className="mb-4 text-gray-600">
            These terms of service shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
          <p className="mb-4 text-gray-600">
            We reserve the right to modify these terms of service at any time. We will notify you of any changes by posting the new terms on our website. Your continued use of our services after any changes indicates your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
          <p className="mb-4 text-gray-600">
            If you have any questions about these terms, please contact us at:
          </p>
          <p className="mb-4 text-gray-600">
            Email: <a href="mailto:support@collectpros.in" className="text-blue-600">support@collectpros.in</a>
          </p>
          <p className="mb-4 text-gray-600">
            Phone: <a href="tel:+917696330288" className="text-blue-600">+91 7696330288</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
