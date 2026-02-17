import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 mt-15">
      <div className="max-w-6xl mx-auto">
        
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 mb-4 text-gray-700" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-3">Phone</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings.
            </p>
            <a href="tel:+9779704889881" className="text-gray-900 font-medium">+977-9704889881</a>
          </div>

          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 mb-4 text-gray-700" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings.
            </p>
            <a href="mailto:Contact@traveltourtheme.co" className="text-gray-900 font-medium">travel@malaya.com</a>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-4 text-gray-700" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-3">Location</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs">
             Boudha, Kathmandu, Nepal
            </p>
            <button className="text-gray-900 font-medium hover:underline underline-offset-4">View On Google Map</button>
          </div>
        </div>

        <hr className="border-gray-100 mb-24" />

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Leave us your info</h2>
          <p className="text-gray-500 mb-12">and we will get back to you.</p>

          <form className="space-y-4 text-left" >
            <input 
              type="text" 
              placeholder="Full Name*" 
              className="w-full p-4 border border-gray-200 focus:outline-none focus:border-orange-400 transition-colors"
              required
            />
            <input 
              type="email" 
              placeholder="Email*" 
              className="w-full p-4 border border-gray-200 focus:outline-none focus:border-orange-400 transition-colors"
              required
            />
            <input 
              type="text" 
              placeholder="Subject*" 
              className="w-full p-4 border border-gray-200 focus:outline-none focus:border-orange-400 transition-colors"
              required
            />
            <textarea 
              placeholder="Message*" 
              rows={6}
              className="w-full p-4 border border-gray-200 focus:outline-none focus:border-orange-400 transition-colors resize-none"
              required
            ></textarea>

            <div className="flex items-center gap-2 py-2">
              <input type="checkbox" id="terms" className="w-4 h-4 accent-orange-400" required />
              <label htmlFor="terms" className="text-sm text-gray-600">
                by clicking here you agree to our terms and policy.
              </label>
            </div>

            <button 
              type="submit" 
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-sm transition-all duration-300 uppercase text-sm tracking-widest mt-4"
            >
              Submit Now
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;