import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div layout_container="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main layout_main="max-w-6xl mx-auto p-4">{children}</main>
    </div>
  );
}