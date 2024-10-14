// components/common/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import { COMPANY_INFO } from '../../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div>
          <Link href="/" className="text-2xl font-bold">
            {COMPANY_INFO.name}
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About Us</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/expertise" className="hover:text-gray-300">Expertise</Link>
          <Link href="/why-choose-us" className="hover:text-gray-300">Why Choose Us</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 px-4 pb-4">
            <Link href="/" className="block hover:text-gray-300">Home</Link>
            <Link href="/about" className="block hover:text-gray-300">About Us</Link>
            <Link href="/services" className="block hover:text-gray-300">Services</Link>
            <Link href="/expertise" className="block hover:text-gray-300">Expertise</Link>
            <Link href="/why-choose-us" className="block hover:text-gray-300">Why Choose Us</Link>
            <Link href="/contact" className="block hover:text-gray-300">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
