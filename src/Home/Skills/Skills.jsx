import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import gsap from "gsap";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-yellow-400 text-5xl" /> },
  { name: "Databases", icon: <FaDatabase className="text-purple-500 text-5xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
  { name: "Tools", icon: <FaTools className="text-gray-400 text-5xl" /> },
];

const Skills = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      gsap.to(slider, {
        xPercent: -50,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#111723] py-16 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4] pb-10">Technologies</h2>
      <div className="overflow-hidden relative w-full">
        <div
          ref={sliderRef}
          className="flex gap-10 w-max px-10"
          style={{ whiteSpace: "nowrap" }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center min-w-[120px]">
              <div>{skill.icon}</div>
              <p className="text-white text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
