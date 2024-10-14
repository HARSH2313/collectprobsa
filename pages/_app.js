// pages/_app.js

import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/common/Layout';
import '../styles/globals.css'; // Import global CSS
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
   
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Meta tags */}
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* Google Analytics or other scripts */}
    </>
  );
}

export default MyApp;
