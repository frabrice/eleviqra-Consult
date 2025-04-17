import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, 
  Palette, 
  Settings, 
  ArrowRight, 
  ExternalLink, 
  Filter,
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

type Category = 'all' | 'it' | 'branding' | 'systems';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'it' | 'branding' | 'systems';
  image: string;
  tags: string[];
  link?: string;
  mission?: string;
  tools?: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  if (project.category === 'systems') {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
        <div className="relative h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          {/* Title and Description */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#178E79] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600">{project.description}</p>
          </div>

          {/* Mission */}
          {project.mission && (
            <div className="mb-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-700 italic line-clamp-3">{project.mission}</p>
              </div>
            </div>
          )}

          <div className="mt-auto space-y-4">
            {/* Tools Section */}
            <div>
              <div className="flex items-center text-[#178E79] mb-2">
                <Wrench className="w-4 h-4 mr-2" />
                <span className="font-semibold text-sm">Tools & Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-[#178E79]/10 text-[#178E79] rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="grid grid-cols-2 gap-2">
              {project.tags.map((tag, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#178E79] mr-2 flex-shrink-0" />
                  <span className="text-sm">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-[#178E79] transition-colors duration-200"
              >
                Visit Website <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    id: 1,
    title: "Hire Me Afrika",
    description: "A comprehensive HR platform connecting talented professionals with opportunities across Africa",
    category: "it",
    image: "https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Hire%20Me%20Eleviqra.PNG",
    tags: ["HR Tech", "Talent Pool", "Recruitment"],
    link: "https://hiremeafrika.com/"
  },
  {
    id: 2,
    title: "Shora Space",
    description: "Investment platform enabling SMEs to raise funds through crowd funding initiatives",
    category: "it",
    image: "https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Shora%20Space%20Eleviqra.PNG",
    tags: ["FinTech", "Crowd Funding", "Investment"],
    link: "https://shoraspace.com/"
  },
  {
    id: 3,
    title: "Abana Wellness",
    description: "Digital platform for an NGO dedicated to supporting children's well-being",
    category: "it",
    image: "https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Abanawellness%20Eleviqra.PNG",
    tags: ["NGO", "Child Support", "Wellness"],
    link: "https://abanawellness.org/"
  },
  {
    id: 4,
    title: "Fairyscape Apartments",
    description: "Modern property management and apartment showcase platform",
    category: "it",
    image: "https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/FairyScape%20Eleviqra.PNG",
    tags: ["Real Estate", "Property Management", "Web Platform"]
  },
  {
    id: 5,
    title: "Afri MarketPlace",
    description: "Sophisticated e-commerce platform connecting African vendors with global customers",
    category: "it",
    image: "https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/MarketPlace%20Eleviqra.PNG",
    tags: ["E-commerce", "Marketplace", "Digital Trade"]
  },
  {
    id: 6,
    title: "Afrikarequies",
    description: "Comprehensive tour agency platform showcasing African travel experiences",
    category: "it",
    image: "https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Africarequiresies%20Eleviqra.PNG",
    tags: ["Tourism", "Travel Tech", "Booking Platform"],
    link: "https://afrikarequies.com/"
  },
  {
    id: 7,
    title: "Idembe Heritage",
    description: "Digital presence for a premium heritage resort highlighting cultural experiences",
    category: "it",
    image: "https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Idembe%20Eleviqra.PNG",
    tags: ["Hospitality", "Heritage", "Resort"],
    link: "https://idembeheritage.com/"
  },
  {
    id: 8,
    title: "Wito Support",
    description: "Customer support company platform delivering exceptional service solutions",
    category: "it",
    image: "https://raw.githubusercontent.com/frabrice/emodocar/refs/heads/main/Wito%20Eleviqra.PNG",
    tags: ["Customer Support", "Service Platform", "Business Solutions"],
    link: "https://www.witosupport.com/"
  },
  {
    id: 9,
    title: "EcoLife Marketing",
    description: "Integrated marketing campaign for sustainable products",
    category: "branding",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
    tags: ["Digital Marketing", "Social Media", "Content Strategy"]
  },
  {
    id: 10,
    title: "HYDRONEO",
    description: "Custom Power Apps solution with integrated reporting and automation",
    category: "systems",
    image: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/HYDRONEO.PNG",
    mission: "Design and development a custom Power Apps solution with client collaboration, integrating Power BI and Power Automate for enhanced reporting and automation.",
    tools: ["Power Apps", "Power Automate", "Microsoft Power Platform"],
    tags: ["Process Automation", "Reporting", "Integration"]
  },
  {
    id: 11,
    title: "SUEZ",
    description: "Website Publication Planning App for content management",
    category: "systems",
    image: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/SUEZ.PNG",
    mission: "Develop a 'Website Publication Planning App' using Power Apps and Power Automate to streamline content scheduling and automate publishing workflows.",
    tools: ["Power Apps", "Power Automate", "WordPress"],
    tags: ["Content Management", "Workflow Automation"]
  },
  {
    id: 12,
    title: "Air Liquide",
    description: "Energy consumption modeling and optimization system",
    category: "systems",
    image: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/Air%20Liquide.PNG",
    mission: "Modelling of energy consumption, creation of reports, and optimization reporting processes to enhance environmental performance.",
    tools: ["Excel", "VBA", "Power Query", "Power BI"],
    tags: ["Energy Management", "Performance Analytics"]
  },
  {
    id: 13,
    title: "REZOLUTIONS",
    description: "Custom Notion system for business operations",
    category: "systems",
    image: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/Rezolutions.PNG",
    mission: "Design and implementation a custom Notion system for client needs, including training, archiving, and regulatory compliance; trained teams on its use.",
    tools: ["Notion"],
    tags: ["Knowledge Management", "Process Documentation"]
  },
  {
    id: 14,
    title: "Groupe Novelty",
    description: "Internal order management system with automated reporting",
    category: "systems",
    image: "https://raw.githubusercontent.com/frabrice/Eleviqra/refs/heads/main/Novelty.PNG",
    mission: "Design of a Power Apps solution for internal order management, integrating Power BI for monitoring and Power Automate for automated report delivery.",
    tools: ["Power Apps", "Power Automate", "Microsoft Power Platform"],
    tags: ["Order Management", "Business Intelligence"]
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Filter className="w-5 h-5" /> },
    { id: 'it', label: 'IT Solutions', icon: <Monitor className="w-5 h-5" /> },
    { id: 'branding', label: 'Branding', icon: <Palette className="w-5 h-5" /> },
    { id: 'systems', label: 'Business Systems', icon: <Settings className="w-5 h-5" /> }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' ? true : project.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-[#178E79]/10 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold mb-2">
              Our{' '}
              <span className="bg-gradient-to-r from-[#178E79] to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across IT, branding, and business systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                className={`flex items-center px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#178E79] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span className="ml-2 font-medium">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create something amazing together
            </p>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#178E79] rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-200 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;