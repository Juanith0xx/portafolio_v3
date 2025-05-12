import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const certificates = [
  {
    title: 'Full Stack Developer MERN - MIT xPro',
    institution: 'MIT xPro',
    date: '2024',
    imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/142678136',
  },
  {
    title: 'TaildwindCSS - Udemy',
    institution: 'Udemy',
    date: '2024',
    imageUrl: 'https://via.placeholder.com/200', // Usamos una imagen de marcador de posición
    pdfUrl: 'https://cvws.icloud-content.com/B/AU_g8rqDGYCO3Au098vPF46bYqY6AXeIvS4N4Ifzn0P0Dlkre5MC_Ru2/Tailwinds-Udemy.pdf?o=ArOpqG0PaFvUMQwsDvNzK4W6UuJS_eU4FWVeds4WryHc&v=1&x=3&a=CAog4eskSt1JWT99xBdqbDPunuuhhU1vytS9RkMsGPfWx4oSbRDEhd-r7DIYxOK6rewyIgEAUgSbYqY6WgQC_Ru2aiYMBcYGL9WPf2oZdOsnZ6RzZc1Ca_B0fo19TbMh1BtTpbMROePcsXImiRCiTFer_gHG9wFF9IyfoZFRhtLMcKfxGsSTA2smth57TN8ikC8&e=1747073282&fl=&r=a6a71f11-6cbd-4b90-b2ae-f5c7b4522465-1&k=qgt5vuP8uQ4ByRHS0ZuskQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=144&s=XEtEjL2UYpFBwGaW5NpRAYrEeQs&cd=i',
  },
  {
    title: 'Web Scraping - Extracion de Datos',
    institution: 'Udemy',
    date: '2024',
    iimageUrl: 'https://via.placeholder.com/200', // Usamos una imagen de marcador de posición
    pdfUrl: 'https://cvws.icloud-content.com/B/Ac0MAgGMaFd5GGDjol3uPWY0CM53AcJBAy5gH4rbDVPBGgbKzpcC366X/Webscraping.pdf?o=AgXcbwzkuDXqrSH77zuLyOulUHHtXfxvBrInEhlFjF0o&v=1&x=3&a=CAog9FtpLebEwQLYojEEhV6mUwdKPV5IFGbcClGby0G53DQSbRDzsPir7DIY843UrewyIgEAUgQ0CM53WgQC366XaiZJ7zdHGY3FZicsWgT74jKNA6A_Fkqu_2mZ9Myr2Hm7m6zh2wwSN3Im8wd1QypWv3Ww71leNov4scJISDEdD0G3ote3uqDMoB9tjtHiQRQ&e=1747073697&fl=&r=4143dd0d-c9e5-410b-b7df-39a9dbbda553-1&k=cauPMdN9exR8EcRCYcKAhQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=144&s=94UuK6dG0v5p2Zy3wxvyOlaBBdI&cd=i',
  },
  {
    title: 'Fundament Pytho',
    institution: 'Open Academy Santander',
    date: '2024',
    iimageUrl: 'https://via.placeholder.com/200', // Usamos una imagen de marcador de posición
    pdfUrl: 'https://cvws.icloud-content.com/B/ATAfSo-h3cZCr3IprPTcB6O7ipz6Af27byG8TOImAvntVDBfX1y9Ng9v/Python-Santander.pdf?o=Av2Q9q9TvNFV01czfm-cE1j661H21X-Aa8dWdhNSmLSV&v=1&x=3&a=CAogUnR_AUwD3CjG41j1q1RPnHP_uifUk0BSa7TIGY9KpDYSbRC3uIKs7DIYt5XerewyIgEAUgS7ipz6WgS9Ng9vaiaWAOALlO84SYNFqcXWhtgf4kZSp9cR6Y8eyq5QnMRDBCPjEQA5yHImcI7BRBo1_j2K0CxE3jo7nSLRAU2FXkq05hoKgdFu7n3qfFytdA8&e=1747073862&fl=&r=d8356775-f0fa-440b-abd8-b93e60e468a3-1&k=4I8s9lKoSB9Wpi-1wQOAaA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=144&s=a-eIb_8dxaZ2iygslhY8WBNEDWc&cd=i',
  },

];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-b from-black/40 via-transparent to-black/30 dark:bg-gray-900 text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certificaciones</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-5xl mx-auto"
      >
        {certificates.map((cert, index) => (
          <SwiperSlide
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 w-72 md:w-80 flex flex-col items-center text-center"
          >
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{cert.institution} • {cert.date}</p>
            {cert.pdfUrl && (
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 text-sm"
              >
                Ver certificado
              </a>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certificates;
