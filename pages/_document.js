import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import GoogleFonts from 'next-google-fonts';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Head>
          <link href="/static/favicons/ncl.png" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin=""
          />
          <link
            rel="preconnect"
            href="https://cdn.usefathom.com"
            crossOrigin=""
          />
          <link
            href="/static/favicons/nclicon-appletouch.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicons/nclicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicons/nclicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
