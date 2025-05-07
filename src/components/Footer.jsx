import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Sobre ti / Branding */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Juan Estay</h3>
          <p className="leading-relaxed">
            Full Stack Developer especializado en React, Node.js y Tailwind CSS.  
            Construyo experiencias web modernas, accesibles y con alto rendimiento.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Enlaces rápidos</h4>
          <ul className="space-y-2">
            {['Inicio', 'Sobre mí', 'Proyectos', 'Servicios', 'Contacto'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto & redes */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white mb-4">Contáctame</h4>
          <div className="flex items-center space-x-2">
            <FiMail className="text-lg" />
            <a href="mailto:juan@example.com" className="hover:text-white transition-colors">
              juan@example.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone className="text-lg" />
            <a href="tel:+56912345678" className="hover:text-white transition-colors">
              +56 9 1234 5678
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FiMapPin className="text-lg" />
            <span>Santiago, Chile</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/juanith0xx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/juanestay" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="https://instagram.com/juanestay" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FiInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Juan Estay. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
