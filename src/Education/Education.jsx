import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Education = () => {

    const [education, setEducation] = useState([]);
    
    useEffect(() => {
        fetch('education.json')  
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data);  
                setEducation(data);  
            })
            .catch(err => {
                console.error("Error fetching education data:", err);
            });
    }, []);

    return (
        <div>
            <motion.h2
                whileInView={{opacity : 1, y : 0}}
                initial={{opacity : 0, y: -100}}
                transition={{duration : 0.5}}
            className="my-20 text-center text-4xl">Education</motion.h2>
            <div>
                {education.map((edu, index) => {
                    return (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div
                                whileInView={{opacity : 1, y : 0}}
                                initial={{opacity : 0, y: -100}}
                                transition={{duration : 1}}
                            className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-stone-400">
                                    {edu.PassingYear}
                                </p>
                            </motion.div>
                            <motion.div
                                whileInView={{opacity : 1, y : 0}}
                                initial={{opacity : 0, y: 100}}
                                transition={{duration : 1}}
                            className="w-full max-w-xl lg:w-3/4">
                                <h3 className="mb-2 font-semibold">
                                    {edu.CourseName}
                                </h3>
                                <span className="text-sm text-stone-500">{edu.Field}</span>
                                <h3>{edu.UniversityName}</h3>
                                <span className="text-sm text-stone-400">{edu.Location}</span>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;
