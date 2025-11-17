// app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Clock, MapPin, Sparkles } from 'lucide-react';

const stats = [
  { icon: Users, value: '5,000+', label: 'Active Users' },
  { icon: Award, value: '1M+', label: 'Invoices Generated' },
  { icon: Clock, value: '2 Min', label: 'Avg Invoice Creation Time' },
  { icon: Target, value: '99.9%', label: 'Uptime Reliability' }
];

const values = [
  {
    icon: Sparkles,
    title: 'Ease & Simplicity',
    description:
      'Invoiceji is built to make invoicing effortless for freelancers, agencies, and small businesses. No complexity—just smooth workflows.'
  },
  {
    icon: Users,
    title: 'Customer-Centered',
    description:
      'We design every feature with your real challenges in mind—faster billing, easier tracking, and better cashflow management.'
  },
  {
    icon: Target,
    title: 'Accuracy & Reliability',
    description:
      'Each document, calculation, and report is generated with precision so businesses operate with confidence and clarity.'
  }
];

const team = [
  {
    name: 'Navnit Rai',
    role: 'Founder & Product Lead',
    expertise: 'Full Stack Development, SaaS Architecture',
    image: '/api/placeholder/400/400'
  },
  {
    name: 'Ananya Sharma',
    role: 'Backend Engineer',
    expertise: 'Node.js, API Design, Billing Systems',
    image: '/api/placeholder/400/400'
  },
  {
    name: 'Rohit Kumar',
    role: 'Frontend Developer',
    expertise: 'Vue.js, UI Engineering',
    image: '/api/placeholder/400/400'
  },
  {
    name: 'Simran Verma',
    role: 'UI/UX Designer',
    expertise: 'Product Design, User Experience',
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
        ease: 'easeOut'
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
            About Invoiceji
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Invoiceji is a smart, fast, and modern invoicing platform helping
            businesses automate billing, manage clients, and get paid on time—without
            complexity.
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
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To simplify the financial life of small businesses by offering powerful
                automation, clean workflows, and lightning-fast invoicing tools that anyone
                can use without training.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <MapPin className="w-5 h-5" />
                <span>Built in India • Used by businesses worldwide</span>
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
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-gray-700" />
              </div>
              <div className="text-3xl font-light text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
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
              What Drives Invoiceji
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The foundation behind our simple, powerful billing platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div key={value.title} variants={itemVariants} className="text-center p-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Meet the People Behind Invoiceji
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A small but mighty team building tools that help businesses stay ahead
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div key={member.name} variants={itemVariants} className="text-center group">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
