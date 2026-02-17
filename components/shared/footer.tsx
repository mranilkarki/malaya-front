'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Tour Packages', href: '/tours' },
    { label: 'Article', href: '/blog' },
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
              
              <span className="text-2xl font-bold">MalayaGlobe</span>
            </Link>
            <h3 className="text-xl font-bold mb-4">Want To Take Tour Packages?</h3>
            <button className="bg-[#FEA500] hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Book A Tour
            </button>
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
                <span className="text-slate-300">+977- 9704889881</span>
              </li>
              <li>
                <h4 className="text-sm font-semibold mb-2 text-white">Send Mail</h4>
                <a
                  href="mailto:info@malayaglobe.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  info@malayaglobe.com
                </a>
              </li>
              <li>
                <h4 className="text-sm font-semibold mb-2 text-white">Address</h4>
                <p className="text-slate-300">
                 Boudha, Kathmandu
                  <br />
                 Nepal
                </p>
              </li>
            </ul>
          </div>

          {/* We Are Here */}
          <div>
            <h3 className="text-lg font-bold mb-6">We Are Here</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
             Get in touch with us for unforgettable travel experiences. Whether you have questions, need assistance, or want to share your travel stories, we're here to listen and help. Reach out to us via phone, email, or visit our office in Kathmandu. Your next adventure starts with us!
            </p>
            <div>
              <h4 className="text-sm font-semibold mb-4">Payment Partner</h4>
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