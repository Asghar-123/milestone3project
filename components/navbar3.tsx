"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar3() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            alt="Logo"
            className="mr-2"
            height={40}
            src="/Meubel House_Logos-05.png"
            width={40}
          />
          <span className="text-xl font-bold">Furniro</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="space-x-4 hidden md:flex">
          <Link className="text-gray-700 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/shop">
            Shop
          </Link>
          
          <Link className="text-gray-700 hover:text-gray-900" href="/Contact">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="space-x-4 flex items-center">
          <Link
            className="text-gray-700 hover:text-gray-900"
            href="#"
            aria-label="User Profile"
          >
            <i className="fas fa-user"></i>
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900"
            href="#"
            aria-label="Wishlist"
          >
            <i className="fas fa-heart"></i>
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900"
            href="/CartSidebar"
            aria-label="Shopping Cart"
          >
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-gray-900"
            aria-label="Toggle Menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg p-4">
          <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/">
            Home
          </Link>
          <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/shop">
            Shop
          </Link>
          
          <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/Contact">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
