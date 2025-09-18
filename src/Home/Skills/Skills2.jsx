import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact, FaNodeJs, FaTools,
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { useLocation } from "react-router-dom";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

const categorizedSkills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl md:text-5xl" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-4xl md:text-5xl" />, level: 85 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-300 text-4xl md:text-5xl" />, level: 90 },
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl md:text-5xl" />, level: 90 },
    { name: "Next JS", icon: <RiNextjsFill className=" text-4xl md:text-5xl" />, level: 60 },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl md:text-5xl" />, level: 80 },
    { name: "Express.js", icon: <SiExpress className="text-yellow-400 text-4xl md:text-5xl" />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb  className="text-green-500 text-4xl md:text-5xl" />, level: 80 },
    { name: "PostgreSql", icon: <BiLogoPostgresql className=" text-4xl md:text-5xl" />, level: 80 },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl md:text-5xl" />, level: 70 },
    { name: "Tools", icon: <FaTools className="text-gray-400 text-4xl md:text-5xl" />, level: 85 },
  ]
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const circleRadius = 28; 
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const renderSkillCategory = (title, skills) => (
    <div key={title} className="mb-12">
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-6 underline underline-offset-4">
        {title}
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-wrap justify-center gap-6 md:gap-10"
      >
        {skills.map((skill) => {
          const defaultOffset = circleCircumference * (1 - skill.level / 100);
          const hoverOffset = circleCircumference;

          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center text-white group"
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
                    strokeDashoffset: hoveredSkill === skill.name
                      ? [hoverOffset, defaultOffset]
                      : defaultOffset,
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

              <span className="text-xs mt-16 md:text-sm">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );

  return (
    <div id="skills" ref={sectionRef} className="bg-[#111723] py-10 px-4 md:px-0 relative overflow-hidden">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4] mb-5">
        SKILLS
      </h1>
      <div className="max-w-6xl mx-auto">
        {renderSkillCategory("Frontend", categorizedSkills.frontend)}
        {renderSkillCategory("Backend", categorizedSkills.backend)}
        {renderSkillCategory("Tools & Others", categorizedSkills.tools)}
      </div>
    </div>
  );
};

export default Skills;

