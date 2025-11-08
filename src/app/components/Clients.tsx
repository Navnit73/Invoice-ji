'use client';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    'Google', 'Microsoft', 'Apple', 'Amazon', 'Netflix', 'Spotify',
    'Adobe', 'Slack', 'Airbnb', 'Uber', 'Twitter', 'Facebook'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We've helped some of the world's most innovative companies build 
            digital products that matter.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-16 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-gray-400 text-xl font-semibold hover:text-black transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;