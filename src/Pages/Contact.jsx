import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    // Aquí podrías integrar EmailJS, Formspree, o tu propio endpoint
    await new Promise(res => setTimeout(res, 1000));
    setStatus('sent');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contáctame
        </motion.h2>
        <motion.form
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full peer bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 outline-none py-2 text-gray-800 dark:text-gray-100"
              placeholder=" "
            />
            <label className="absolute left-0 top-0 text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm transition-all">
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
            <label className="absolute left-0 top-0 text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm transition-all">
              Email
            </label>
          </div>

          {/* Mensaje */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full peer bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 outline-none py-2 text-gray-800 dark:text-gray-100 resize-none"
              placeholder=" "
            />
            <label className="absolute left-0 top-0 text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm transition-all">
              Mensaje
            </label>
          </div>

          {/* Botón */}
          <motion.button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition"
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
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
