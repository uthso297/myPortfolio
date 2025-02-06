import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { useLocation } from "react-router-dom";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 text-5xl" />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" />, level: 80 },
  { name: "Express.js", icon: <SiExpress className="text-yellow-400 text-5xl" />, level: 85 },
  { name: "Databases", icon: <FaDatabase className="text-purple-500 text-5xl" />, level: 80 },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-5xl" />, level: 80 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300 text-5xl" />, level: 80 },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" />, level: 70 },
  { name: "Tools", icon: <FaTools className="text-gray-400 text-5xl" />, level: 85 },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const circleRadius = 30;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="skills" className="bg-[#111723] py-10 relative overflow-hidden">
      <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4]">
        SKILLS
      </h1>
      <p className="text-white text-center text-xl my-4">The skills, tools, and technologies I use:</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-10 mt-10"
      >
        {skills.map((skill) => {
          const defaultOffset = circleCircumference * (1 - skill.level / 100);
          const hoverOffset = circleCircumference;

          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.15 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative w-40 h-40 flex items-center justify-center text-white group"
            >
              <svg width="100%" height="100%" viewBox="0 0 80 80" className="absolute">
                <circle cx="40" cy="40" r={circleRadius} strokeWidth="4" stroke="#333" fill="transparent" />

                <motion.circle
                  cx="40"
                  cy="40"
                  r={circleRadius}
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="transparent"
                  stroke="url(#gradient)"
                  strokeDasharray={circleCircumference}
                  initial={{ strokeDashoffset: defaultOffset }}
                  animate={{
                    strokeDashoffset: hoveredSkill === skill.name ? [hoverOffset, defaultOffset] : defaultOffset,
                  }}
                  transition={{
                    duration: hoveredSkill === skill.name ? 1.5 : 0,
                    ease: "easeInOut",
                  }}
                />

                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#f4278d", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#8260b4", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>

              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute flex flex-col items-center justify-center"
              >
                {skill.icon}
              </motion.div>

              <span className="text-sm mt-16">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
