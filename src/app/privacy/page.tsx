// app/partners/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, Hand, TrendingUp, Award, Zap, Globe } from 'lucide-react';

const partnershipTypes = [
  {
    icon: Users,
    title: 'Technology Partnerships',
    description: 'Integrate our AI solutions with your platform or leverage our technology in your products.',
    benefits: [
      'API access and documentation',
      'Technical support and training',
      'Co-marketing opportunities',
      'Revenue sharing models'
    ]
  },
  {
    icon: Hand,
    title: 'Agency Referral Program',
    description: 'Refer clients to us and earn commissions while we handle the technical development.',
    benefits: [
      'Generous referral commissions',
      'Dedicated account management',
      'White-label options available',
      'Project progress transparency'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Reseller Opportunities',
    description: 'Resell our AI products and services under your own brand with full support.',
    benefits: [
      'White-label solutions',
      'Training and certification',
      'Sales and marketing materials',
      'Technical support backend'
    ]
  },
  {
    icon: Globe,
    title: 'Integration Partners',
    description: 'Build integrations between our platforms and create enhanced value for mutual customers.',
    benefits: [
      'Development resources',
      'Joint go-to-market strategies',
      'Technical documentation',
      'Co-selling opportunities'
    ]
  }
];

const currentPartners = [
  {
    name: 'TechCorp',
    logo: '/api/placeholder/120/40',
    type: 'Technology Partner',
    description: 'Leading provider of enterprise software solutions'
  },
  {
    name: 'DesignStudio',
    logo: '/api/placeholder/120/40',
    type: 'Agency Partner',
    description: 'Award-winning digital design agency'
  },
  {
    name: 'CloudSystems',
    logo: '/api/placeholder/120/40',
    type: 'Infrastructure Partner',
    description: 'Cloud infrastructure and hosting provider'
  },
  {
    name: 'StartupHub',
    logo: '/api/placeholder/120/40',
    type: 'Ecosystem Partner',
    description: 'Startup accelerator and innovation hub'
  }
];

const benefits = [
  {
    icon: Award,
    title: 'Revenue Sharing',
    description: 'Earn competitive commissions and revenue shares on referred business.'
  },
  {
    icon: Zap,
    title: 'Technical Support',
    description: 'Access to our technical team and comprehensive documentation.'
  },
  {
    icon: Users,
    title: 'Dedicated Resources',
    description: 'Get dedicated account management and technical resources.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Tap into new markets and revenue streams with our solutions.'
  }
];

export default function PartnersPage() {
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
            Partnership Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join forces with UpwardScript to deliver exceptional AI solutions 
            and create mutual growth opportunities.
          </p>
        </motion.div>

        {/* Partnership Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the partnership model that best fits your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {type.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                  {type.description}
                </p>

                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies and organizations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm font-medium mb-2">
                  {partner.type}
                </p>
                <p className="text-gray-500 text-xs">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4 tracking-tight">
              Partner Benefits
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive support and resources to ensure your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
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
          className="text-center"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Ready to Partner With Us?
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
            Let's discuss how we can create mutual success together.
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-[15px] font-medium tracking-wide">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </div>
  );
}