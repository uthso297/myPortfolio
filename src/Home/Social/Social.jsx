import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Social = () => {
    return (
        <div className="bg-[#111723]">
            <div className="md:max-w-7xl mx-auto text-white space-y-10 py-3">
                <div>
                    <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4]">Social Links</h1>
                </div>
                <div className="text-4xl flex items-center justify-center gap-10">
                    <Link to="https://github.com/uthso297"><FaGithub /></Link>
                    <Link to="https://www.linkedin.com/in/md-sihab-mahmud-uthso-147651317"><FaLinkedin></FaLinkedin></Link>
                    <Link to="https://www.facebook.com/profile.php?id=61554984268601"><FaFacebook></FaFacebook></Link>
                </div>
            </div>
        </div>
    );
};

export default Social;