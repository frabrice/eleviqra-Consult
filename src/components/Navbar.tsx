import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ServicesMegaMenu from './ServicesMegaMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const links = [
    { path: '/about', label: 'About' },
    { label: 'Services', hasMenu: true },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#178E79] to-purple-600 bg-clip-text text-transparent">
              Eleviqra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.hasMenu && setShowServiceMenu(true)}
                onMouseLeave={() => link.hasMenu && setShowServiceMenu(false)}
              >
                {link.hasMenu ? (
                  <button
                    className={`flex items-center space-x-1 text-gray-600 hover:text-[#178E79] transition-colors duration-200 py-2`}
                  >
                    <span>Services</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? 'text-[#178E79]'
                        : 'text-gray-600 hover:text-[#178E79]'
                    } transition-colors duration-200 py-2`}
                  >
                    {link.label}
                  </Link>
                )}
                {/* Services Mega Menu */}
                {link.hasMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2">
                    <ServicesMegaMenu isVisible={showServiceMenu} />
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/get-started"
              className="bg-[#178E79] text-white px-6 py-2.5 rounded-lg hover:bg-[#147a68] transition-colors duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#178E79] transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {links.map((link, index) => (
              <div key={index}>
                {link.hasMenu ? (
                  <>
                    <button
                      onClick={() => setShowServiceMenu(!showServiceMenu)}
                      className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-[#178E79]/10 hover:text-[#178E79] rounded-md text-base font-medium transition-colors duration-200"
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-4 h-4 transform transition-transform ${showServiceMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {showServiceMenu && (
                      <div className="pl-4 py-2 space-y-1">
                        <button
                          onClick={() => handleServiceClick('/services/it')}
                          className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-[#178E79]/10 hover:text-[#178E79] rounded-md text-sm"
                        >
                          IT Solutions
                        </button>
                        <button
                          onClick={() => handleServiceClick('/services/branding')}
                          className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-[#178E79]/10 hover:text-[#178E79] rounded-md text-sm"
                        >
                          Branding & Marketing
                        </button>
                        <button
                          onClick={() => handleServiceClick('/services/systems')}
                          className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-[#178E79]/10 hover:text-[#178E79] rounded-md text-sm"
                        >
                          Business Systems
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? 'bg-[#178E79]/10 text-[#178E79]'
                        : 'text-gray-600 hover:bg-[#178E79]/10 hover:text-[#178E79]'
                    } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/get-started"
              className="block w-full bg-[#178E79] text-white px-3 py-2 rounded-md hover:bg-[#147a68] transition-colors duration-200 text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;