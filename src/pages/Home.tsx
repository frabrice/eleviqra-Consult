import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Palette, BarChart3, Users, CheckCircle, ArrowUpRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const trustedClients = [
    {
      name: "EmodoCar",
      logo: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/EmodoCar%20logo.jpg",
    },
    {
      name: "Final Without BG",
      logo: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/Final%20Without%20BG.png",
    },
    {
      name: "Shora",
      logo: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/Shora_draft_sasa%5B2%5D.png",
    },
    {
      name: "Trv2rda",
      logo: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/Trv2rda%20revised.png",
    },
    {
      name: "VIVID",
      logo: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/VIVID%20Logo.png",
    },
    {
      name: "Air Liquide",
      logo: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/air%20liquide.png",
    },
    {
      name: "Groupe Novelty",
      logo: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/groupe%20novelty.png",
    },
    {
      name: "Suez",
      logo: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/suez.png",
    }
  ];

  // Triple the array to ensure smooth infinite scroll
  const duplicatedClients = [...trustedClients, ...trustedClients, ...trustedClients];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#178E79]/10 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-[#178E79] to-purple-600 bg-clip-text text-transparent">
                  Expert Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Elevate your business with cutting-edge IT services, strategic branding, and optimized workflows.
              </p>
              <Link
                to="/get-started"
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-1 rounded-xl bg-white/30 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative inline-flex items-center justify-center px-8 py-4 bg-[#357895] text-white rounded-xl shadow-[0_8px_30px_rgb(53,120,149,0.3)] hover:shadow-[0_20px_40px_rgb(53,120,149,0.4)] transform hover:-translate-y-1 transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg font-semibold">Schedule a Consultation</span>
                  <div className="absolute right-0 w-12 h-full flex items-center justify-center bg-white/10 rounded-r-xl">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/man-76202_1280.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="w-8 h-8 text-[#178E79]" />,
                title: 'IT Solutions',
                description: 'Custom web & app development, UI/UX design, and cloud solutions',
                path: '/services/it'
              },
              {
                icon: <Palette className="w-8 h-8 text-purple-600" />,
                title: 'Branding & Marketing',
                description: 'Logo design, social media strategy, and content creation',
                path: '/services/branding'
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-[#178E79]" />,
                title: 'Business Optimization',
                description: 'Workflow automation, KPI dashboards, and system integration',
                path: '/services/systems'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-[#178E79] hover:text-[#147a68] transition-colors duration-200 group"
                >
                  Learn more 
                  <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Trusted By</h2>
          </motion.div>
          
          <div className="relative">
            <div className="overflow-hidden relative">
              <div className="animate-scroll">
                {duplicatedClients.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: '200px' }}
                  >
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-20 flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Eleviqra</h2>
            <p className="text-xl text-gray-600">Partner with us for exceptional results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6 text-[#178E79]" />,
                title: 'Expert Team',
                description: 'Seasoned professionals with diverse expertise'
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-[#178E79]" />,
                title: 'Proven Results',
                description: 'Track record of successful projects'
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-[#178E79]" />,
                title: 'Data-Driven',
                description: 'Solutions backed by analytics and insights'
              },
              {
                icon: <ArrowUpRight className="w-6 h-6 text-[#178E79]" />,
                title: 'Innovation',
                description: 'Cutting-edge technologies and methodologies'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#178E79]/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#178E79]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8">Let's discuss how we can help you achieve your goals</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#178E79] rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-200 group"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;