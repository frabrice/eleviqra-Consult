import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, Rocket, Zap, Link as LinkIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#178E79]/10 to-purple-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Ideas into{' '}
                <span className="bg-gradient-to-r from-[#178E79] to-purple-600 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                At Eleviqra, we blend innovation with expertise to deliver cutting-edge solutions 
                that drive business growth and digital transformation.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Eleviqra%20Home.jpg"
                alt="Eleviqra Team"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#178E79]/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Eleviqra%20Home%2012.jpg"
                alt="Our Mission and Vision"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#178E79]/20 to-transparent"></div>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#178E79]">
                  <Target className="w-6 h-6 mr-2" />
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance efficiency, and create lasting value in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#178E79]">
                  <Rocket className="w-6 h-6 mr-2" />
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the catalyst for digital transformation, setting new standards in 
                  technological innovation and creative excellence across industries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Principles</h2>
            <p className="text-xl text-gray-600">The core values that drive everything we do</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-[#178E79]" />,
                title: "Innovation First",
                description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
              },
              {
                icon: <Target className="w-8 h-8 text-[#178E79]" />,
                title: "Results-Driven",
                description: "Our focus is on delivering measurable outcomes that drive real business value."
              },
              {
                icon: <LinkIcon className="w-8 h-8 text-[#178E79]" />,
                title: "Seamless Collaboration",
                description: "We work closely with our clients to ensure alignment and exceptional results."
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#178E79]/10 mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind our success</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Aphro Ndagijimana",
                role: "Chief Executive Officer",
                image: "https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Aphro%20Ndagijimana.jpg",
                bio: "Visionary leader with extensive experience in business strategy and sustainable development"
              },
              {
                name: "Paul-Olivier R.",
                role: "Chief Operating Officer",
                image: "https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Paul%20Olivier%20Eleviqra.jpeg",
                bio: "Operations expert focused on optimizing business processes and driving organizational growth."
              },
              {
                name: "NIYIGENA Fabrice",
                role: "Head of Technology",
                image: "https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Fabrice%20Eleviqra.jpeg",
                bio: "Expert in project management and digital transformation with a focus on scalable solutions."
              },
              {
                name: "Jean Luc H.",
                role: "Creative Director",
                image: "https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Jean%20Luc%20Eleviqra.jpeg",
                bio: "Award-winning designer bringing over a decade of branding and UX expertise."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-4 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-[#178E79] ring-offset-2"></div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#178E79] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#178E79]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create something extraordinary for your business
            </p>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#178E79] rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-200 group"
            >
              Get in Touch
              <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;