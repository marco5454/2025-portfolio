import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative glass-card p-2 rounded-2xl">
                <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile photo */}
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-6xl font-bold text-white">
                      MM
                    </div>
                    <p className="mt-4 text-slate-400 text-sm">Profile Photo Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2"
              >
                About Me
              </motion.h2>
              <motion.h3
                variants={itemVariants}
                className="text-4xl font-bold mb-4"
              >
                Marco Melgar
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-xl text-primary-400 font-medium mb-2"
              >
                Freelance Full-Stack Developer
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-slate-400 mb-4"
              >
                Bachelor of Science in Information Technology (Information Systems)
              </motion.p>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed"
            >
              I am a freelance full-stack developer focused on building practical, 
              user-friendly, and ethical digital solutions. I specialize in React-based 
              frontends and MERN stack applications designed for real business needs.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-semibold text-primary-400 mb-2">Background Highlights</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Front-end Developer Experience
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Migration Systems Development
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Ethical Tech Background
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
