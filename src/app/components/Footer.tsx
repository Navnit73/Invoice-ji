'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const contactDetails = [
    { icon: Mail, text: 'support@invoiceji.com' },
    { icon: Phone, text: '+91 7355087072' },
    { icon: MapPin, text: 'Noida, India' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-950 text-gray-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 max-w-6xl mx-auto flex flex-col gap-10 lg:grid lg:grid-cols-4"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6 text-center sm:text-left">
            <Link href="/" className="flex justify-center sm:justify-start items-center gap-3 group">
              <Image
                src="https://res.cloudinary.com/ddxu2wqfm/image/upload/v1762098813/invoice_1_xf2zk7.png"
                alt="Invoice Ji Logo"
                width={38}
                height={38}
                className="rounded-md object-contain"
              />
              <span className="text-xl font-light tracking-tight group-hover:text-white transition-colors">
                Invoice Ji
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed text-[15px] max-w-xs mx-auto sm:mx-0">
              Create, send, and manage professional invoices effortlessly. Designed for freelancers and small businesses.
            </p>

            {/* Social */}
            <div className="flex justify-center sm:justify-start gap-3">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 3-column Menu (Product | Company | Contact) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 sm:gap-8 lg:col-span-3 text-center sm:text-left"
          >
            {/* Product */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm tracking-wide">PRODUCT</h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  { name: 'Features', href: '/#features' },
                  { name: 'Pricing', href: '/#pricing' },
                  { name: 'FAQs', href: '/#faq' },
                  { name: 'Login', href: '/login' },
                  { name: 'Sign Up', href: '/signup' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-300 text-[15px] block py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm tracking-wide">COMPANY</h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Contact', href: '/#contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-300 text-[15px] block py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm tracking-wide">CONTACT</h3>
              <ul className="space-y-2 text-gray-400">
                {contactDetails.map((item, idx) => (
                  <li key={idx} className="flex justify-center sm:justify-start items-start gap-2">
                    <item.icon className="w-4 h-4 text-gray-400 mt-1" />
                    <span className="text-[15px]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm max-w-6xl mx-auto"
        >
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Invoice Ji. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
