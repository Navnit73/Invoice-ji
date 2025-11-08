// app/team/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, Award, Heart, Zap, Target, Globe } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    expertise: 'AI/ML, Product Strategy, Business Development',
    bio: 'Alex founded UpwardScript with a vision to bridge the gap between cutting-edge AI technology and practical business applications. With over 8 years in the tech industry.',
    image: '/api/placeholder/400/400',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: 'Full Stack Development, System Architecture, DevOps',
    bio: 'Sarah leads our technical team with expertise in scalable architecture and modern development practices. She ensures our solutions are robust, secure, and performant.',
    image: '/api/placeholder/400/400',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Mike Rodriguez',
    role: 'Lead Designer',
    expertise: 'UI/UX Design, Product Design, Design Systems',
    bio: 'Mike combines aesthetic excellence with user-centered design principles to create intuitive and beautiful digital experiences that users love.',
    image: '/api/placeholder/400/400',
    social: {
      linkedin: '#',
      dribbble: '#'
    }
  },
  {
    name: 'Emily Davis',
    role: 'Senior AI Engineer',
    expertise: 'Machine Learning, Natural Language Processing, Computer Vision',
    bio: 'Emily specializes in developing intelligent systems that learn and adapt. Her work powers our most advanced AI products and solutions.',
    image: '/api/placeholder/400/400',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'Full Stack Developer',
    expertise: 'React, Node.js, Cloud Infrastructure',
    bio: 'David builds scalable web applications with a focus on performance and user experience. He loves tackling complex technical challenges.',
    image: '/api/placeholder/400/400',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager',
    expertise: 'Agile Methodology, User Research, Product Strategy',
    bio: 'Priya ensures our projects deliver maximum value by aligning technical solutions with business objectives and user needs.',
    image: '/api/placeholder/400/400',
    social: {
      linkedin: '#'
    }
  }
];

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe the best results come from working closely with our clients and each other.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We never compromise on quality and always strive to deliver beyond expectations.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We genuinely love what we do and it shows in the energy we bring to every project.'
  },
  {
    icon: Globe,
    title: 'Impact',
    description: 'We focus on creating solutions that make a real difference for our clients and their users.'
  },
  {
    icon: Award,
    title: 'Growth',
    description: 'We invest in continuous learning and development to stay at the forefront of our industry.'
  }
];

const stats = [
  { number: '15+', label: 'Team Members' },
  { number: '8', label: 'Years Average Experience' },
  { number: '50+', label: 'Projects Delivered' },
  { number: '12', label: 'Countries Served' }
];

export default function TeamPage() {
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
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A passionate group of developers, designers, and AI specialists 
            dedicated to building exceptional digital experiences.
          </p>
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
              <div className="text-3xl font-light text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Our Leadership & Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know the talented individuals behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="text-center group"
              >
                {/* Avatar */}
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                </div>

                {/* Info */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {member.expertise}
                </p>
                <p className="text-gray-600 leading-relaxed text-[15px] mb-4 line-clamp-3">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                      <span className="text-xs font-medium">in</span>
                    </button>
                  )}
                  {member.social.github && (
                    <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                      <span className="text-xs font-medium">gh</span>
                    </button>
                  )}
                  {member.social.twitter && (
                    <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                      <span className="text-xs font-medium">tw</span>
                    </button>
                  )}
                  {member.social.dribbble && (
                    <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                      <span className="text-xs font-medium">db</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture & Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-12 border border-gray-200 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Our Culture & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide how we work and collaborate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hiring Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented people who share our passion for technology and innovation.
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-[15px] font-medium tracking-wide">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  );
}