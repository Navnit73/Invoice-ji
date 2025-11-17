"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, FileText, Server, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      icon: Lock,
      title: "Information We Collect",
      content: `InvoiceJi collects only the data required to operate your account and provide billing services.

• Account details (name, email, phone)
• Business details (GST, address, company info)
• Billing & invoice data
• Usage analytics to improve performance`
    },
    {
      icon: ShieldCheck,
      title: "How We Use Your Information",
      content: `We use your information strictly for operating and improving our services.

• To generate invoices and business reports
• To communicate service updates
• To maintain security and prevent misuse
• To enhance product performance`
    },
    {
      icon: FileText,
      title: "Data Sharing Policy",
      content: `Your information is **never sold**.

We may share data only with:
• Trusted service providers (cloud hosting, payment gateways)
• Government authorities when legally required
• Our internal technical team for support`
    },
    {
      icon: Server,
      title: "Data Security",
      content: `InvoiceJi uses industry-standard security and encrypted infrastructure.

• Encrypted storage
• Secure servers
• Regular security audits
• Strict access control within our team`
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: `You have full control of your data at any time.

• Download your data
• Request account deletion
• Update your profile
• Opt out of non-essential communication`
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-semibold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-gray-200 pb-10"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {section.title}
                    </h2>
                    <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed text-[15px]">
                      {section.content}
                    </pre>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 p-8 bg-gray-50 rounded-xl border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Contact Us
          </h3>
          <p className="text-gray-600">
            For privacy-related questions, contact:  
            <span className="font-medium text-gray-800"> support@invoiceji.com</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
