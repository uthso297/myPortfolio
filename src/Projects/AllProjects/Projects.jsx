import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("projects.json")
                .then((res) => res.json())
                .then((data) => {
                    setProjects(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching projects:", error);
                    setLoading(false);
                });
        }, 1000);
    }, []);


    return (
        <div id="projects" className="bg-[#111723] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f4278d] to-[#8260b4] sm:h-20">
                    Explore my Projects
                </h1>

                <div className="p-6 flex justify-center items-center mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
                        {loading ? (
                            <div className="w-full h-64 flex justify-center items-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#f4278d] border-solid"></div>
                            </div>
                        ) : (
                            projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-gradient-to-br from-[#3b3f51] via-[#181d2b] to-[#272c3f] rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    <img
                                        src={project.project_image}
                                        alt={project.project_name}
                                        className="w-full h-60 rounded-t-xl"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold text-white hover:text-[#f4278d] transition duration-300">
                                            {project.project_name}
                                        </h2>
                                        <p className="text-gray-300 mt-2 text-sm">
                                            {project.project_description}
                                        </p>
                                        <Link to={`/details/${project.id}`}>
                                            <button
                                                className="mt-4 bg-[#8260b4] text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#f4278d] hover:scale-105 transform"
                                            >
                                                View More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
