import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder testimonials structure
  const placeholderTestimonials = [
    {
      name: 'Client Name',
      company: 'Company Name',
      role: 'Position',
      testimonial: 'Your testimonial will appear here once you start working with clients.',
    },
    {
      name: 'Client Name',
      company: 'Company Name',
      role: 'Position',
      testimonial: 'Client feedback helps build trust and showcases the quality of your work.',
    },
    {
      name: 'Client Name',
      company: 'Company Name',
      role: 'Position',
      testimonial: 'Great testimonials can significantly increase your conversion rate.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2">
            Client Feedback
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Testimonials</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Coming soon - Feedback from satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl relative opacity-50"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-500/20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="mb-4">
                <p className="text-slate-400 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>

              <div className="flex items-center mt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                  <p className="text-sm text-primary-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Testimonials Coming Soon</h4>
            <p className="text-slate-400">
              Currently building amazing projects with clients. 
              Testimonials will be added as projects are completed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
