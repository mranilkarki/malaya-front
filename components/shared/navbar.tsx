'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logo from '../../public/malaya-logo.png';
import Image from 'next/image';

interface TravelPackage {
  title: string;
  slug: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisaOpen, setIsVisaOpen] = useState(false);
  const [isTravelOpen, setIsTravelOpen] = useState(false);
  const [isTravelDropdownOpen, setIsTravelDropdownOpen] = useState(false);
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false);
  const [countries, setCountries] = useState<{ country_name: string; country_flag_url: string }[]>([]);
  const [travelPackages, setTravelPackages] = useState<TravelPackage[]>([]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsVisaOpen(false);
    setIsTravelOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pkgRes, countryRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/travel-packages`),
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/visa-countries`)
        ]);

        if (pkgRes.ok) setTravelPackages(await pkgRes.json());
        if (countryRes.ok) setCountries(await countryRes.json());
      } catch (error) {
        console.error('Failed to fetch menu data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="fixed top-0 py-3 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src={logo} alt="Malaya Logo" className="object-contain" height={60} width={180} priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-item">Home</Link>

            {/* Travel Packages Dropdown — state-driven, not CSS hover */}
            {/* <div
              className="relative py-4"
              onMouseEnter={() => setIsTravelDropdownOpen(true)}
              onMouseLeave={() => setIsTravelDropdownOpen(false)}
            >
              <div className="nav-item flex items-center gap-1 hover:text-emerald-600 transition-colors cursor-pointer">
                Travel Packages
                <ChevronDown className={`w-4 h-4 transition-transform ${isTravelDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {isTravelDropdownOpen && (
                <div className="absolute top-full -left-48 w-[1000px] pt-2 z-50">
                  <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-6">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                      {travelPackages.map((pkg) => (
                        <Link
                          key={pkg.slug}
                          href={`/travel-packages/${pkg.slug}`}
                          className="px-3 py-2 text-sm text-slate-600 hover:bg-[#4a5c3d] hover:text-white rounded-lg transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4a5c3d]"></span>
                          {pkg.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div> */}

            {/* Visas Dropdown — state-driven, not CSS hover */}
            <div
              className="relative py-4"
              onMouseEnter={() => setIsVisaDropdownOpen(true)}
              onMouseLeave={() => setIsVisaDropdownOpen(false)}
            >
              <div className="nav-item flex items-center gap-1 hover:text-emerald-600 transition-colors cursor-pointer">
                Visas
                <ChevronDown className={`w-4 h-4 transition-transform ${isVisaDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {isVisaDropdownOpen && (
                <div className="absolute top-full -left-48 w-[600px] pt-2 z-50">
                  <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-6">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                      {countries.map((country) => (
                        <Link
                          key={country.country_name}
                          href={`/visa-country/${country.country_name.toLowerCase()}`}
                          className="px-3 py-2 text-sm text-slate-600 hover:bg-[#4a5c3d] hover:text-white rounded-lg transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4a5c3d]"></span>
                          {country.country_name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/travel" className="nav-item">Travel</Link>

            <Link href="/malaya-trade" className="nav-item">Trade</Link>
            <Link href="/exhibition" className="nav-item">International Exhibitions</Link>
            <Link href="/contact" className="nav-item">Contact</Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg">
              <Phone className="w-4 h-4 text-emerald-600" />
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">Direct Call</p>
                <Link href="tel:+9779704889881" className="text-sm font-bold text-slate-800">+977-9704889881</Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block py-2 font-medium" onClick={closeMenu}>Home</Link>

            {/* Mobile Travel Packages Accordion */}
            <div className="space-y-1">
              <div
                onClick={() => setIsTravelOpen(!isTravelOpen)}
                className="w-full flex items-center justify-between py-2 text-left font-medium cursor-pointer"
              >
                Travel Packages
                <ChevronDown className={`w-4 h-4 transition-transform ${isTravelOpen ? 'rotate-180' : ''}`} />
              </div>
              {isTravelOpen && (
                <div className="bg-slate-50 rounded-xl p-3 grid grid-cols-2 gap-2">
                  {travelPackages.map((pkg) => (
                    <Link
                      key={pkg.slug}
                      href={`/travel-packages/${pkg.slug}`}
                      className="py-2.5 px-3 text-sm text-slate-600 bg-white rounded-lg shadow-sm border border-slate-100"
                      onClick={closeMenu}
                    >
                      {pkg.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Visa Accordion */}
            <div className="space-y-1">
              <div
                onClick={() => setIsVisaOpen(!isVisaOpen)}
                className="w-full flex items-center justify-between py-2 text-left font-medium cursor-pointer"
              >
                Visas
                <ChevronDown className={`w-4 h-4 transition-transform ${isVisaOpen ? 'rotate-180' : ''}`} />
              </div>
              {isVisaOpen && (
                <div className="bg-slate-50 rounded-xl p-3 grid grid-cols-2 gap-2">
                  {countries.map((country) => (
                    <Link
                      key={country.country_name}
                      href={`/visa-country/${country.country_name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="py-2.5 px-3 text-sm text-slate-600 bg-white rounded-lg shadow-sm border border-slate-100"
                      onClick={closeMenu}
                    >
                      {country.country_name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/malaya-trade" className="block py-2 font-medium" onClick={closeMenu}>Malaya Trade</Link>
            <Link href="/exhibition" className="block py-2 font-medium" onClick={closeMenu}>Exhibitions</Link>
            <Link href="/contact" className="block py-2 font-medium" onClick={closeMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}