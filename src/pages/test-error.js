// pages/test-error.js

export async function getServerSideProps() {
  // Simulate a server-side error
  throw new Error('Simulated Server Error');
}

export default function TestErrorPage() {
  return <div>This will never render because of the server error.</div>;
}
