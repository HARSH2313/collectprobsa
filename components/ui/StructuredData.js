// components/ui/StructuredData.js
import Head from 'next/head';

const StructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CollectPro Banking Support Agency",
    url: "https://www.collectpros.in",
    logo: "https://www.collectpros.in/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7696330288",
      contactType: "customer service",
      email: "support@collectpros.in",
    },
    sameAs: [
      "https://www.linkedin.com/company/collectpro",
      "https://www.facebook.com/collectpro",
      "https://twitter.com/collectpro",
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default StructuredData;
