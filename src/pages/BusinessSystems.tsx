import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  MessageSquare,
  Users,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Cog,
  FileSpreadsheet,
  Workflow,
  LineChart,
  Lightbulb,
  Rocket,
  CheckCircle2,
  HeadphonesIcon
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const BusinessSystems = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const stats = [
    { 
      number: "85%", 
      label: "Time Saved", 
      icon: <Settings className="w-5 h-5" />, 
      position: "top-[15%] left-[5%]"
    },
    { 
      number: "200+", 
      label: "Processes Automated", 
      icon: <Workflow className="w-5 h-5" />, 
      position: "top-[15%] right-[5%]"
    },
    { 
      number: "50+", 
      label: "Custom Systems", 
      icon: <Cog className="w-5 h-5" />, 
      position: "bottom-[15%] left-[5%]"
    },
    { 
      number: "40%", 
      label: "Cost Reduction", 
      icon: <BarChart3 className="w-5 h-5" />, 
      position: "bottom-[15%] right-[5%]"
    }
  ];

  const services = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Custom Business Process Applications",
      description: "Designing tailored applications to enhance operations and improve efficiency using Notion and Microsoft tools.",
      features: ["Notion Integration", "Microsoft 365", "Custom Workflows"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Internal Management Systems",
      description: "Creating fully customized internal systems to streamline workflows, project management, and team collaboration.",
      features: ["Team Collaboration", "Project Tracking", "Resource Management"]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Task & Process Automation",
      description: "Automating repetitive tasks and workflows to increase productivity and reduce manual effort.",
      features: ["Workflow Automation", "Task Scheduling", "Integration Setup"]
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Dynamic KPI Dashboards",
      description: "Developing real-time, interactive dashboards to track performance and generate automated reports for better decision-making.",
      features: ["Real-time Analytics", "Custom Reports", "Performance Tracking"]
    }
  ];

  const processSteps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Reach Out to Us",
      description: "Get in touch with us to discuss your needs. We'll schedule a consultation to understand your business and goals."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Define Your Vision",
      description: "Share your ideas, preferences, and requirements. We collaborate with you to outline the best strategy and approach."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "We Get to Work",
      description: "Our team starts designing, developing, and refining your project, keeping you involved through feedback and progress updates."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Review & Finalize",
      description: "Once the project is complete, we review it together, make final adjustments, and ensure everything is polished and ready for launch."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Need maintenance, updates, or additional support? We're here to help keep your digital assets running smoothly."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#178E79]/5 to-purple-50">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-[#178E79]/10 rounded-full">
                <span className="text-[#178E79] font-medium text-sm tracking-wide">Business Systems</span>
              </div>

              <h1 className="hero-title">
                Optimize Your{' '}
                <span className="bg-gradient-to-r from-[#178E79] to-purple-600 bg-clip-text text-transparent">
                  Business Operations
                </span>
              </h1>

              <p className="hero-description">
                Transform your business processes with custom solutions that streamline operations, 
                automate tasks, and provide real-time insights for better decision-making.
              </p>
            </motion.div>

            {/* Right Column - Image & Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-[600px]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                  alt="Business Systems Dashboard"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#178E79]/20 to-transparent"></div>

                {/* Floating Stats Cards */}
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className={`absolute ${stat.position} bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer z-10`}
                    style={{ width: "180px" }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#178E79]/10 rounded-lg text-[#178E79]">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#178E79] to-purple-600 bg-clip-text text-transparent">
              Our Business Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#178E79]/5 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6 relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#178E79]/10 text-[#178E79] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
                  </div>
                  <h3 className="text-base font-semibold mb-2 tracking-tight text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#178E79] mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Our Process:{' '}
              <span className="bg-gradient-to-r from-[#178E79] to-purple-600 bg-clip-text text-transparent">
                How We Work
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-4 mb-6 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } relative`}
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute w-0.5 bg-gradient-to-b from-[#178E79]/20 to-purple-500/20 top-[40px] bottom-[-30px] left-[25px] hidden lg:block"></div>
                )}

                {/* Step Number and Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#178E79]/10 to-purple-500/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative">
                    <div className="absolute inset-0 bg-white/50 rounded-xl backdrop-blur-sm"></div>
                    <div className="relative">
                      <div className="text-lg font-bold text-[#178E79] mb-0.5 text-center">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                      <div className="text-[#178E79]">
                        {React.cloneElement(step.icon, { className: 'w-4 h-4' })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#178E79]/20 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#178E79]/[0.02] to-purple-500/[0.02] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <h3 className="text-base font-semibold mb-1 text-gray-900 group-hover:text-[#178E79] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#178E79]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Optimize Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's create efficient systems that drive your business forward
            </p>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#178E79] rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-200 group"
            >
              Start Your Optimization Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSystems;