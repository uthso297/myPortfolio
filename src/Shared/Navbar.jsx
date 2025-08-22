// import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
const Navbar = () => {

    const links = <>

        {/* <li><Link to="/">Home</Link></li> */}
        <li><a href="/#about">About Me</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li><a href="/#education">Education</a></li>
        <li><a href="/#projects">Projects</a></li>
    </>

    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                // delay: 0.5
            }
        }
    }

    return (
        <div

            className="bg-[#111723] md:p-4">
            {/* <div className="navbar shadow-sm border-[0.1px] border-base-300/50 rounded-lg md:p-4 md:mt-5"> */}
            <motion.div
                variants={navbarVariants}
                initial="hidden"
                animate="visible"
                className="navbar shadow-sm rounded-lg md:p-4 md:mt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                            {links}
                        </ul>
                    </div>
                    <a href="/" className="btn bg-inherit border-none shadow-none text-xl text-white">Home</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn btn-primary">Resume</a> */}
                    <a href='https://drive.google.com/file/d/1PJpwKCOdK2avLu93K8mxdJOe1VYwKJx8/view?usp=sharing' className='btn btn-primary'>RESUME</a>

                </div>
            </motion.div>
        </div>
    );
};

export default Navbar;