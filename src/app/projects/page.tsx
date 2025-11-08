// app/projects/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ExternalLink, Github, ArrowLeft, Filter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const allProjects: Project[] = [
  {
    id: 1,
    title: 'Passionate Records',
    description: 'A comprehensive digital entertainment platform designed for music artists and creators. Features advanced analytics, revenue tracking, and fan engagement tools that helped increase artist earnings by 45%.',
    image: '/api/placeholder/800/600',
    category: 'Web Application',
    year: '2024',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Invoice Generator',
    description: 'AI-powered invoice generation system specifically designed for influencers and content creators. Automates billing, tracks payments, and provides financial insights, reducing administrative time by 70%.',
    image: '/api/placeholder/800/600',
    category: 'SaaS Platform',
    year: '2024',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'OpenAI'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Annapurna',
    description: 'Community-driven food sharing platform that connects restaurants with local charities to reduce food waste. Successfully redirected over 5,000 meals monthly to those in need.',
    image: '/api/placeholder/800/600',
    category: 'Mobile App',
    year: '2023',
    tags: ['React Native', 'Firebase', 'Google Maps API'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    description: 'Custom e-commerce solution for a premium fashion brand. Features advanced product customization, AR try-on, and seamless checkout experience.',
    image: '/api/placeholder/800/600',
    category: 'Web Application',
    year: '2023',
    tags: ['Shopify', 'React', 'Three.js', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Healthcare Dashboard',
    description: 'Real-time healthcare monitoring dashboard for medical professionals. Provides patient analytics, appointment scheduling, and telemedicine integration.',
    image: '/api/placeholder/800/600',
    category: 'Web Application',
    year: '2023',
    tags: ['Vue.js', 'Python', 'PostgreSQL', 'WebRTC'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'Modern LMS for educational institutions with interactive courses, progress tracking, and AI-powered recommendations.',
    image: '/api/placeholder/800/600',
    category: 'SaaS Platform',
    year: '2022',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const categories = ['All', 'Web Application', 'Mobile App', 'SaaS Platform'];
const years = ['All', '2024', '2023', '2022'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = allProjects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const yearMatch = selectedYear === 'All' || project.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 text-[15px] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            All Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            A comprehensive collection of our work, showcasing digital solutions 
            that drive results and create meaningful impact for our clients.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-colors text-[15px] font-medium"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden sm:flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-medium">Category</label>
                <div className="flex gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year Filter */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-2 font-medium">Year</label>
                <div className="flex gap-2">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                        selectedYear === year
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Count */}
            <div className="text-gray-600 text-[15px] font-medium">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden mt-4 space-y-4"
            >
              <div>
                <label className="text-sm text-gray-600 mb-2 font-medium block">Category</label>
                <div className="flex gap-2 flex-wrap">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 font-medium block">Year</label>
                <div className="flex gap-2 flex-wrap">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedYear === year
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gray-100 rounded-lg aspect-[4/3] mb-4 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
                />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>{project.year}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{project.category}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors tracking-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags?.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags && project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-lg mb-4">No projects found</div>
            <p className="text-gray-600 mb-6">Try adjusting your filters to see more projects.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedYear('All');
              }}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-[15px] font-medium"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}