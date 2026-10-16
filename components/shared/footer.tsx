'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Footer() {
  const [details, setDetails] = useState<any>(null);
   useEffect(() => {
    const fetchData = async () => {
      try {
        const [res] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/business-details`),
        ]);

        if (res.ok) setDetails(await res.json());
      } catch (error) {
        console.error('Failed to fetch business details:', error);
      }
    };

    fetchData();
  }, []);


  const quickLinks = [
    { label: 'MalayaTrade', href: '/malaya-trade' },
    { label: 'Exhibition', href: '/exhibition' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const paymentMethods = [
    { name: 'Visa', color: 'bg-blue-600' },
    { name: 'PayPal', color: 'bg-blue-500' },
    { name: 'Amex', color: 'bg-blue-400' },
    { name: 'Stripe', color: 'bg-purple-600' },
    { name: 'Mastercard', color: 'bg-red-500' },
  ];

  return (
    <footer className="relative bg-[#5b714b] text-white">
      {/* Newsletter Section */}
 

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              
              <span className="text-2xl font-bold">{details?.name || 'MalayaGlobe'}</span>
        
            </Link>
            <h3 className="text-xl font-bold mb-4">Want To Take Tour Packages?</h3>
            <Link href="/book-tour" className="bg-[#FEA500] hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Book A Tour Package
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">More Inquiry</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-slate-300">{details?.contact_phone}</span>
              </li>
              <li>
                <h4 className="text-sm font-semibold mb-2 text-white">Send Mail</h4>
                <a
                  href="mailto:info@malayaglobe.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {details?.contact_email || 'info@malayaglobe.com'}
                </a>
              </li>
              <li>
                <h4 className="text-sm font-semibold mb-2 text-white">Address</h4>
                <p className="text-slate-300">
                 {details?.address || 'Boudha, Kathmandu\nNepal'}
                </p>
              </li>
            </ul>
          </div>

          {/* We Are Here */}
          <div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {details?.description}
            </p>
            <div>
               <div>
              <h4 className="text-sm font-semibold mb-4">Connect With Us</h4>
              <div className="flex">
                <a href={details?.facebook_url} target="_blank" rel="noopener noreferrer" className="mr-4">
                  <Facebook className="w-5 h-5 text-white hover:text-blue-500 transition-colors" />
                </a>
                <a href={details?.twitter_url} target="_blank" rel="noopener noreferrer" className="mr-4">
                  <Twitter className="w-5 h-5 text-white hover:text-blue-400 transition-colors" />
                </a>
                <a href={details?.instagram_url} target="_blank" rel="noopener noreferrer" className="mr-4">
                  <Instagram className="w-5 h-5 text-white hover:text-pink-500 transition-colors" />
                </a>
                <a href={details?.youtube_url} target="_blank" rel="noopener noreferrer" className="mr-4">
                  <Youtube className="w-5 h-5 text-white hover:text-red-500 transition-colors" />
                </a>
              </div>
            </div>
              
              <h4 className="text-sm font-semibold mt-4 mb-3">Payment Partner</h4>

              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`${method.color} px-3 py-2 rounded text-white text-xs font-bold shadow-md hover:scale-105 transition-transform cursor-pointer`}
                  >
                    {method.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </footer>
  );
}