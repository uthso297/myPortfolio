import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" />, },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, },
  { name: "Express.js", icon: <SiExpress className="text-yellow-400" />, },
  { name: "Databases", icon: <FaDatabase className="text-purple-500" />, },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" />,  },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" />,  },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />,  },
  { name: "Tools", icon: <FaTools className="text-gray-400" />,  },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-[#111723] py-10">
      <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4]">
        SKILLS
      </h1>
      <p className="text-white text-center text-xl my-4">The skills, tools, and technologies I use:</p>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative w-32 h-32 flex flex-col items-center justify-center text-white"
          >
            <div className="relative w-32 h-32">
              <svg width="100%" height="100%" viewBox="0 0 36 36" className="absolute">
                <path
                  className="text-gray-800"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="transparent"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="transparent"
                  stroke="url(#gradient)"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  style={{ strokeDasharray: "100", strokeDashoffset: 100 - skill.level }}
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 100 - skill.level }}
                  transition={{ duration: 1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#f4278d", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#8260b4", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute flex flex-col items-center">
              {skill.icon}
              <span className="text-sm mt-2">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
