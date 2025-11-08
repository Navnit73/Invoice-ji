'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowLeft, ExternalLink, Github, Target, Zap, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  category: string;
  year: string;
  duration: string;
  teamSize: string;
  liveUrl: string;
  githubUrl: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  results: Array<{ metric: string; value: string }>;
  process: Array<{ phase: string; description: string }>;
  testimonials: Array<{ quote: string; author: string; role: string }>;
}

interface CaseStudyClientProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyClient({ caseStudy }: CaseStudyClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-[15px] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {caseStudy.category}
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight"
          >
            {caseStudy.title}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl"
          >
            {caseStudy.excerpt}
          </motion.p>

          {/* Meta Information */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {caseStudy.year}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {caseStudy.duration}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {caseStudy.teamSize}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            {caseStudy.liveUrl && caseStudy.liveUrl !== '#' && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-[15px] font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Live Site
              </a>
            )}
            {caseStudy.githubUrl && caseStudy.githubUrl !== '#' && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-[15px] font-medium"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </motion.div>
        </motion.header>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-16 rounded-2xl overflow-hidden"
        >
          <div className="relative h-96 md:h-[500px] bg-gray-100">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-900 mb-6">
                Project Overview
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed text-[15px]">
                {caseStudy.overview}
              </motion.p>
            </motion.section>

            {/* Challenges & Solutions */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-red-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Challenges</h3>
                  </div>
                  <ul className="space-y-3">
                    {caseStudy.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 text-green-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Our Solutions</h3>
                  </div>
                  <ul className="space-y-3">
                    {caseStudy.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.section>

            {/* Development Process */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Development Process</h2>
              <div className="space-y-6">
                {caseStudy.process.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    variants={itemVariants}
                    className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-200"
                  >
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{phase.phase}</h4>
                      <p className="text-gray-600 text-[15px]">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Technologies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h3>
              <div className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart3 className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-600">{result.metric}</span>
                    </div>
                    <div className="text-xl font-semibold text-gray-900">{result.value}</div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials */}
            {caseStudy.testimonials && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What Our Client Says</h3>
                <div className="p-6 bg-gray-900 rounded-2xl text-white">
                  <p className="text-gray-200 italic mb-4">"{caseStudy.testimonials[0].quote}"</p>
                  <div>
                    <div className="font-semibold">{caseStudy.testimonials[0].author}</div>
                    <div className="text-gray-400 text-sm">{caseStudy.testimonials[0].role}</div>
                  </div>
                </div>
              </motion.section>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-6 text-[15px] max-w-md mx-auto">
            Let's work together to bring your vision to life with the same level of excellence.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-[15px] font-medium tracking-wide"
          >
            Start Your Project
          </Link>
        </motion.section>
      </div>
    </div>
  );
}