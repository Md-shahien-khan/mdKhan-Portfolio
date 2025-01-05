import Education from "../Education/Education";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Technologies></Technologies>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;