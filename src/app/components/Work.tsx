'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: '/api/placeholder/800/600',
      description: 'A modern e-commerce platform with advanced analytics and AI-powered recommendations.'
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'Mobile App',
      image: '/api/placeholder/800/600',
      description: 'A comprehensive fitness tracking app with personalized workout plans and nutrition guidance.'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'Web Application',
      image: '/api/placeholder/800/600',
      description: 'An enterprise SaaS dashboard with real-time analytics and reporting features.'
    },
    {
      id: 4,
      title: 'Banking App',
      category: 'Mobile App',
      image: '/api/placeholder/800/600',
      description: 'A modern banking application with secure transactions and financial insights.'
    }
  ];

  return (
    <section id="work" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of innovative digital products that have helped 
            businesses transform and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gray-100 aspect-video mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-90"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="px-4">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <button className="border border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-200 font-medium text-lg">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;