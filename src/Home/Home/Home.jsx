import About from "../About/About";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Skills2 from "../Skills/Skills2";
import Social from "../Social/Social";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Social></Social>
            <About></About>
            <Skills></Skills>
            <Skills2></Skills2>
            <Education></Education>
        </div>
    );
};

export default Home;