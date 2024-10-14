// pages/_app.js

import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/common/Layout';
import '../styles/globals.css'; // Import global CSS
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import Script from 'next/script'; // For adding external scripts if needed

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });

    // Optional: Refresh AOS on route change (if dynamic content is loaded)
    const handleRouteChange = () => {
      AOS.refresh();
    };

    window.addEventListener('routeChangeComplete', handleRouteChange);
    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      {/* Head Component for SEO and Meta Tags */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Additional global meta tags can be added here */}
        <title>CollectPro Banking Support Agency</title>
        <meta
          name="description"
          content="CollectPro Banking Support Agency - Your Partner in Effective Debt Resolution and Financial Recovery."
        />
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="CollectPro Banking Support Agency" />
        <meta
          property="og:description"
          content="Your Partner in Effective Debt Resolution and Financial Recovery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.collectpros.in" />
        <meta property="og:image" content="https://www.collectpros.in/images/logo.png" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CollectPro Banking Support Agency" />
        <meta
          name="twitter:description"
          content="Your Partner in Effective Debt Resolution and Financial Recovery."
        />
        <meta name="twitter:image" content="https://www.collectpros.in/images/logo.png" />
      </Head>

      {/* Layout Component wraps around all pages */}
      <Layout>
        {/* Render the specific page component */}
        <Component {...pageProps} />
      </Layout>

      {/* Optional: Add external scripts here using Next.js Script component */}
      {/* Example: Google Analytics */}
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'YOUR_GA_TRACKING_ID');
        `}
      </Script> */}
    </>
  );
}

export default MyApp;
