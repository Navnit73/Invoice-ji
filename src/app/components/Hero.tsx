// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
  
    <section id="home" className="pt-32 pb-20 bg-white overflow-hidden">
 
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8"
          >
            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
            <span className="text-gray-700 font-medium text-sm tracking-wide">
              Invoicing Has Never Been Easier Than This
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight tracking-tight"
          >
            Effortless{" "}
            <motion.span
              className="text-gray-700 inline-block"
              animate={floatAnimation}
            >
              Invoicing
            </motion.span>
            <br />
            For{" "}
            <motion.span
              className="text-gray-900 inline-block"
              animate={{
                background: [
                  "linear-gradient(45deg, #1f2937, #374151)",
                  "linear-gradient(45deg, #374151, #1f2937)",
                  "linear-gradient(45deg, #1f2937, #374151)",
                ],
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Freelancer
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
          Create, send, and track invoices in seconds. Simplify billing and get paid faster.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-[15px] font-medium flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 font-medium group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Play className="w-5 h-5 fill-current" />
              </div>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "3+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3 + 1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200"
              >
                <motion.div
                  className="text-3xl font-light text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.3 + 1.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Subtle Floating Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-gray-300 rounded-full opacity-30"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-gray-400 rounded-full opacity-20"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-gray-500 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
}
