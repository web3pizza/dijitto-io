'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BASE_PATH } from '@/lib/config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/main#about', label: 'About' },
    { href: '/main#how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/main" className="flex items-center">
            <Image
              src={`${BASE_PATH}/images/dijitto-express-logo.svg`}
              alt="DijittoExpress"
              width={190}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#374151] hover:text-[#169EDD] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://app.dijitto.io/request"
              className="bg-[#169EDD] hover:bg-[#1E3A8A] text-white px-6 py-2 rounded transition-colors font-medium"
            >
              Join the Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded text-[#374151] hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#374151] hover:text-[#169EDD] font-medium px-2 py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://app.dijitto.io/request"
                className="bg-[#169EDD] hover:bg-[#1E3A8A] text-white px-6 py-3 rounded text-center transition-colors font-medium"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
