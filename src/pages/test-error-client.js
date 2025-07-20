// pages/test-error-client.js

export default function ClientErrorPage() {
  if (typeof window === 'undefined') {
    throw new Error('Server-side render error'); // Will trigger 500 page
  }

  return <div>This renders only on the client</div>;
}
