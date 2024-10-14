// components/common/Footer.js
import Link from 'next/link';
import { COMPANY_INFO, SOCIAL_MEDIA_LINKS } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">{COMPANY_INFO.name}</h4>
          <p className="text-sm">{COMPANY_INFO.description}</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h5 className="text-md font-semibold">Quick Links</h5>
            <ul className="mt-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold">Follow Us</h5>
            <div className="mt-2 flex space-x-4">
              <a href={SOCIAL_MEDIA_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href={SOCIAL_MEDIA_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href={SOCIAL_MEDIA_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href={SOCIAL_MEDIA_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
