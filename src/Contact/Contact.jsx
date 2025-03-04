import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-t border-stone-900 pb-20">
            <motion.h2
                whileInView={{opacity : 1, y : 0}}
                initial={{opacity : 0, y: -100}}
                transition={{duration : 0.5}}
                className="my-10 text-center text-4xl">Get in Touch
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                whileInView={{opacity : 1, y : 0}}
                initial={{opacity : 0, y: -100}}
                transition={{duration : 1}}
                className="my-4">
                    Beaufort Park, Colindale, Lodnon, NW9 5XF
                </motion.p>
                <motion.p
                whileInView={{opacity : 1, y : 0}}
                initial={{opacity : 0, y: 100}}
                transition={{duration : 1}}
                className="my-4">
                    +447593214400
                </motion.p>
                {/* <a href="" className="border-b">shawonkn58@gmail.com</a> */}
            </div>
        </div>
    );
};

export default Contact;