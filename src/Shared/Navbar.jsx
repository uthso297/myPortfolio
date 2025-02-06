import { Link } from "react-router-dom";

const Navbar = () => {

    const links = <>

        <li><Link to="/">Home</Link></li>
        <li><a href="/#about">About Me</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li><a href="/#education">Education</a></li>
        <li><a href="/#projects">Projects</a></li>
    </>

    return (
        <div className="bg-[#111723] md:p-4">
            <div className="navbar shadow-sm border-[0.1px] border-base-300/50 rounded-lg md:p-4 md:mt-5">
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
                    <a className="btn btn-ghost text-xl text-white">Md.Sihab Mahmud Uthso</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn btn-primary">Resume</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;