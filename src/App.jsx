import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="portfolio">
            <div className="background"></div>

            <Navbar />
            <Hero />
            <Stats />
            <About />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;