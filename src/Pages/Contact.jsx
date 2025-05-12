import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_56fu6o5',
        'template_dcbdnma',
        formRef.current,
        'kEfgki1uhnRq31pjs'
      );
      setStatus('sent');
      setFormData({ nombre: '', email: '', mensaje: '' });
    } catch (error) {
      console.error('Error al enviar:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 mt-4 bg-gradient-to-br from-black/50 via-transparent to-black/50 
                        text-white overflow-hidden dark:bg-gray-900">
      <div className="max-w-xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-black font-[Poppins] text-white dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contáctame
        </motion.h2>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Nombre */}
          <div className="relative">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full peer bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 outline-none py-2 text-gray-800 dark:text-gray-100"
              placeholder=" "
            />
            <label className="absolute left-0 -top-4 font-semibold font-[Poppins] text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm transition-all">
              Nombre
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full peer bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 outline-none py-2 text-gray-800 dark:text-gray-100"
              placeholder=" "
            />
            <label className="absolute left-0 -top-4 font-semibold font-[Poppins] text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm transition-all">
              Email
            </label>
          </div>

          {/* Mensaje */}
          <div className="relative">
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="5"
              className="w-full peer bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 outline-none py-2 text-gray-800 dark:text-gray-100 resize-none"
              placeholder=" "
            />
            <label className="absolute left-0 -top-4 font-semibold font-[Poppins] text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm transition-all">
              Mensaje
            </label>
          </div>

          {/* Botón */}
          <motion.button
            type="submit"
            className="w-full bg-cyan-700 text-white font-semibold font-[Poppins] py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
          </motion.button>

          {/* Feedback */}
          {status === 'sent' && (
            <motion.p
              className="text-center text-green-500 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ¡Mensaje enviado con éxito!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              className="text-center text-red-500 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hubo un error. Intenta nuevamente más tarde.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
