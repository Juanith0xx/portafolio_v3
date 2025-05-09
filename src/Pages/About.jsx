import React from 'react';
import { motion } from 'framer-motion';
import { FaExchangeAlt } from 'react-icons/fa';
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
  SiDocker,
} from 'react-icons/si';
import SkillGrid from './SkillGrid'; // asegúrate de que la ruta es correcta

const About = () => {
  const shapes = [
    { type: 'rhombus', size: 40, top: 80, duration: 12, delay: 0 },
    { type: 'hexagon', size: 50, top: 140, duration: 16, delay: 1 },
    { type: 'rhombus', size: 30, top: 220, duration: 14, delay: 2 },
    { type: 'hexagon', size: 40, top: 100, duration: 18, delay: 1.5 },
    { type: 'rhombus', size: 35, top: 200, duration: 13, delay: 2.5 },
  ];

  return (
    <section id="about" className="relative mt-6 py-20  bg-gradient-to-r from-black/50 via-transparent to-black/50  dark:bg-gray-900 overflow-hidden">
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

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-white dark:text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          About me
        </motion.h2>

        <motion.p
          className="text-lg text-white font-semibold dark:text-gray-300 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
        >
          Hello! I'm Juan Estay, a full-stack developer with over two years of experience creating functional, engaging, and user-centric web solutions.
          <br /><br />
          My approach combines performance, usability, and elegant design to make your website intuitive, efficient, and adaptable to your needs.
          <br /><br />
          I work with different technologies such as Next.js, Angular, React, and more, always choosing the tools that best fit your project.
        </motion.p>

        {/* Skill Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
        >
          <SkillGrid />
        </motion.div>
      </div>
    </section>
  );
};

export default About;