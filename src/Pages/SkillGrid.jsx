import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiAngular,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiDocker
} from 'react-icons/si';

const skills = [
  {
    category: 'Essential Languages',
    items: [
      { icon: <SiHtml5 size={30} />, name: 'HTML', rating: 5 },
      { icon: <SiJavascript size={30} />, name: 'JavaScript', rating: 4 },
      { icon: <SiCss3 size={30} />, name: 'CSS', rating: 4 },
      { icon: <SiTailwindcss size={30} />, name: 'Tailwind CSS', rating: 4 },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { icon: <SiReact size={35} />, name: 'React', rating: 4 },
      { icon: <SiNextdotjs size={35} />, name: 'Next.js', rating: 3 },
      { icon: <SiVite size={35} />, name: 'Vite', rating: 3 },
      { icon: <SiAngular size={35} />, name: 'Angular', rating: 3 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { icon: <SiMongodb size={35} />, name: 'MongoDB', rating: 4 },
      { icon: <SiFirebase size={35} />, name: 'Firebase', rating: 5 },
      { icon: <SiMysql size={35} />, name: 'MySQL', rating: 3 },
      { icon: <SiPostgresql size={35} />, name: 'PostgreSQL', rating: 3 },
      { icon: <SiSqlite size={35} />, name: 'SQLite', rating: 3 },
    ],
  },
  {
    category: 'Environments and Frameworks',
    items: [
      { icon: <SiNodedotjs size={35} />, name: 'Node.js', rating: 5 },
      { icon: <SiExpress size={35} />, name: 'Express.js', rating: 4 },
    ],
  },
  {
    category: 'Plugins and Tools',
    items: [
      { icon: <SiGithub size={35} />, name: 'GitHub', rating: 4 },
      { icon: <SiDocker size={35} />, name: 'Docker', rating: 4 },
    ],
  },
];

const SkillGrid = () => (
  <div className="grid gap-6 justify-center font-bold font-[Poppins] md:grid-cols-2">
    {skills.map((group, index) => (
      <div key={index}>
        <h3 className="text-xl font-semibold font-[Poppins] underline text-white dark:text-white mb-4">{group.category}</h3>
        <div className="flex flex-wrap gap-4 justify-center text-center pb-4 pt-2">
          {group.items.map((item, i) => (
            <div
              key={i}
              className="relative group w-16 h-16 flex items-center justify-center bg-white font-[Poppins] dark:bg-gray-700 rounded-full shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-130"
            >
              {item.icon}
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 p-2 rounded-lg shadow-lg z-20 w-32 text-center">
                <div className="font-semibold mb-1">{item.name}</div>
                <div className="text-yellow-400">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SkillGrid;
