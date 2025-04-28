'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm dark:shadow-gray-800/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image src={logo} alt="Gen Clouds Logo" width={100} height={32} style={{ width: '100px', height: 'auto' }} />
            </div>
          </Link>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-[#ff6a00] dark:hover:text-purple-400 font-medium">
            Home
          </Link>
          <Link href="/services" className="text-gray-800 dark:text-gray-200 hover:text-[#ff6a00] dark:hover:text-purple-400 font-medium">
            Services
          </Link>
          <Link href="/tools" className="text-gray-800 dark:text-gray-200 hover:text-[#ff6a00] dark:hover:text-purple-400 font-medium">
            Tools
          </Link>
          <Link href="/case-studies" className="text-gray-800 dark:text-gray-200 hover:text-[#ff6a00] dark:hover:text-purple-400 font-medium">
            Case Studies
          </Link>
          <Link href="/blog" className="text-gray-800 dark:text-gray-200 hover:text-[#ff6a00] dark:hover:text-purple-400 font-medium">
            blog
          </Link>
          <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-[#ff6a00] dark:hover:text-purple-400 font-medium">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative items-center hidden md:flex">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-purple-500 w-[200px] text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 dark:text-gray-500 left-3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          <button className="px-5 py-2 text-lg bg-[#ff6a00] hover:bg-blue-700 dark:hover:bg-purple-600 transition text-white rounded-full shadow-xl dark:shadow-purple-900/20 flex items-center gap-2">
            Contact Us
          </button>

          <button className="text-gray-800 dark:text-gray-200 lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:hidden">{/* Add mobile menu implementation here if needed */}</div>
    </nav>
  );
};

export default Navbar;
