import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        <div className="pb-4">
            <motion.h2 
                whileInView={{opacity : 1, y : 0}}
                initial={{opacity : 0, y: -100}}
                transition={{duration : 0.5}}
                className="my-20 text-center text-4xl">Projects
            </motion.h2>
            <div className="">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div key={project.id} className="mb-8 flex flex-wrap lg:justify-center items-center">
                            <motion.div
                                whileInView={{opacity : 1, x : 0}}
                                initial={{ opacity: 0, x : -100}}
                                transition={{duration : 1}}
                            className="w-full lg:w-2/5">
                                <img src={project.image} alt={project.projectName} />
                            </motion.div>
                            <motion.div
                            whileInView={{opacity : 1, x : 0}}
                            initial={{opacity : 0, x : 100}}
                            transition={{ duration : 1}}
                            className="w-full max-w-xl lg:w-3/4 p-4">
                                <h3 className="text-2xl mb-2 font-semibold">{project.projectName}</h3>
                                <p className="mb-2">{project.description}</p>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600">Project Live Link</a>
                                <div className="mt-4 flex flex-wrap gap-1">  
                                        {project.technologiesUsed.map((tech, index) => (
                                            <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>{tech}</span>
                                        ))}
                                </div>
                            </motion.div>
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
