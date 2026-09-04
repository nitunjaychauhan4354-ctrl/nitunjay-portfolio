import { useEffect, useState } from "react";

const NAV_SECTIONS = [
    "about",
    "experience",
    "achievements",
    "projects",
    "skills",
    "contact",
];

function Navbar() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0,
            }
        );

        NAV_SECTIONS.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="navbar">
            <div className="logo">
                &gt;_ NITUNJAY CHAUHAN
            </div>

            <div className="nav-links">
                <a
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                >
                    <span className="nav-caret">
                        {activeSection === "about" ? "> " : ""}
                    </span>
                    About
                </a>

                <a
                    href="#experience"
                    className={activeSection === "experience" ? "active" : ""}
                >
                    <span className="nav-caret">
                        {activeSection === "experience" ? "> " : ""}
                    </span>
                    Experience
                </a>

                <a
                    href="#achievements"
                    className={
                        activeSection === "achievements" ? "active" : ""
                    }
                >
                    <span className="nav-caret">
                        {activeSection === "achievements" ? "> " : ""}
                    </span>
                    Achievements
                </a>

                <a
                    href="#projects"
                    className={activeSection === "projects" ? "active" : ""}
                >
                    <span className="nav-caret">
                        {activeSection === "projects" ? "> " : ""}
                    </span>
                    Projects
                </a>

                <a
                    href="#skills"
                    className={activeSection === "skills" ? "active" : ""}
                >
                    <span className="nav-caret">
                        {activeSection === "skills" ? "> " : ""}
                    </span>
                    Skills
                </a>

                <a
                    href="#contact"
                    className={activeSection === "contact" ? "active" : ""}
                >
                    <span className="nav-caret">
                        {activeSection === "contact" ? "> " : ""}
                    </span>
                    Contact
                </a>

                <a
                    href="#terminal"
                    className={activeSection === "terminal" ? "active" : ""}
                >
                    <span className="nav-caret">
                        {activeSection === "terminal" ? "> " : ""}
                    </span>
                    Terminal
                </a>
            </div>

            <a
                href="/Nitunjay_Chauhan_Resume.pdf"
                download
                className="btn nav-resume"
            >
                Resume
            </a>
        </nav>
    );
}

export default Navbar;