import React from 'react';
import proPic from '../assets/images/khan.jpeg'
import { motion } from 'framer-motion';
import cv from '../../public/Resume-Md-Khan.pdf'

const containerVariants = {
    hidden : {opacity : 0, x : -100},
    visible : {
        opacity : 1,
        x : 0,
        transition : {
            duration : 0.5,
            staggerChildren : 0.5,
        }
    }
};

const childVariants = {
    hidden : {opacity : 0, x : -100},
    visible : {opacity : 1, x : 0, transition : {duration : 0.5 }}
};

const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                {/* image */}
                    <div className='flex justify-center lg:p-8'>
                        <motion.img src={proPic} alt="Md Shahien Khan" 
                        className='border border-stone-900 rounded-3xl'
                        width={650}
                        height={650}
                        initial={{ x : 100, opacity : 0 }}
                        animate={{ x : 0, opacity: 1}}
                        transition={{ duration : 1, delay : 1.5}}
                         />
                    </div>
                </div>
                {/* info */}
                <div className='w-full lg:w-1/2'>
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                     className='flex flex-col items-center lg:items-start mt-10'>
                        <motion.h2 variants={containerVariants} className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Md Shahien Khan</motion.h2>
                        <motion.span
                        variants={childVariants}
                        className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent'>Front End Developer</motion.span>
                        <motion.p
                        variants={childVariants}
                        className='my-2 max-w-lg text-xl leading-relaxed tracking-tighter'>I’m a passionate Front-End Developer with over 2 years of academic experience and a strong foundation in Full-Stack Development. I have hands-on skills in front-end technologies like HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Redux, and Next.js, enabling me to build responsive, interactive, and user-friendly interfaces. Additionally, I’ve expanded my expertise through Full-Stack Development courses, gaining experience with back-end technologies like Node.js, Express, Firebase, and MongoDB. This combination of skills allows me to contribute to both front-end and back-end development, ensuring seamless and efficient web applications. Eager to continue learning and growing, I look forward to collaborating with other developers and creating high-quality solutions in the web development field.</motion.p>
                        <motion.a
                        variants={childVariants}
                        href={cv}
                        target='blank'
                        rel='noopener noreferrer'
                        download
                        className='bg-white rounded-full my-4 p-4 text-sm text-stone-800 mb-10'
                        >Download Resume</motion.a>
                    </motion.div>
                </div>
            </div>
            

        </div>
    );
};

export default Hero;