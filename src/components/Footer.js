'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3B0764] to-[#3B0764] text-white py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-12">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Image src={logo} alt="GEN CLOUDS" width={120} height={32} className="mb-4 md:mb-6" style={{ height: 'auto' }} />
            <p className="mb-6 text-sm leading-relaxed text-gray-200">
              GEN CLOUDS is a subsidiary of Experts Cloud Private Limited. We specialize in providing comprehensive cloud services, ensuring
              that your business operates with efficiency, scalability, and security.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="mb-4 text-xl font-bold md:mb-6">Page</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="mb-4 text-xl font-bold md:mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  FAQ,s
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="mb-4 text-xl font-bold md:mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">+92 334 7681921</li>
              <li className="text-gray-400">info@genclouds.com</li>
              <li className="text-gray-400">
                91-B, Commercial Tulip,
                <br />
                Bahria Town, Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-8 text-center border-t border-gray-700 md:mt-12 md:pt-8">
          <p className="text-sm text-gray-400">
            Copyright © 2025, All rights Reserved <span className="font-bold text-primary">Gen Clouds</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
