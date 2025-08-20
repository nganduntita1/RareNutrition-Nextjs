export default function ProductDetail() {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>This page is temporarily under maintenance.</p>
    </div>
  );
}

export function generateStaticParams() {
  // Replace with your actual product IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ];
}