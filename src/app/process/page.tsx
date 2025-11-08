// app/process/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code, TestTube, Rocket, Users, Shield, Zap, Clock, Target } from 'lucide-react';

const phases = [
  {
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'We begin by deeply understanding your business goals, target audience, and technical requirements.',
    steps: [
      'Requirement analysis workshop',
      'Competitor research',
      'Technology stack recommendation',
      'Project roadmap creation',
      'Success metrics definition'
    ],
    duration: '1-2 weeks',
    deliverables: ['Project Brief', 'Technical Specification', 'Timeline']
  },
  {
    icon: Palette,
    title: 'Design & Prototyping',
    description: 'Our design team creates intuitive user experiences and beautiful interfaces that align with your brand.',
    steps: [
      'User experience design',
      'Wireframing & prototyping',
      'UI design system creation',
      'User testing & feedback',
      'Design iteration'
    ],
    duration: '2-3 weeks',
    deliverables: ['Wireframes', 'Design System', 'Interactive Prototype']
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Our developers build robust, scalable solutions using modern technologies and best practices.',
    steps: [
      'Agile development sprints',
      'Code reviews & pair programming',
      'Continuous integration',
      'API development',
      'Third-party integrations'
    ],
    duration: '4-8 weeks',
    deliverables: ['Development Updates', 'Staging Environment', 'Code Repository']
  },
  {
    icon: TestTube,
    title: 'Quality Assurance',
    description: 'Comprehensive testing ensures your product works flawlessly across all devices and scenarios.',
    steps: [
      'Automated testing',
      'Manual testing',
      'Performance testing',
      'Security testing',
      'User acceptance testing'
    ],
    duration: '1-2 weeks',
    deliverables: ['Test Reports', 'Bug Fixes', 'Quality Certification']
  },
  {
    icon: Rocket,
    title: 'Deployment & Launch',
    description: 'We handle the entire deployment process and ensure a smooth launch experience.',
    steps: [
      'Production deployment',
      'DNS configuration',
      'SSL certification',
      'Performance optimization',
      'Go-live support'
    ],
    duration: '1 week',
    deliverables: ['Live Product', 'Documentation', 'Training']
  },
  {
    icon: Users,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your product running smoothly and securely.',
    steps: [
      '24/7 monitoring',
      'Regular updates',
      'Security patches',
      'Performance optimization',
      'Feature enhancements'
    ],
    duration: 'Ongoing',
    deliverables: ['Support Portal', 'Monthly Reports', 'Update Roadmap']
  }
];

const methodologies = [
  {
    icon: Zap,
    title: 'Agile Development',
    description: 'We work in 2-week sprints with regular demos and feedback sessions.'
  },
  {
    icon: Shield,
    title: 'Quality First',
    description: 'Comprehensive testing and code reviews ensure top-notch quality.'
  },
  {
    icon: Users,
    title: 'Client Collaboration',
    description: 'You’re involved throughout the process with transparent communication.'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable business results and ROI.'
  }
];

export default function ProcessPage() {
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Our Development Process
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A transparent, collaborative approach to building exceptional digital products 
            that drive real business results.
          </p>
        </motion.div>

        {/* Methodologies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Our Methodologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our approach to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={methodology.title}
                variants={itemVariants}
                className="text-center p-6"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <methodology.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {methodology.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {methodology.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Our 6-Phase Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to launch and beyond, we guide you through every step
            </p>
          </div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                variants={itemVariants}
                className="flex flex-col lg:flex-row gap-8 items-start"
              >
                {/* Phase Number & Icon */}
                <div className="flex items-center gap-4 lg:w-48 lg:flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="lg:hidden">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-gray-500">Phase {index + 1}</span>
                      <span className="text-gray-300">•</span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {phase.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="hidden lg:flex items-center gap-4 mb-2">
                    <span className="text-sm text-gray-500">Phase {index + 1}</span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {phase.duration}
                    </div>
                  </div>
                  <h3 className="hidden lg:block text-2xl font-semibold text-gray-900 mb-3">
                    {phase.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                    {phase.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Steps */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Steps</h4>
                      <ul className="space-y-2">
                        {phase.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-3 text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Deliverables</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <span key={delIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-12 border border-gray-200"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Collaboration Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use modern tools to ensure seamless communication and project transparency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { name: 'Slack', description: 'Real-time communication' },
              { name: 'Figma', description: 'Design collaboration' },
              { name: 'GitHub', description: 'Code management' },
              { name: 'Jira', description: 'Project tracking' },
              { name: 'Notion', description: 'Documentation' },
              { name: 'Zoom', description: 'Video meetings' },
              { name: 'Vercel', description: 'Deployment' },
              { name: 'Sentry', description: 'Error monitoring' }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rounded" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{tool.name}</h4>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-6 text-[15px] max-w-md mx-auto">
            Let's discuss how our process can help bring your vision to life.
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-[15px] font-medium tracking-wide">
            Start a Project
          </button>
        </motion.div>
      </div>
    </div>
  );
}