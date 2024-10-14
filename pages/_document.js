// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta Tags */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="CollectPro Banking Support Agency - Your Partner in Effective Debt Resolution and Financial Recovery." />
          <meta name="keywords" content="Debt Resolution, Financial Recovery, NPA Management, Bank Enforcement, Legal Services, Loan Settlement, CollectPro" />
          <meta name="author" content="CollectPro Banking Support Agency" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Preconnect to Google Fonts for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          {/* AOS CSS for animations */}
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

          {/* Custom Styles */}
          {/* If you have any additional global styles or scripts, include them here */}
        </Head>
        <body className="bg-background text-text dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />

          {/* AOS JS for animations */}
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <script>
            {`
              AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                mirror: false,
              });
            `}
          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
