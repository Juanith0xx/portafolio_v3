import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className=""
    style={{ color: "var(--text)" }}
    >
      <div className="max-w-6xl mt-4 mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 "
      style={{ color: "var(--text)" }}
      >
        {/* Sobre ti / Branding */}
        <div className="space-y-4 "
        style={{ color: "var(--text)" }}
        >
          <h3 className="text-2xl font-bold font-[Poppins] underline"
          style={{ color: "var(--text)" }}
          >Juan Estay Rodriguez.</h3>
          <p className="leading-relaxed font-semibold "
          style={{ color: "var(--text)" }}
          >
            Full Stack Developer at MERN, building modern web experiences.
            More than a service, it's a commitment.
            </p>
        </div>

        {/* Enlaces rápidos */}
        {/*
       <div>
          <h4 className="text-xl font-semibold underline text-white mb-4">Enlaces rápidos</h4>
          <ul className="space-y-2 hover:font-semibold hover:text-base hover:text-white-fluor">
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
        */}

        {/* Contacto & redes */}
        <div className="space-y-4 hover:font-semibold hover:text-base hover:text-white-fluor">
          <h4 className="text-xl font-semibold underline mb-4"
          style={{ color: "var(--text)" }}
          >Contáctame</h4>
          <div className="flex items-center justify-center space-x-2">
            <FiMail className="text-lg" />
            <a href="mailto:juan@example.com" className="hover:text-white transition-colors">
              juan.estay.rodriguez@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FiPhone className="text-lg" />
            <a href="tel:+56912345678" className="hover:text-white transition-colors">
              +56 9 1234 5678
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FiMapPin className="text-lg" />
            <span>Santiago, Chile</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <a href="https://github.com/juanith0xx" target="_blank" rel="noopener noreferrer" className="hover:text-5xl transition-colors">
              <FiGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/juan-ignacio-estay-rodr%C3%ADguez-736b7667/" target="_blank" rel="noopener noreferrer" className="hover:text-5xl transition-colors">
              <FiLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Juan Estay R. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer; 
