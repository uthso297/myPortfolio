import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi';


const Banner = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            location.hash = '';
        }
    }, []);
    // console.log(location);
    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }
    return (
        <div className='bg-[#111723] p-4 space-y-4'>

            <motion.h1
                className='text-white text-3xl md:text-6xl text-center'
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                Hello, I am 
                <br />
                <span className='text-blue-500'>Md.Sihab Mahmud Uthso</span>
            </motion.h1>

            <motion.div
                className='text-center'
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                <TypeAnimation
                    sequence={[
                        'Frontend Developer',
                        1000,
                        'Mern Stack Developer',
                        1000,
                        'Software Engineer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className='text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4] text-2xl md:text-4xl'
                    repeat={Infinity}
                />
            </motion.div>

            <motion.p
                className='text-white mt-10 mx-auto opacity-50 md:max-w-[50%] text-center'
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                I create engaging and interactive web experiences with clean code and modern design principles. Let&apos;s transform your ideas into reality.
            </motion.p>

            <motion.div
                className='flex items-center justify-center gap-5'
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                <a href='/#projects' className='btn btn-primary rounded-2xl'>
                    View My Work
                </a>
                <a href='/#contact' className='btn btn-primary bg-inherit rounded-2xl'>
                    Contact With Me
                </a>
            </motion.div>

            <motion.div
                className="absolute lg:bottom-10 left-1/2 lg:transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
            >
                <Link
                    to="/#about"
                    className="flex flex-col items-center cursor-pointer group"
                >
                    <span className="text-gray-400 text-sm mb-2 group-hover:text-primary transition-colors duration-300">
                        Scroll Down
                    </span>
                    <FiArrowDown className="text-primary animate-bounce" size={20} />
                </Link>
            </motion.div>

        </div>
    );
};

export default Banner;