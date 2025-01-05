import { FaNode } from "react-icons/fa";
import { RiBootstrapLine, RiCss3Line, RiHtml5Line, RiJavascriptLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) =>({
    initial : {y : -10},
    animate  :{
        y : [10, -10],
        transition : {
            duration : duration,
            ease : 'linear',
            repeat : Infinity,
            repeatType : "reverse,"
        }
    }
})

const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2
            whileInView={{opacity : 1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration : 1.5 }}
            className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div
            whileInView={{opacity : 1, x : 0}}
            initial={{ opacity : 0, x : -100}}
            transition={{duration : 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    initial="initial"
                    animated="animated"
                    variants={iconVariants(2.5)}
                >
                    <RiTailwindCssLine className="text-7xl text-blue-600"></RiTailwindCssLine>
                </motion.div>
                <motion.div
                    initial="initial"
                    animated="animated"
                    variants={iconVariants(3)}
                >
                    <RiBootstrapLine className="text-7xl text-violet-700"></RiBootstrapLine>
                </motion.div>
                <motion.div
                    initial="initial" 
                    animated="animated"
                    variants={iconVariants(5)}>
                    <RiJavascriptLine className="text-7xl text-yellow-500"></RiJavascriptLine>
                </motion.div>
                <motion.div
                    initial="initial"
                    animated="animated"
                    variants={iconVariants(4)}>
                    <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
                </motion.div>
                <motion.div
                    initial="initial"
                    animated="animated"
                    variants={iconVariants(6)}>
                    <TbBrandNextjs className="text-7xl"></TbBrandNextjs>
                </motion.div>
                <motion.div
                    initial="initial"
                    animated="animated"
                    variants={iconVariants(4)}>
                    <SiMongodb className="text-7xl text-green-600"></SiMongodb>
                </motion.div>
                <motion.div
                    initial="initial"
                    animated="animated"
                    variants={iconVariants(6)}>
                    <SiExpress className="text-7xl text-"></SiExpress>
                </motion.div>
                <motion.div
                    initial="initial"
                    animated="animated"
                    variants={iconVariants(2.5)}>
                    <FaNode className="text-8xl text-green-800"></FaNode>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;