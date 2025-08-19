import Layout from '@/components/Layout';
import Script from 'next/script';
import { ClientToastProvider } from 'vyrn';
import '../../public/assets/css/style.css'; // Optional fallback

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Load jQuery early */}
      <Script src="/assets/js/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/modernizr-3.6.0.min.js" strategy="beforeInteractive" />

      {/* Bootstrap & Plugins AFTER interactive */}
      <Script src="/assets/js/vendor/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/countdown.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/nice-select.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/jqueryui.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/image-zoom.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/ajaxchimp.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/ajax-mail.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />



      {/* Load map if needed */}
      {/* 
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCfmCVTjRI007pC1Yk2o2d_EhgkjTsFVN8"
        strategy="lazyOnload"
      />
      <Script src="/assets/js/plugins/google-map.js" strategy="lazyOnload" />
      */}

      {/* Main JS should be LAST and after DOM is ready */}

      <ClientToastProvider
        position="top-right"
        swipeDirection="left"
        maxToasts={1}
        layout="stack"
        showCloseButton={true}
        showProgressBar={true}
        color={true}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClientToastProvider>
    </>
  );
}
