// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to Google Fonts for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

          {/* Import Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Meta Tags for SEO and Social Media */}
          <meta
            name="description"
            content="CollectPro Banking Support Agency - Your Partner in Effective Debt Resolution and Financial Recovery."
          />
          <meta property="og:title" content="CollectPro Banking Support Agency" />
          <meta
            property="og:description"
            content="Your Partner in Effective Debt Resolution and Financial Recovery."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.collectpros.in" />
          <meta property="og:image" content="https://www.collectpros.in/images/logo.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="CollectPro Banking Support Agency" />
          <meta
            name="twitter:description"
            content="Your Partner in Effective Debt Resolution and Financial Recovery."
          />
          <meta name="twitter:image" content="https://www.collectpros.in/images/logo.png" />

          {/* Add any additional head elements here */}
        </Head>
        <body className="bg-background text-text dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
