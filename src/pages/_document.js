// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html className="no-js" lang="en">
      <Head>
        {/* Meta */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/img/favicon.ico" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900"
          rel="stylesheet"
        />

        {/* CSS Files */}
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/pe-icon-7-stroke.css" />
        <link rel="stylesheet" href="/assets/css/vendor/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/animate.css" />
        <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/plugins/jqueryui.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Script src="/assets/js/main.js" strategy="afterInteractive" />

    </Html>
  );
}
