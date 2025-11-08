// app/press/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Newspaper, Download, Mail, Calendar, ExternalLink } from 'lucide-react';

const pressReleases = [
  {
    title: 'UpwardScript Launches AI Resume Builder Platform',
    date: '2024-01-15',
    excerpt: 'New AI-powered platform revolutionizes resume creation with intelligent optimization and ATS-friendly formatting.',
    link: '#',
    category: 'Product Launch'
  },
  {
    title: 'Company Secures $2M in Seed Funding Round',
    date: '2023-11-20',
    excerpt: 'Funding will accelerate product development and expand team to meet growing demand for AI solutions.',
    link: '#',
    category: 'Funding'
  },
  {
    title: 'UpwardScript Named Among Top AI Startups to Watch',
    date: '2023-09-05',
    excerpt: 'Recognized for innovative approach to democratizing AI technology for businesses of all sizes.',
    link: '#',
    category: 'Award'
  },
  {
    title: 'Partnership Announced with Leading Tech Accelerator',
    date: '2023-07-12',
    excerpt: 'Strategic partnership to provide AI development services to portfolio companies.',
    link: '#',
    category: 'Partnership'
  }
];

const mediaFeatures = [
  {
    outlet: 'TechCrunch',
    title: 'How UpwardScript is Making AI Accessible for SMEs',
    date: '2024-01-10',
    link: '#',
    logo: '/api/placeholder/100/40'
  },
  {
    outlet: 'Forbes',
    title: 'The Rise of AI-First Development Studios',
    date: '2023-12-15',
    link: '#',
    logo: '/api/placeholder/100/40'
  },
  {
    outlet: 'The Economic Times',
    title: 'Indian AI Startup UpwardScript Expands Global Reach',
    date: '2023-11-08',
    link: '#',
    logo: '/api/placeholder/100/40'
  },
  {
    outlet: 'YourStory',
    title: 'UpwardScript: Building the Future of Digital Products',
    date: '2023-10-22',
    link: '#',
    logo: '/api/placeholder/100/40'
  }
];

const brandAssets = [
  {
    name: 'Company Logo Pack',
    description: 'High-resolution logos in PNG, SVG, and EPS formats',
    size: '15.2 MB',
    download: '#'
  },
  {
    name: 'Brand Guidelines',
    description: 'Complete brand book with colors, typography, and usage',
    size: '8.7 MB',
    download: '#'
  },
  {
    name: 'Team Photos',
    description: 'High-quality team and office photography',
    size: '45.1 MB',
    download: '#'
  },
  {
    name: 'Product Screenshots',
    description: 'Latest product screenshots and demo images',
    size: '22.3 MB',
    download: '#'
  }
];

export default function PressPage() {
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
            Press & Media
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Latest news, media coverage, and resources for journalists and media professionals.
          </p>
        </motion.div>

        {/* Press Releases */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light text-gray-900 tracking-tight">
              Press Releases
            </h2>
          </div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.article
                key={release.title}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {release.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(release.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {release.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {release.excerpt}
                    </p>

                    <a
                      href={release.link}
                      className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors"
                    >
                      Read Full Release
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Media Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">
            Media Coverage
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaFeatures.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">{feature.outlet}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(feature.date).toLocaleDateString()}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {feature.title}
                </h3>

                <a
                  href={feature.link}
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors text-sm"
                >
                  Read Article
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Brand Assets */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">
            Brand Assets
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {brandAssets.map((asset, index) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {asset.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {asset.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    {asset.size}
                  </span>
                  <a
                    href={asset.download}
                    className="text-gray-900 font-medium hover:text-gray-700 transition-colors text-sm"
                  >
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-12 text-white text-center"
        >
          <Newspaper className="w-12 h-12 mx-auto mb-6 text-gray-300" />
          <h2 className="text-3xl font-light mb-4 tracking-tight">
            Media Contact
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
            For media inquiries, interview requests, or additional information, please contact our press team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:press@upwardscript.in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              press@upwardscript.in
            </a>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              +91 12345 67890
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}