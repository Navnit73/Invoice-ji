'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(formData);

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight"
          >
            Need Help or Have a Question?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Our team is here to help you with onboarding, billing, and product support.
            Get in touch and we’ll get back to you as soon as possible.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 max-w-5xl mx-auto">
          
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 bg-white text-sm sm:text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@invoiceji.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 bg-white text-sm sm:text-base"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your issue or request..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 bg-white text-sm sm:text-base resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-3.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-[15px] font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight">
                Talk to Our Support Team
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
                Whether it’s about your invoice setup, client management, or payment tracking — our support team is here to make sure everything runs smoothly.
              </p>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email Support',
                  content: 'support@invoiceji.com',
                  href: 'mailto:support@invoiceji.com',
                  description: 'We respond within 24 hours'
                },
                {
                  icon: Phone,
                  title: 'Customer Care',
                  content: '+91 7355087072',
                  href: 'tel:+917355087072',
                  description: 'Mon–Sat, 9am–7pm IST'
                },
                {
                  icon: MessageSquare,
                  title: 'Live Chat',
                  content: 'Chat from Dashboard',
                  href: '#',
                  description: 'Instant help from our team'
                },
                {
                  icon: MapPin,
                  title: 'Head Office',
                  content: 'Noida, India',
                  href: '#',
                  description: 'Serving users across India'
                }
              ].map((item) => (
                <motion.a
                  key={item.title}
                  variants={itemVariants}
                  href={item.href}
                  className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 group hover:bg-gray-50 rounded-xl transition-colors duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-900 text-sm sm:text-[15px] mb-0.5 sm:mb-1">{item.content}</p>
                    <p className="text-gray-500 text-xs sm:text-sm">{item.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
