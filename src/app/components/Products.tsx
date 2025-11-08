// app/components/Products.tsx
'use client';

import { motion } from 'framer-motion';
import { Sparkles, Bot, FileText, Zap, Shield, BarChart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AI Resume Builder',
    description: 'Intelligent resume creation platform that uses AI to optimize content, format for ATS systems, and provide personalized career recommendations.',
    icon: FileText,
    features: [
      'AI-powered content optimization',
      'ATS-friendly formatting',
      'Real-time feedback and scoring',
      'Multiple template designs',
      'Career path recommendations'
    ],
    color: 'blue',
    status: 'Live'
  },
  {
    id: 2,
    name: 'Multi-Tenant Chatbot',
    description: 'Scalable chatbot platform that serves multiple clients with custom AI training, analytics dashboard, and seamless integration capabilities.',
    icon: Bot,
    features: [
      'Multi-tenant architecture',
      'Custom AI model training',
      'Real-time analytics dashboard',
      'API integration ready',
      'White-label solutions'
    ],
    color: 'purple',
    status: 'Live'
  },
  {
    id: 3,
    name: 'AI Analytics Suite',
    description: 'Comprehensive analytics platform with predictive insights, automated reporting, and intelligent data visualization for business intelligence.',
    icon: BarChart,
    features: [
      'Predictive analytics',
      'Automated reporting',
      'Custom dashboard creation',
      'Real-time data processing',
      'AI-powered insights'
    ],
    color: 'green',
    status: 'Coming Soon'
  }
];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  green: 'from-green-500 to-green-600'
};

const statusColors = {
  'Live': 'bg-green-100 text-green-800',
  'Coming Soon': 'bg-blue-100 text-blue-800',
  'Beta': 'bg-yellow-100 text-yellow-800'
};

export default function Products() {
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
    <section id="products" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-gray-900 mb-4 tracking-tight"
          >
            Our AI Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our suite of AI-powered products designed to solve real-world problems 
            and drive digital transformation across industries.
          </motion.p>
        </div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClasses[product.color]} flex items-center justify-center`}>
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[product.status]}`}>
                  {product.status}
                </span>
              </div>

              {/* Product Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                {product.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                {product.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
                    <Zap className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-medium text-[15px] bg-gradient-to-r ${colorClasses[product.color]} text-white hover:shadow-lg transition-all`}
              >
                {product.status === 'Coming Soon' ? 'Get Notified' : 'Learn More'}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-gray-200"
        >
          <p className="text-gray-600 mb-6 text-[15px]">
            Interested in our AI solutions or need a custom product?
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-[15px] font-medium tracking-wide">
            Schedule a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}