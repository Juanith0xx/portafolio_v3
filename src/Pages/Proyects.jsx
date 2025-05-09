import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Sistema Muebles',
    description:
      'Plataforma web para la gestión y visualización de productos de una mueblería. Incluye catálogo dinámico, diseño responsivo y sección de contacto. Desarrollada con React, Tailwind CSS y JavaScript',
    imageUrl: '/images/sistemamuebles.png', // coloca aquí la ruta a tu captura
    demoUrl: 'https://sistemamuebles.cl',
    repoUrl: 'https://github.com/juanith0xx/sistemamuebles',
  },
  {
    title: 'Robfu',
    description:
      'Sitio corporativo para empresa de maquinaria y soluciones industriales. Incluye catálogo de productos, integración con sistema ERP y diseño adaptable. Administrado desde la plataforma Odoo..',
    imageUrl: '/images/robfu.png', // ruta a la captura de RobFU
    demoUrl: 'https://robfu.com',
    repoUrl: 'https://github.com/juanith0xx/robfu',
  },
];

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
  <section id="projects" className="py-20 bg-gradient-to-r from-[[#d7e6cf] to-[#b2cab2] bg- dark:bg-gray-900">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Proyectos Destacados
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Imagen */}
            <div
              className="h-48 bg-center bg-cover"
              style={{ backgroundImage: `url(${proj.imageUrl})` }}
            />

            {/* Contenido */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {proj.description}
              </p>

              {/* Enlaces */}
              <div className="mt-auto flex items-center space-x-4">
                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:underline"
                >
                  <FiExternalLink className="mr-1" />
                  Ver página
                </a>
                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:underline"
                >
                  <FiGithub className="mr-1" />
                  Código
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
