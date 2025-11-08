// app/terms/page.tsx
'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: 'Services Description',
      content: `UpwardScript provides AI-powered software development services, including but not limited to:

• Custom web application development
• Mobile application development
• AI/ML solution development
• UI/UX design services
• Technical consulting
• Maintenance and support services

All services are provided on a project basis as outlined in individual service agreements.`
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: `Unless otherwise specified in a separate agreement:

• UpwardScript retains all rights to its pre-existing intellectual property
• Client retains all rights to their pre-existing intellectual property
• Work product developed specifically for the client is transferred to the client upon full payment
• UpwardScript may use completed projects in its portfolio unless otherwise agreed`
    },
    {
      icon: Shield,
      title: 'Confidentiality',
      content: `Both parties agree to maintain the confidentiality of proprietary information received from the other party:

• Confidential information includes business plans, technical information, and trade secrets
• The obligation of confidentiality survives termination of these terms
• Information must be kept secure and only used for the intended business purpose
• Exceptions include information that becomes publicly available through no fault of the receiving party`
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: `To the maximum extent permitted by law:

• UpwardScript's total liability shall not exceed the amount paid by the client for services
• We are not liable for indirect, special, or consequential damages
• Liability limitations do not apply to damages caused by gross negligence or intentional misconduct
• Clients are responsible for backing up their data and systems`
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
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 15, 2024
          </p>
        </motion.div>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            Please read these Terms of Service carefully before using our services. 
            By accessing or using our services, you agree to be bound by these terms.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed text-[15px]">
                    {section.content}
                  </pre>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Contact
          </h3>
          <p className="text-gray-600">
            Questions about these Terms of Service? Contact us at legal@upwardscript.in
          </p>
        </motion.div>
      </div>
    </div>
  );
}