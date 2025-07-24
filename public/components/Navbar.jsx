import Link from 'next/link';

export default function Navbar() {
  return (
    <nav navbar_container="bg-white shadow-md">
      <div navbar_content="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" navbar_logo="text-xl font-bold text-gray-800">
          My Photography
        </Link>
        <div navbar_links="space-x-4">
          <Link href="/" navbar_link="hover:text-blue-600">Home</Link>
          <Link href="/gallery" navbar_link="hover:text-blue-600">Gallery</Link>
        </div>
      </div>
    </nav>
  );
}