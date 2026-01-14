import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiSmartphone, FiSun } from 'react-icons/fi';

const services = [
  {
    icon: <FiCode size={32} />,
    title: 'Front-end Development',
    description:
      'Interactive and responsive interfaces with React, Vite, and Tailwind CSS for a flawless UX.',
  },
  {
    icon: <FiDatabase size={32} />,
    title: 'APIs y Backend',
    description:
      'Building RESTful APIs with Node.js, Express, and MongoDB/SQL to ensure scalability.',
  },
  {
    icon: <FiSun size={32} />,
    title: 'Optimization & SEO',
    description:
      'Performance, accessibility, and technical SEO to make your site load fast and rank first.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
  hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' },
};



const Services = () => (
  <section id="services" className="py-20 mt-4 ">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold font-[Poppins] text-white dark:text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ color: "var(--text)" }}
      >
        My Services
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer"
            style={{ color: "var(--text)" }}
          >
            <div className=" mb-4"
            style={{ color: "var(--button-bg" }}
            >{svc.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {svc.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-[Poppins] mb-4 leading-relaxed">
              {svc.description}
            </p>
            <a
              href="#contact"
              className="mt-auto inline-block font-[Poppins] font-medium hover:underline hover:text-xl"
              style={{ color: "var(--button-bg" }}
            >
              ¡I love you!!
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
