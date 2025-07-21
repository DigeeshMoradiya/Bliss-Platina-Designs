// pages/404.js

import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 p-6 section-padding pt-0">
      <img src="/assets/img/404/404-image.svg" alt="Brand Logo" className="mb-6" style={{ width: '100%', height: '400px' }}   />
      <h2 className="text-2xl text-gray-700">Page Not Found</h2>
      <p className="sub-title mt-2">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>

      <Link href="/" className="btn btn-hero">Back to home</Link>
      
    </div>
  );
}
