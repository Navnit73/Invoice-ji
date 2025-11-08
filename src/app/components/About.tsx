'use client';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Team Members' },
    { icon: Award, number: '100+', label: 'Projects Delivered' },
    { icon: Globe, number: '15+', label: 'Countries Served' },
    { icon: Heart, number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-black mb-8">
              We are UpwardScript
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A digital product studio passionate about creating meaningful digital 
              experiences that solve real problems and drive business growth.
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              With a team of talented designers, developers, and strategists, we 
              collaborate closely with our clients to transform ideas into successful 
              digital products.
            </p>
            
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium text-lg">
              Learn More About Us
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;