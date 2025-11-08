'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: 'Free',
    description: 'Perfect for getting started.',
    price: '$0',
    subtext: 'Forever',
    features: [
      '1 client',
      '5 invoices/month',
      'Basic analytics',
      'Email support',
      'PDF export',
      'Dark mode',
    ],
    buttonText: 'Current Plan',
  },
  {
    id: 2,
    name: 'Starter',
    description: 'For growing freelancers.',
    price: '$10',
    subtext: 'per month',
    popular: true,
    features: [
      'Up to 10 clients',
      '50 invoices/month',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
      'Invoice templates',
    ],
    buttonText: 'Upgrade Now',
  },
  {
    id: 3,
    name: 'Professional',
    description: 'For established businesses.',
    price: '$20',
    subtext: 'per month',
    features: [
      'Unlimited clients',
      'Unlimited invoices',
      'Full analytics dashboard',
      'Custom branding',
      'Team collaboration',
      'Payment reminders',
    ],
    buttonText: 'Upgrade Now',
  },
];

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="pricing" className="py-32 bg-gray-50 dark:bg-neutral-900">
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
            Pricing Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Simple, transparent pricing to suit freelancers, startups, and growing businesses.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'border-gray-900 bg-gray-900 text-white scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3
                  className={`text-2xl font-semibold mb-3 ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-[15px] mb-6 ${
                    plan.popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex flex-col items-center justify-center">
                  <span
                    className={`text-4xl font-light ${
                      plan.popular ? 'text-white' : 'text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm mt-1 ${
                      plan.popular ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {plan.subtext}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-gray-700' : 'bg-gray-100 dark:bg-neutral-700'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.popular ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-[15px] ${
                        plan.popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-lg font-medium text-[15px] transition-colors ${
                  plan.popular
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-gray-200 dark:border-neutral-700"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-[15px]">
            Need a custom solution for your business?
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-[15px] font-medium tracking-wide dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
