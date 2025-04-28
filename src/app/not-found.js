'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-[#1E0B32] dark:text-white">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-[#1E0B32] dark:text-white">Page Not Found</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">The page you are looking for doesn't exist or has been moved.</p>
        <Link 
          href="/" 
          className="px-6 py-3 transition-all duration-300 border rounded-xl text-[#1E0B32] dark:text-white border-gray-200 dark:border-gray-800 hover:border-[#ff6a00] dark:hover:border-purple-800"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
