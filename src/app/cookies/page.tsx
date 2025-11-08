// app/cookies/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';

export default function CookiesPage() {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'Required for the website to function properly',
      purpose: 'Authentication, security, and core functionality',
      duration: 'Session'
    },
    {
      name: 'Performance Cookies',
      description: 'Help us understand how visitors interact with our website',
      purpose: 'Analytics and performance measurement',
      duration: '2 years'
    },
    {
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      purpose: 'Remember preferences and settings',
      duration: '1 year'
    },
    {
      name: 'Targeting Cookies',
      description: 'Used to deliver relevant advertisements',
      purpose: 'Marketing and advertising',
      duration: '6 months'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 15, 2024
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <p className="text-gray-700 leading-relaxed">
            This Cookie Policy explains how UpwardScript uses cookies and similar technologies 
            to recognize you when you visit our website. It explains what these technologies are 
            and why we use them, as well as your rights to control our use of them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            What are cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cookies are small data files that are placed on your computer or mobile device when 
            you visit a website. Cookies are widely used by website owners to make their websites 
            work, or to work more efficiently, as well as to provide reporting information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Types of Cookies We Use
          </h2>
          <div className="space-y-6">
            {cookieTypes.map((cookie, index) => (
              <div key={cookie.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {cookie.name}
                    </h3>
                    <p className="text-gray-600 mb-3 text-[15px]">
                      {cookie.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Purpose:</span>
                        <p className="text-gray-600">{cookie.purpose}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Duration:</span>
                        <p className="text-gray-600">{cookie.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-900 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-light mb-4 tracking-tight">
            Cookie Preferences
          </h2>
          <p className="text-gray-300 mb-6">
            You can control and/or delete cookies as you wish. You can delete all cookies that are 
            already on your computer and you can set most browsers to prevent them from being placed.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              <Settings className="w-4 h-4 inline mr-2" />
              Manage Preferences
            </button>
            <button className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors font-medium">
              <Eye className="w-4 h-4 inline mr-2" />
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}