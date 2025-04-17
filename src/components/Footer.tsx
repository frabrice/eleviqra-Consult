import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Eleviqra</h3>
            <p className="text-gray-400">
              Transforming businesses through innovative IT solutions, branding, and optimization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#178E79] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-[#178E79] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-[#178E79] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-[#178E79] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/it" className="text-gray-400 hover:text-white transition-colors">IT Solutions</Link></li>
              <li><Link to="/services/branding" className="text-gray-400 hover:text-white transition-colors">Branding & Marketing</Link></li>
              <li><Link to="/services/systems" className="text-gray-400 hover:text-white transition-colors">Business Optimization</Link></li>
              <li><Link to="/services/it" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-6">
              {/* Paris Office */}
              <div className="space-y-2">
                <h5 className="font-medium text-[#178E79]">Paris Office</h5>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Paris, France</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+33 7 81 72 90 70</span>
                </div>
              </div>

              {/* Kigali Office */}
              <div className="space-y-2">
                <h5 className="font-medium text-[#178E79]">Kigali Office</h5>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Kigali, Rwanda</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+250 788 322 579</span>
                </div>
              </div>

              {/* Canada Office */}
              <div className="space-y-2">
                <h5 className="font-medium text-[#178E79]">Canada Office</h5>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Ottawa, Canada</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+1 (613) 410-5242</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>contact@eleviqra.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Eleviqra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;