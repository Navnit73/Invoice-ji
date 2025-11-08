'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Backend Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      type: 'Full-time',
      location: 'Remote'
    }
  ];

  return (
    <section id="careers" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team 
            and help us build amazing digital products.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors duration-200">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-black mt-4 lg:mt-0 group-hover:translate-x-2 transition-transform duration-200" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Don't see a position that matches your skills?
            </p>
            <button className="border border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-200 font-medium text-lg">
              Send Open Application
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers;