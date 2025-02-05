
const Navbar = () => {

    const links = <>

        <li><a>Home</a></li>
        <li><a>About Me</a></li>
        <li><a>Skills</a></li>
        <li><a>Education</a></li>
        <li><a>Projects</a></li>
    </>

    return (
        <div className="bg-[#111723] md:p-4">
            <div className="navbar shadow-sm border-[0.5px] border-base-100/50 rounded-lg md:p-4 md:mt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
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