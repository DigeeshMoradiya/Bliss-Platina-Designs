// pages/404.js

import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 p-6 section-padding">
      <h1 className="text-6xl font-bold text-red-500">500</h1>
      <h2 className="text-2xl mt-4 text-gray-700">Internal Server Error</h2>
      <p className="mt-2 text-gray-500">Something went wrong on our end.</p>
         <Link href="/" className="btn btn-hero"> Go back home</Link>
    </div>
  );
}
