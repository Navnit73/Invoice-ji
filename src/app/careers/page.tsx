// app/careers/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, Sparkles, Target, Award, Clock, MapPin, ArrowRight, Heart, Zap, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Cutting-Edge Technology',
    description: 'Work with the latest AI, machine learning, and web technologies on innovative projects.'
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Join a team that values collaboration, knowledge sharing, and continuous learning.'
  },
  {
    icon: Target,
    title: 'Meaningful Impact',
    description: 'Build products that solve real-world problems and make a difference for our clients.'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Clear growth paths, mentorship programs, and opportunities for professional development.'
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible working hours, remote options, and a supportive environment for your well-being.'
  },
  {
    icon: Zap,
    title: 'Fast-Paced Environment',
    description: 'Rapidly growing company with opportunities to take on significant responsibilities early.'
  }
];

const openPositions = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Noida / Remote',
    experience: '3-5 years',
    description: 'We\'re looking for an experienced Full Stack Developer to help build and scale our AI-powered products and client solutions.',
    requirements: [
      'Strong experience with React, Next.js, and Node.js',
      'Proficiency in TypeScript and modern JavaScript',
      'Experience with AI/ML integration and APIs',
      'Knowledge of database design and optimization',
      'Experience with cloud platforms (AWS, Vercel)'
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'AI/ML', 'AWS']
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    department: 'AI Research',
    type: 'Full-time',
    location: 'Noida / Remote',
    experience: '2-4 years',
    description: 'Join our AI team to develop and implement machine learning models for our products and client projects.',
    requirements: [
      'Experience with Python and ML frameworks (TensorFlow, PyTorch)',
      'Knowledge of NLP and computer vision techniques',
      'Experience with model deployment and MLOps',
      'Understanding of data preprocessing and feature engineering',
      'Familiarity with cloud AI services'
    ],
    tags: ['Python', 'TensorFlow', 'NLP', 'MLOps', 'AI']
  },
  {
    id: 3,
    title: 'Senior UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Noida / Remote',
    experience: '3-5 years',
    description: 'Create beautiful, intuitive user experiences for our AI products and client applications.',
    requirements: [
      'Strong portfolio of UI/UX design work',
      'Proficiency in Figma and design systems',
      'Experience with user research and testing',
      'Knowledge of accessibility best practices',
      'Understanding of front-end development principles'
    ],
    tags: ['Figma', 'UI/UX', 'Design Systems', 'Research', 'Accessibility']
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Noida / Remote',
    experience: '2-4 years',
    description: 'Help us build and maintain scalable, reliable infrastructure for our growing product suite.',
    requirements: [
      'Experience with Docker, Kubernetes, and containerization',
      'Knowledge of CI/CD pipelines and automation',
      'Familiarity with cloud infrastructure (AWS, GCP)',
      'Understanding of monitoring and logging tools',
      'Experience with infrastructure as code (Terraform)'
    ],
    tags: ['DevOps', 'AWS', 'Kubernetes', 'CI/CD', 'Terraform']
  },
  {
    id: 5,
    title: 'Product Manager',
    department: 'Product',
    type: 'Full-time',
    location: 'Noida',
    experience: '3-5 years',
    description: 'Lead product strategy and development for our AI product portfolio, working closely with engineering and design teams.',
    requirements: [
      'Experience in product management for tech products',
      'Strong analytical and strategic thinking skills',
      'Excellent communication and leadership abilities',
      'Experience with agile development methodologies',
      'Understanding of AI/ML technologies and market trends'
    ],
    tags: ['Product Management', 'Strategy', 'Agile', 'AI', 'Leadership']
  },
  {
    id: 6,
    title: 'Frontend Developer Intern',
    department: 'Engineering',
    type: 'Internship',
    location: 'Noida / Remote',
    experience: '0-1 years',
    description: 'Great opportunity for students and recent graduates to learn and grow with our experienced development team.',
    requirements: [
      'Basic knowledge of HTML, CSS, and JavaScript',
      'Familiarity with React or similar frameworks',
      'Strong problem-solving skills and eagerness to learn',
      'Good communication and teamwork abilities',
      'Portfolio or personal projects are a plus'
    ],
    tags: ['Internship', 'React', 'JavaScript', 'Learning', 'Mentorship']
  }
];

const departments = ['All', 'Engineering', 'AI Research', 'Design', 'Product'];
const jobTypes = ['All', 'Full-time', 'Internship', 'Contract'];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const filteredPositions = openPositions.filter(position => {
    const departmentMatch = selectedDepartment === 'All' || position.department === selectedDepartment;
    const typeMatch = selectedType === 'All' || position.type === selectedType;
    return departmentMatch && typeMatch;
  });

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
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Help us build the future of AI-powered digital solutions. 
            Work on meaningful projects with a talented, passionate team.
          </p>
        </motion.div>

        {/* Why Join Us */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Why UpwardScript?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building more than just products – we're building a culture of innovation and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Perks & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4 tracking-tight">
              Perks & Benefits
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits and a great work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Award, title: 'Competitive Salary', description: 'Industry-standard compensation with regular reviews' },
              { icon: Sparkles, title: 'Learning Budget', description: 'Annual budget for courses, books, and conferences' },
              { icon: Users, title: 'Health Insurance', description: 'Comprehensive medical and dental coverage' },
              { icon: GraduationCap, title: 'Mentorship', description: 'Guidance from experienced industry professionals' },
              { icon: Clock, title: 'Flexible Hours', description: 'Work when you\'re most productive' },
              { icon: MapPin, title: 'Remote Friendly', description: 'Work from anywhere in India' },
              { icon: Zap, title: 'Latest Equipment', description: 'Top-tier hardware and software tools' },
              { icon: Heart, title: 'Wellness Program', description: 'Mental health support and wellness activities' }
            ].map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <perk.icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold mb-2">{perk.title}</h4>
                <p className="text-gray-300 text-sm">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-2 tracking-tight">
                Open Positions
              </h2>
              <p className="text-gray-600">
                {filteredPositions.length} position{filteredPositions.length !== 1 ? 's' : ''} available
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mt-4 lg:mt-0">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Positions List */}
          <div className="space-y-6">
            {filteredPositions.map((position) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedJob(selectedJob === position.id ? null : position.id)}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {position.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {position.experience}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                      {position.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {position.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-900 font-medium group-hover:text-gray-700 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedJob === position.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">Requirements:</h4>
                    <ul className="space-y-2 mb-6">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-[15px] font-medium">
                        Apply for this Position
                      </button>
                      <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-[15px] font-medium">
                        Save for Later
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* No Positions State */}
          {filteredPositions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg mb-4">No positions available</div>
              <p className="text-gray-600 mb-6">We don't have any open positions matching your filters right now.</p>
              <button
                onClick={() => {
                  setSelectedDepartment('All');
                  setSelectedType('All');
                }}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-[15px] font-medium"
              >
                View All Positions
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Culture CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Don't See the Perfect Role?
          </h3>
          <p className="text-gray-600 mb-6 text-[15px] max-w-md mx-auto">
            We're always looking for talented people. Send us your resume and tell us how you can contribute.
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-[15px] font-medium tracking-wide">
            Send General Application
          </button>
        </motion.div>
      </div>
    </div>
  );
}