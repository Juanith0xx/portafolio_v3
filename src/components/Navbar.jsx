import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle'; // 👈 Importamos el botón de cambio de tema

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  const links = ['about', 'projects', 'services', 'contact'];

  return (
    <nav className="fixed inset-x-0 top-0 bg-white/10 backdrop-blur-md dark:bg-gray-900/50 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo o nombre */}
          <div className="flex items-center gap-4 pt-4 text-2xl font-[Poppins] font-bold text-white md:text-lg">
            <img
              src="/portafolio_v3/image/Logo_p.png"
              alt="Logo"
              className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain"
            />
            Juan Estay Rodriguez
          </div>

          {/* Menú desktop + toggle */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 font-[Poppins] text-white dark:text-gray-300">
              {links.map(section => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="border-b-2 border-transparent hover:border-white transition-all pb-1 hover:font-semibold hover:text-white-fluor"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Toggle del tema */}
            <ThemeToggle />
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden text-white font-[Poppins] text-sm dark:bg-gray-900/50 px-4 py-2 space-y-2">
          <ul>
            {links.map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="block py-2"
                  onClick={handleLinkClick}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Toggle en menú móvil */}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
