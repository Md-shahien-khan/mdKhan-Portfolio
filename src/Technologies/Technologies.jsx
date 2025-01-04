import { FaNode } from "react-icons/fa";
import { RiBootstrapLine, RiCss3Line, RiHtml5Line, RiJavascriptLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                    <RiTailwindCssLine className="text-7xl text-blue-600"></RiTailwindCssLine>
                </div>
                <div>
                    <RiBootstrapLine className="text-7xl text-violet-700"></RiBootstrapLine>
                </div>
                <div>
                    <RiJavascriptLine className="text-7xl text-yellow-500"></RiJavascriptLine>
                </div>
                <div>
                    <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
                </div>
                <div>
                    <TbBrandNextjs className="text-7xl"></TbBrandNextjs>
                </div>
                <div>
                    <SiMongodb className="text-7xl text-green-600"></SiMongodb>
                </div>
                <div>
                    <SiExpress className="text-7xl text-"></SiExpress>
                </div>
                <div>
                    <FaNode className="text-8xl text-green-800"></FaNode>
                </div>
            </div>
        </div>
    );
};

export default Technologies;