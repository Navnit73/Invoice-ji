'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const socialIcons = [
    { icon: Linkedin, href: 'https://linkedin.com/company/upwardscript', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/upwardscript', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/upwardscript', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@upwardscript', label: 'YouTube' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'connect@upwardscript.in' },
    { icon: Phone, text: '+91 70072 88376' },
    { icon: MapPin, text: 'Noida, India' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white"
    >
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 py-16 max-w-6xl mx-auto"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/light-logo.png"
                  alt="UpwardScript Logo"
                  width={36}
                  height={36}
                  className="rounded-md object-contain"
                  priority
                />
              </motion.div>
              <span className="text-xl font-light tracking-tight group-hover:text-gray-300 transition-colors">
                UpwardScript
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed text-[15px]">
              We craft digital experiences that help businesses thrive in the modern landscape through thoughtful design and technical excellence.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-medium text-gray-200 mb-6 text-[15px] tracking-wide">SERVICES</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                'Web Development',
                'Mobile Applications',
                'UI/UX Design',
                'Cloud Solutions',
                'Digital Transformation',
                'AI Solutions'
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-[15px] hover:text-white transition-colors duration-300 block py-1"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="font-medium text-gray-200 mb-6 text-[15px] tracking-wide">COMPANY</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Process', href: '/process' },
                { name: 'Our Team', href: '/team' },
                { name: 'Careers', href: '/careers' },
                { name: 'Press & Media', href: '/press' },
                { name: 'Partners', href: '/partners' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] hover:text-white transition-colors duration-300 block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="font-medium text-gray-200 mb-6 text-[15px] tracking-wide">RESOURCES</h3>
            <ul className="space-y-3 text-gray-400 mb-8">
              {[
                { name: 'Case Studies', href: '/projects' },
                { name: 'Status', href: '/status' },
                { name: 'Documentation', href: '#' },
                { name: 'Support', href: '/#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] hover:text-white transition-colors duration-300 block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-medium text-gray-200 mb-6 text-[15px] tracking-wide">CONTACT</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-[15px] text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-[15px] max-w-6xl mx-auto">
            <p>&copy; {new Date().getFullYear()} UpwardScript. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}