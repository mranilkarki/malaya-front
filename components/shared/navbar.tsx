'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, User, Heart } from 'lucide-react';
import logo from '../../public/malaya-logo.png';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0  py-3 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">         
            <Image src={logo} alt="Malaya Logo" className=" object-contain" height={200} width={300}/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="nav-item"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="nav-item"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </Link>
          
            <Link
              href="/malaya-trade"
              className="nav-item"
            >
              Malaya Trade
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/exhibition"
              className="nav-item"
            >
              Exhibition
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="nav-item"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg">
              <Phone className="w-4 h-4 text-emerald-600" />
              <div className="text-left">
                <p className="text-xs text-slate-500">Direct Call</p>
                <p className="text-sm font-semibold text-slate-800">
                  +977-9704889881
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lgnav-item transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 " />
            ) : (
              <Menu className="w-6 h-6 " />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/malaya-trade"
              className="block py-2"
              onClick={closeMenu}
            >
              Malaya Trade
            </Link>
            <Link
              href="/exhibition"
              className="block py-2"
              onClick={closeMenu}
            >
              Exhibition
            </Link>
            <Link
              href="/contact"
              className="block py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-slate-200 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-slate-800">
                +977-9704889881
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}