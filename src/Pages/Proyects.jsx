import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Sistema Muebles',
    description:
      'A web platform for managing and displaying products for a furniture store. It includes a dynamic catalog, responsive design, and a contact section. Developed with React, Tailwind CSS, and JavaScript.',
    imageUrl: '/image/sistemamuebles.png',
    demoUrl: 'https://sistemamuebles.cl',
    repoUrl: 'https://github.com/Juanith0xx/s_muebles',
  },
  {
    title: 'Robfu',
    description:
      'A corporate website for a machinery and industrial solutions company. It includes a product catalog, ERP system integration, and responsive design. Managed through the Odoo platform.',
    imageUrl: '/image/robfu.png',
    demoUrl: 'https://robfu.com'
  },
];

// Círculos animados
const FallingCircles = () => {
  const circles = Array.from({ length: 10 }, (_, i) => ({
    size: Math.floor(Math.random() * 30) + 10,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: '110%', opacity: 0.9 }}
          transition={{
            delay: circle.delay,
            duration: circle.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="absolute rounded-full bg-white/90 backdrop-blur-sm"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.left,
          }}
        />
      ))}
    </div>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' },
};

const Projects = () => (
  <section id="projects" className="relative py-20 mt-4 bg-gradient-to-b from-black/50 via-transparent to-black/50 dark:bg-gray-900 overflow-hidden">
    <FallingCircles />

    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold font-[Poppins] text-center text-white dark:text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <a
            key={proj.title}
            href={proj.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className="h-48 bg-center bg-cover"
                style={{ backgroundImage: `url(${proj.imageUrl})` }}
              />

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold font-[Poppins] underline text-gray-950 dark:text-white mb-2">
                  {proj.title}
                </h3>
                <p className="font-[Poppins] text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {proj.description}
                </p>

                <div className="mt-auto flex items-center space-x-4">
                  <span className="flex items-center text-black hover:underline">
                    <FiExternalLink className="mr-1" />
                    View Website
                  </span>
                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center text-black dark:text-gray-300 hover:underline"
                    >
                      <FiGithub className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
