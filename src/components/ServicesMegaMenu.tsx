import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Monitor, Palette, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'IT Solutions',
    icon: <Monitor className="w-6 h-6 text-[#178E79]" />,
    description: 'Custom development, cloud solutions',
    path: '/services/it'
  },
  {
    title: 'Branding & Marketing',
    icon: <Palette className="w-6 h-6 text-[#178E79]" />,
    description: 'Identity design, marketing strategy',
    path: '/services/branding'
  },
  {
    title: 'Business Systems',
    icon: <Settings className="w-6 h-6 text-[#178E79]" />,
    description: 'Process automation, analytics',
    path: '/services/systems'
  }
];

const ServicesMegaMenu = ({ isVisible }: { isVisible: boolean }) => {
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
      transition={{ duration: 0.2 }}
      className={`bg-white shadow-xl rounded-lg mt-2 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <div className="p-3">
        <div className="grid grid-cols-3 gap-3" style={{ width: '600px' }}>
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => handleServiceClick(service.path)}
              className="group p-3 border border-gray-200 rounded-lg hover:border-[#178E79] transition-colors duration-200 hover:shadow-md text-left w-full"
            >
              <div className="flex flex-col items-center text-center space-y-1.5">
                <div className="p-1.5 rounded-full bg-[#178E79]/10 group-hover:bg-[#178E79]/20 transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
                <p className="text-xs text-gray-600 line-clamp-1">{service.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesMegaMenu;