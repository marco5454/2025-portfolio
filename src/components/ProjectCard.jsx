import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <svg className="w-24 h-24 mx-auto text-slate-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-slate-600 text-sm">Screenshot Coming Soon</p>
          </div>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        {project.features && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.map((feature, i) => (
                <li key={i} className="text-sm text-slate-400 flex items-start">
                  <svg className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg text-white text-center font-medium hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 border-2 border-primary-500/50 rounded-lg text-white text-center font-medium hover:bg-primary-500/10 transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
