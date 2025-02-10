import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
          <address className="not-italic text-sm">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </address>
        </div>
        <div>
          <h3 className="text-gray-500 font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-black">Home</Link></li>
            <li><Link href="#" className="text-black">Shop</Link></li>
            <li><Link href="#" className="text-black">About</Link></li>
            <li><Link href="#" className="text-black">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-500 font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-black">Payment Options</Link></li>
            <li><Link href="#" className="text-black">Returns</Link></li>
            <li><Link href="#" className="text-black">Privacy Policies</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-500 font-semibold mb-4">Newsletter</h3>
          <form className="flex flex-col sm:flex-row sm:space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-gray-400 focus:outline-none focus:border-black flex-grow mb-4 sm:mb-0"
            />
            <button type="submit" className="text-black font-semibold">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
        <p>2023 funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
