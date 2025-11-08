'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies = [
    { name: 'Next.js', category: 'Frontend', level: 95 },
    { name: 'React', category: 'Frontend', level: 98 },
    { name: 'TypeScript', category: 'Language', level: 92 },
    { name: 'Node.js', category: 'Backend', level: 90 },
    { name: 'Python', category: 'Language', level: 88 },
    { name: 'AWS', category: 'Cloud', level: 85 },
    { name: 'React Native', category: 'Mobile', level: 87 },
    { name: 'Three.js', category: '3D', level: 80 },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We work with cutting-edge technologies to deliver high-performance, 
            scalable, and maintainable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-semibold">{tech.name}</span>
                <span className="text-gray-400 text-sm">{tech.category}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${tech.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                />
              </div>
              <div className="text-right mt-2">
                <span className="text-blue-400 text-sm font-semibold">
                  {tech.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;