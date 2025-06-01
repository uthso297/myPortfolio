import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import image from '../../assets/uthsoBanner.jpeg';
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

const About = () => {
  const location = useLocation();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.3,
    once: false, // Set to false to allow re-triggering when scrolling
  });

  useEffect(() => {
    if (isInView && imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      });
    }
  }, [isInView]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="about" ref={sectionRef} className="bg-[#111723] py-20 px-6 md:px-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4] mb-12">
        About Me
      </h1>

      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} 
      >
        {/* Text Section */}
        <motion.div
          className="text-white md:w-1/2 space-y-6"
          variants={itemVariants}
        >
          <p>
            I began my programming journey with the C language. During my first semester at the university&apos;s Software Engineering Department, I recognized C as the &quot;mother language&quot; of programming. Mastering it would provide a solid foundation, making it easier to transition to other languages.
          </p>
          <p>
            After gaining proficiency in C and basic knowledge of Data Structures and Algorithms (DSA), I shifted my focus to web development. Through Programming Hero, I explored the MERN stack, beginning with HTML, CSS, and JavaScript. I then expanded my skills to include React and backend technologies such as Node.js and Express.
          </p>
          <p>
            This journey was challenging, with many ups and downs, but I continuously pushed my limits to develop my skills and achieve my goal of becoming a capable developer.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative rounded-full overflow-hidden shadow-lg ring-4 ring-[#f4278d]/50 hover:scale-105 transition-transform duration-300">
            <img
              ref={imageRef}
              src={image}
              alt="Uthso Banner"
              className="w-72 h-72 object-cover scale-75 opacity-0" // <-- start state for GSAP
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
