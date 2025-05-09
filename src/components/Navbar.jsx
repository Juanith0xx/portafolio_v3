import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  const links = ['about', 'Certificates','projects', 'services', 'contact'];

  return (
    <nav className="fixed inset-x-0 top-0 bg-white/10 backdrop-blur-md dark:bg-gray-900/50 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo o nombre */}
          <div className="flex items-center gap-6 pt-4 text-2xl font-[Poppins] font-bold text-white">
          <img src="/image/Logo_p.png" alt="Logo" className=" w-50 h-auto pt-20 mt-10" />
            
            Juan Estay Rodriguez
          </div>

          {/* Menú desktop */}
          <ul className="hidden md:flex space-x-8 font-[Roboto] text-white dark:text-gray-300 ">
            {links.map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="border-b-2 border-transparent hover:border-white transition-all pb-1 hover:font-semibold hover:text-xl hover:text-white-fluor"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>

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
        <div className="md:hidden text-white font-black font-[Poppins] text-sm bg-white/10 backdrop-blur-md dark:bg-gray-900/50 ">
          <ul className="px-4 py-2 space-y-2">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
