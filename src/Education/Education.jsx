import { useEffect, useState } from "react";

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
            <h2 className="my-10 md:my-20 text-center text-4xl">Education</h2>
            <div>
                {education.map((edu, index) => {
                    return (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <div className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-stone-400">
                                    {edu.PassingYear}
                                </p>
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h3 className="mb-2 font-semibold">
                                    {edu.CourseName}
                                </h3>
                                <span className="text-sm text-stone-500">{edu.Field}</span>
                                <h3>{edu.UniversityName}</h3>
                                <span className="text-sm text-stone-400">{edu.Location}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;
