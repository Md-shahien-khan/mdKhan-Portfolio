import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json') 
            .then(res => res.json())
            .then(data => {
                // console.log("Fetched data:", data);  
                setProjects(data);
            })
            .catch(err => {
                console.error("Error fetching projects:", err);
            });
    }, []);

    return (
        <div>
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div className="">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div key={project.id} className="mb-8 flex flex-wrap lg:justify-center items-center">
                            <div className="w-full lg:w-1/4">
                                <img src={project.image} alt={project.projectName} />
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4 p-4">
                                <h3 className="text-2xl mb-2 font-semibold">{project.projectName}</h3>
                                <p>{project.description}</p>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600">Live Demo</a>
                                <div className="mt-2 flex flex-wrap gap-1">  
                                        {project.technologiesUsed.map((tech, index) => (
                                            <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>{tech}</span>
                                        ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No projects available.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
