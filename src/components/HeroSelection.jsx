import React from 'react';
import { motion } from 'framer-motion';

const NUM_SHAPES = 12;

const fallAnimation = {
  initial: { y: -100, opacity: 1 },
  animate: custom => ({
    y: window.innerHeight + 100,
    opacity: [1, 0.8, 0],
    transition: {
      delay: custom * 0.3,
      duration: 10,
      ease: 'linear',
      repeat: Infinity,
      repeatDelay: 2,
    },
  }),
};

const randomShapeConfig = () => ({
  type: Math.random() > 0.5 ? 'circle' : 'square',
  size: 30 + Math.random() * 50, // de 30px a 80px
  left: `${Math.random() * 100}%`, // posición horizontal aleatoria
  custom: Math.random() * NUM_SHAPES, // retraso aleatorio
});

const HeroSelection = () => {
  // generamos N configuraciones de forma
  const shapes = Array.from({ length: NUM_SHAPES }, () => randomShapeConfig());

  return (
    <section className="relative min-h-screen flex items-center justify-center 
                        bg-gradient-to-br from-black/50 via-transparent to-black/50 
                        text-white overflow-hidden">
      {/* Figuras animadas */}
      {shapes.map(({ type, size, left, custom }, i) => (
        <motion.div
          key={i}
          custom={custom}
          variants={fallAnimation}
          initial="initial"
          animate="animate"
          className={`
            absolute
            ${type === 'circle' ? 'rounded-full' : 'rounded-sm'}
            bg-teal-300/30 bg-opacity-80
          `}
          style={{
            width: size,
            height: size,
            left,
            top: -size,
            filter: 'drop-shadow(0 0 10px white)',
          }}
        />
      ))}

      {/* Contenido principal */}
      <div className="relative z-10 max-w-2xl text-center px-4 space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Lleva tu proyecto al siguiente nivel
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
        >
          Soy Juan Estay, Full Stack Developer especializado en React, Node.js y Tailwind CSS.  
          Diseño y construyo aplicaciones web escalables y llenas de estilo.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 
                     rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
        >
          ¡Contrátame ahora!
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSelection;
