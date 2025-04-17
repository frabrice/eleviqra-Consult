import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Clock, 
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Calendar,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Contact = () => {
  useScrollToTop();
  
  const offices = [
    {
      name: "Paris Office",
      city: "Paris",
      country: "Paris, France",
      phone: "+33 7 81 72 90 70",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Kigali Office",
      city: "Kigali",
      country: "Kigali, Rwanda",
      phone: "+250 788 322 579",
      image: "https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Kigali%20offfficccceee.webp",
    },
    {
      name: "Canada Office",
      city: "Ottawa",
      country: "Ottawa, Canada",
      phone: "+1 (613) 410-5242",
      image: "https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/james-thomas-UG-m_ngzMFM-unsplash.jpg",
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [
        "contact@eleviqra.com",
        "support@eleviqra.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#178E79] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-white mb-4">
              Let's Connect
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to transform your business? Schedule a consultation or reach out through any of our global offices.
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#178E79] rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-200 font-semibold group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Global Offices</h2>
            <p className="text-lg text-gray-600">Connect with our team at any of our international locations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{office.name}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#178E79] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{office.country}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#178E79] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#178E79]/10 rounded-lg flex items-center justify-center mb-4 text-[#178E79]">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-3 bg-[#178E79]/10 rounded-lg text-[#178E79] hover:bg-[#178E79] hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-[#178E79]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Global Presence</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              With offices across Europe, Africa, and North America, we're ready to serve you wherever you are. 
              Reach out to our team for personalized solutions tailored to your region.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;