// app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Clock, MapPin, Sparkles } from 'lucide-react';

const stats = [
  { icon: Users, value: '15+', label: 'Team Members' },
  { icon: Award, value: '50+', label: 'Projects Completed' },
  { icon: Clock, value: '3+', label: 'Years Experience' },
  { icon: Target, value: '98%', label: 'Client Satisfaction' }
];

const values = [
  {
    icon: Sparkles,
    title: 'Innovation First',
    description: 'We stay at the forefront of technology, constantly exploring new AI and development trends to deliver cutting-edge solutions.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We believe in building long-term relationships, working closely with our clients to understand their unique challenges and goals.'
  },
  {
    icon: Target,
    title: 'Quality Focus',
    description: 'Every project receives our full attention to detail, ensuring pixel-perfect execution and robust, scalable architecture.'
  }
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    expertise: 'AI/ML, Product Strategy',
    image: '/api/placeholder/400/400'
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    expertise: 'Full Stack Development, Architecture',
    image: '/api/placeholder/400/400'
  },
  {
    name: 'Mike Rodriguez',
    role: 'Lead Designer',
    expertise: 'UI/UX, Product Design',
    image: '/api/placeholder/400/400'
  },
  {
    name: 'Emily Davis',
    role: 'AI Engineer',
    expertise: 'Machine Learning, NLP',
    image: '/api/placeholder/400/400'
  }
];

export default function AboutPage() {
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
            About UpwardScript
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're a passionate team of developers, designers, and AI specialists 
            dedicated to building digital products that make a difference.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
            <motion.div
              variants={itemVariants}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To empower businesses with intelligent, scalable digital solutions 
                that drive growth, enhance user experiences, and transform industries 
                through cutting-edge AI technology.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <MapPin className="w-5 h-5" />
                <span>Based in Noida, India • Serving clients worldwide</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-gray-700" />
              </div>
              <div className="text-3xl font-light text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center p-6"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs">
                  {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}