'use client';

import { motion } from 'framer-motion';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const testimonials = [
  {
    quote:
      'Excellent work and great solution so thank you UpwardScript. The team delivered beyond our expectations and the results have been phenomenal.',
    name: 'Harsh Dixit',
    title: 'CEO, Tech Startup',
  },
  {
    quote:
      'Outstanding service and attention to detail. Our conversion rates increased significantly after working with UpwardScript.',
    name: 'Priya Sharma',
    title: 'Marketing Director',
  },
  {
    quote:
      'Professional, creative, and results-driven. They transformed our digital presence completely.',
    name: 'Rahul Verma',
    title: 'Product Manager',
  },
  {
    quote:
      'They are extremely reliable and easy to work with. Communication was excellent throughout the entire project.',
    name: 'Neha Kapoor',
    title: 'Founder, Bloom Agency',
  },
  {
    quote:
      'The best decision we made was partnering with UpwardScript. Their results speak for themselves.',
    name: 'Vikram Singh',
    title: 'CTO, FinEdge',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-gray-900 dark:text-gray-100 mb-4 tracking-tight"
          >
            Client Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Hear from the businesses we've helped transform through our partnership and expertise.
          </motion.p>
        </div>

        {/* Infinite Moving Cards */}
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="mt-10"
        />

     
      </div>
    </section>
  );
}
