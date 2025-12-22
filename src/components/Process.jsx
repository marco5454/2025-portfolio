import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: '01',
      title: 'Discovery & Requirements',
      description: 'We start by understanding your business goals, target audience, and project requirements.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Creating the blueprint with wireframes, mockups, and technical architecture.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building your solution with clean code, best practices, and regular updates.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Testing & Feedback',
      description: 'Rigorous testing and incorporating your feedback to ensure quality.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Deployment & Support',
      description: 'Launching your project and providing ongoing support and maintenance.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2">
            How I Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Process</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A proven methodology to deliver exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-6 rounded-xl"
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <span className="text-4xl font-bold text-primary-400/30">{step.number}</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-white">{step.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                    className="w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full animate-ping opacity-75" />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            Every project is unique, and this process adapts to your specific needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
