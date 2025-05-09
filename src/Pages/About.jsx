import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiHtml5,
  SiWebauthn,
  SiAdobe,
  SiGithub,
  SiDocker
} from 'react-icons/si';
import { FaExchangeAlt } from 'react-icons/fa';

const About = () => {
  const skillIcons = [
    <SiMongodb size={40} color="#000" />,
    <SiExpress size={40} color="#000" />,
    <SiReact size={40} color="#000" />,
    <SiNodedotjs size={40} color="#000" />,
    <SiPython size={40} color="#000" />,
    <SiTailwindcss size={40} color="#000" />,
    <SiHtml5 size={40} color="#000" />,
    <SiWebauthn size={40} color="#000" />,
    <FaExchangeAlt size={40} color="#000" />,
    <SiAdobe size={40} color="#000" />,
    <SiGithub size={40} color="#000" />,
    <SiDocker size={40} color="#000" />,
  ];

  // Formas animadas: rombos y hexágonos
  const shapes = [
    { type: 'rhombus', size: 40, top: 80, duration: 12, delay: 0 },
    { type: 'hexagon', size: 50, top: 140, duration: 16, delay: 1 },
    { type: 'rhombus', size: 30, top: 220, duration: 14, delay: 2 },
    { type: 'hexagon', size: 40, top: 100, duration: 18, delay: 1.5 },
    { type: 'rhombus', size: 35, top: 200, duration: 13, delay: 2.5 },
  ];

  return (
    <section id="about" className="relative mt-6 py-20 bg-gradient-to-l from-[#f5d7cc] to-[#d9beb9] dark:bg-gray-900 overflow-hidden">
      {/* Formas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shapes.map((shape, i) => {
          const baseStyle = {
            top: shape.top,
            left: '-80px',
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: 'rgba(255,255,255,0.2)',
            position: 'absolute',
          };

          let shapeStyle = {};
          if (shape.type === 'rhombus') {
            shapeStyle = {
              ...baseStyle,
              transform: 'rotate(45deg)',
              borderRadius: '4px',
            };
          } else if (shape.type === 'hexagon') {
            shapeStyle = {
              ...baseStyle,
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            };
          }

          return (
            <motion.div
              key={i}
              style={shapeStyle}
              initial={{ x: -100 }}
              animate={{ x: '110vw' }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: 'linear',
                delay: shape.delay,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-white  dark:text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5}}
        >
          Sobre mí
        </motion.h2>

        <motion.p
          className="text-lg text-white dark:text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
        >
          ¡Hola! Soy <span className="font-semibold text-indigo-500">Juan Estay</span>, Full Stack Developer con +3 años creando soluciones web funcionales y atractivas. Mi enfoque está en la experiencia del usuario, el rendimiento y la elegancia del código. Certificado por MIT xPro en el stack MERN.
        </motion.p>

        <motion.ul
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          {[
            'JavaScript (ES6+)',
            'React & Vite',
            'Node.js & Express',
            'MongoDB & SQL',
            'Tailwind CSS',
            'Framer Motion',
          ].map((skill, i) => (
            <li
              key={i}
              className="flex items-center justify-center text-gray-700 dark:text-gray-300"
            >
              <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2" />
              {skill}
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
            Tecnologías que uso
          </h3>
          <div className="max-w-md mx-auto">
            <Carousel
              showArrows={false}
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={3000}
              transitionTime={600}
              className="text-center"
            >
              {skillIcons.map((icon, i) => (
                <div key={i} className="flex justify-center items-center h-48">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg">
                    {icon}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
