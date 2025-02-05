import About from "../About/About";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Social from "../Social/Social";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Social></Social>
            <About></About>
            <Skills></Skills>
            <Education></Education>
        </div>
    );
};

export default Home;