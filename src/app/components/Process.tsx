'use client';

import { useInView } from 'react-intersection-observer';

const Process = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your requirements and define project scope',
      icon: '🔍',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Create wireframes, prototypes, and user experience design',
      icon: '🎨',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile development with continuous integration and testing',
      icon: '💻',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Deployment, monitoring, and ongoing support',
      icon: '🚀',
    },
  ];

  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift transform-3d">
                    <div className="text-3xl mb-4">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                  {step.number}
                </div>

                {/* Spacer for alternating sides */}
                <div className="lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;