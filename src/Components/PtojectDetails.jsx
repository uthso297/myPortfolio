import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const foundProject = data.find(item => item.id === parseInt(id, 10));
                setProject(foundProject);
            });
    }, [id]);

    if (!project) {
        return <div className="bg-[#111723] text-white min-h-screen flex justify-center items-center text-2xl">Loading...</div>;
    }

    return (
        <div className="bg-[#111723] text-white p-6 flex flex-col items-center">
            <h1 className="sm:text-4xl text-2xl font-bold mb-4 text-center">{project.project_name}</h1>
            <img src={project.project_image} alt={project.project_name} className="w-full max-w-lg rounded-lg shadow-lg mb-6" />

            <div className="max-w-2xl text-startr">
                <p className="text-lg mb-4">{project.brief_description}</p>
                <p className="text-md mb-2"><span className="font-bold">Tech Stack:</span> {project.main_technology_stack}</p>
                <p className="text-md mb-2"><span className="font-bold">Challenges Faced:</span> {project.challenges_faced}</p>
                <p className="text-md mb-4"><span className="font-bold">Potential Improvements:</span> {project.potential_improvements}</p>

                <div className="flex gap-4 justify-center mt-4">
                    <a href={project.live_project_link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold">Live Project</a>
                    <a href={project.github_repository_link} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg text-white font-bold">GitHub Repo</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
