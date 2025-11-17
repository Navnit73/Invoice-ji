// app/terms/page.tsx
'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: 'Services Description',
      content: `Invoiceji provides online invoicing, billing, expense tracking, client management, and payment workflow tools. Services include but are not limited to:

• Invoice creation and customization
• Client and payment tracking
• Estimate and quotation generation
• Expense and record management
• Automated reminders and reporting
• Cloud-based data storage
• Customer support and onboarding

All services are provided on a subscription basis and may vary based on the selected plan.`
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: `Unless otherwise specified in a separate written agreement:

• Invoiceji retains all rights to the platform, software, design, and underlying technology
• Users retain ownership of the content they upload, such as invoices, client details, and business information
• Generated documents (invoices, quotes, reports) belong fully to the user
• Users are granted a non-exclusive, non-transferable license to use the platform for business purposes
• Invoiceji may showcase anonymized usage examples unless the user requests otherwise`
    },
    {
      icon: Shield,
      title: 'Confidentiality',
      content: `Both Invoiceji and the user agree to protect confidential information exchanged during usage of the service:

• Confidential information includes business data, client details, financial records, and login credentials
• All information stored on the platform is encrypted and handled securely
• Neither party may disclose confidential information without consent
• These obligations continue even after the user stops using the service
• Exceptions apply if information becomes public through no fault of the receiving party or is required by law`
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: `To the fullest extent permitted by law:

• Invoiceji's total liability is limited to the amount paid by the user in the last billing cycle
• Invoiceji is not responsible for loss of revenue, data, profits, or business opportunities
• Users are responsible for maintaining backups of exported invoices and data
• Invoiceji is not liable for downtime caused by third-party services, maintenance, or internet connectivity issues
• These limitations do not apply in cases of intentional misconduct or legal violations`
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
            Last updated: January 20, 2025
          </p>
        </motion.div>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            Please read these Terms of Service carefully before using Invoiceji. 
            By accessing or using our platform, you agree to be bound by these terms.
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
            Questions about these Terms of Service? Contact us at support@invoiceji.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}
