import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Debt Management Web App',
      description: 'A comprehensive web application that helps users track debts, manage payments, calculate interest, and visualize payoff timelines with interactive dashboards.',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'User Authentication & Authorization',
        'Interactive Dashboards',
        'Payment Tracking & Analytics',
        'Interest Calculations',
        'Payoff Timeline Visualization',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Dress Rental & Photography System',
      description: 'A full-featured inventory management and service booking system designed for dress rental and photography businesses.',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'Admin Dashboard',
        'Inventory Management',
        'Rental Tracking System',
        'Booking Management',
        'Customer Portal',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Migration Support Platform',
      description: 'An ethical support system designed to provide safe, reliable information and resources for migrant workers with a focus on data privacy and user trust.',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'Data Safety & Encryption',
        'User Privacy Controls',
        'Compliance Features',
        'Resource Directory',
        'Multilingual Support',
      ],
      liveUrl: null,
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world applications built to solve practical business problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <motion.a
            href="https://github.com/marcomelgar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg text-white font-medium hover:bg-slate-700 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
