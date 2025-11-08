// app/components/Contact.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(formData);
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-32 bg-white">
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
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to start your next project? Let's discuss how we can help bring your ideas to life.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 bg-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 bg-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 bg-white resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-[15px] font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
                Let's start a conversation
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                We're here to help you bring your digital ideas to life. Whether you're starting a new project or looking to improve an existing one, let's discuss how we can work together.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'connect@upwardscript.in',
                  href: 'mailto:connect@upwardscript.in',
                  description: 'Send us an email anytime'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+91 70072 88376',
                  href: 'tel:+917007288376',
                  description: 'Mon-Fri from 9am to 6pm'
                },
                {
                  icon: MapPin,
                  title: 'Office',
                  content: 'Noida, India',
                  href: '#',
                  description: 'Based in Noida, working worldwide'
                }
              ].map((item, index) => (
                <motion.a
                  key={item.title}
                  variants={itemVariants}
                  href={item.href}
                  className="flex items-start gap-4 p-4 group hover:bg-gray-50 rounded-xl transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-900 text-[15px] mb-1">{item.content}</p>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Response Time */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-50 rounded-xl border border-gray-200"
            >
              <h4 className="font-medium text-gray-900 mb-2">Response Time</h4>
              <p className="text-gray-600 text-[15px]">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}