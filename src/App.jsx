import { useEffect, useState } from "react";
import "./index.css";

const NAV_SECTIONS = ["about", "experience", "achievements", "projects", "skills", "contact"];

// TODO: replace with your real profile URLs
const SOCIAL_LINKS = {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
};

function App() {
    const [activeSection, setActiveSection] = useState("about");
    const [copied, setCopied] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
        );

        NAV_SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(label);
            setTimeout(() => setCopied(""), 1500);
        });
    };

    return (
        <div className="portfolio">
            {/* Background overlay */}
            <div className="background"></div>

            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">&gt;_ NITUNJAY CHAUHAN</div>

                <div className="nav-links">
                    <a href="#about" className={activeSection === "about" ? "active" : ""}>
                        <span className="nav-caret">{activeSection === "about" ? "> " : ""}</span>About
                    </a>
                    <a href="#experience" className={activeSection === "experience" ? "active" : ""}>
                        <span className="nav-caret">{activeSection === "experience" ? "> " : ""}</span>Experience
                    </a>
                    <a href="#achievements" className={activeSection === "achievements" ? "active" : ""}>
                        <span className="nav-caret">{activeSection === "achievements" ? "> " : ""}</span>Achievements
                    </a>
                    <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
                        <span className="nav-caret">{activeSection === "projects" ? "> " : ""}</span>Projects
                    </a>
                    <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
                        <span className="nav-caret">{activeSection === "skills" ? "> " : ""}</span>Skills
                    </a>
                    <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                        <span className="nav-caret">{activeSection === "contact" ? "> " : ""}</span>Contact
                    </a>
                </div>

                {/* Add Nitunjay_Chauhan_Resume.pdf to /public for this to work */}
                <a href="/Nitunjay_Chauhan_Resume.pdf" download className="btn nav-resume">
                    Resume
                </a>
            </nav>

            {/* Hero Section */}
            <main className="hero">
                <section className="hero-left">
                    <div className="tags">
                        <span>IT</span>
                        <span>Networking</span>
                        <span>Infrastructure</span>
                        <span>Technical Support</span>
                    </div>

                    <h1>
                        Hi, I'm <span>Nitunjay.</span>
                        <span className="cursor" aria-hidden="true">_</span>
                    </h1>

                    <h2>IT Infrastructure &amp; Network Specialist</h2>

                    <p>
                        I build, manage and troubleshoot reliable IT infrastructure, networks and
                        enterprise systems.
                    </p>

                    <div className="buttons">
                        <a href="#projects" className="btn primary">
                            View Projects
                        </a>

                        <a href="#contact" className="btn">
                            Contact Me
                        </a>
                    </div>
                </section>

                {/* Right Card */}
                <section className="hero-card">
                    <div className="card-header">
                        <span className="status"></span>
                        Currently working
                    </div>

                    <div className="terminal-list">
                        <p>▸ Hotel IT Infrastructure</p>
                        <p>▸ Network &amp; Wi-Fi</p>
                        <p>▸ Active Directory</p>
                        <p>▸ Server Monitoring</p>
                        <p>▸ POS / GRE Systems</p>
                    </div>

                    <div className="card-divider"></div>

                    <div className="card-item">
                        <span>Experience</span>
                        <strong>Senior Technical Support Engineer</strong>
                    </div>

                    <div className="card-item">
                        <span>Focus</span>
                        <strong>IT Infrastructure &amp; Networking</strong>
                    </div>
                </section>
            </main>

            {/* Stats */}
            <section className="stats">
                <div className="stat">
                    <strong>500+</strong>
                    <span>Smart Devices</span>
                </div>

                <div className="stat">
                    <strong>200+</strong>
                    <span>Access Points</span>
                </div>

                <div className="stat">
                    <strong>3+</strong>
                    <span>Years Experience</span>
                </div>
            </section>

            {/* About */}
            <section id="about" className="section">
                <p className="section-label">&gt; about_me</p>
                <h2>About Me</h2>

                <p>
                    BCA Graduate and IT Support Engineer with hands-on experience in hotel IT
                    infrastructure, networking, Active Directory, Wi-Fi, hardware and enterprise
                    systems.
                </p>
            </section>

            {/* Experience */}
            <section id="experience" className="section">
                <p className="section-label">&gt; experience</p>
                <h2>Work History</h2>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-meta">
                            <span className="timeline-date">Aug 2025 — Present</span>
                            <span className="status" title="Current role"></span>
                        </div>
                        <div className="timeline-body">
                            <h3>Senior Technical Support Engineer</h3>
                            <p className="timeline-org">
                                ACCEL IT <span>— Managed IT for ITC Grand Goa, Arossim</span>
                            </p>
                            <p>
                                Administer hotel IT infrastructure, run daily server health checks,
                                manage Active Directory, and lead IT upgrades and deployments.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-meta">
                            <span className="timeline-date">Jul 2024 — Aug 2025</span>
                        </div>
                        <div className="timeline-body">
                            <h3>Help Desk Engineer &amp; IT Support</h3>
                            <p className="timeline-org">
                                MICROSENCE <span>— Managed IT for Taj Cidade de Goa, Panjim</span>
                            </p>
                            <p>
                                Maintained hotel Wi-Fi and administrative networks, resolved guest
                                connectivity issues, and supported desktops, laptops and printers.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-meta">
                            <span className="timeline-date">Apr 2024 — Jul 2024</span>
                        </div>
                        <div className="timeline-body">
                            <h3>Computer Hardware Technician</h3>
                            <p className="timeline-org">
                                Bits Bytes Technologies <span>— St. Inez, Goa</span>
                            </p>
                            <p>
                                Repaired computers and laptops, installed and configured hardware,
                                and managed inventory for client service turnaround.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section id="achievements" className="section">
                <p className="section-label">&gt; achievements</p>
                <h2>Achievements</h2>

                <div className="project-grid">
                    <div className="project-card">
                        <span>01</span>
                        <h3>GRE Deployment</h3>
                        <p>
                            Supported deployment of 500+ smart devices for Guest Room Entertainment
                            systems with Tata Sky and Hudini.
                        </p>
                    </div>

                    <div className="project-card">
                        <span>02</span>
                        <h3>Cambium Wi-Fi</h3>
                        <p>
                            Assisted with installation and configuration of 200+ Cambium Networks
                            access points for hotel-wide wireless coverage.
                        </p>
                    </div>

                    <div className="project-card">
                        <span>03</span>
                        <h3>#ABC2025 Support</h3>
                        <p>
                            Part of the core on-site IT support team for IHCL's flagship event,
                            keeping network operations running through peak load.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="section">
                <p className="section-label">&gt; projects</p>
                <h2>Projects</h2>

                <div className="project-grid">
                    <div className="project-card">
                        <span>01</span>
                        <h3>Level Up</h3>
                        <p>
                            Fitness application built with a small team, covering exercise
                            logbooks, recipes, a progressive alarm and calorie tracking.
                        </p>
                        {/* Add a real link once you have one:
                        <a href="https://github.com/..." className="project-link">View code →</a> */}
                    </div>

                    <div className="project-card project-card--placeholder">
                        <span>next/</span>
                        <h3>This portfolio, full MERN</h3>
                        <p>Adding an Express + MongoDB backend for a working contact form next.</p>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="section">
                <p className="section-label">&gt; skills</p>
                <h2>Technical Skills</h2>

                <div className="skill-groups">
                    <div className="skill-group">
                        <p className="skill-group-label">Networking &amp; Hardware</p>
                        <div className="skills">
                            <span>Wi-Fi Troubleshooting</span>
                            <span>Network Monitoring</span>
                            <span>Cambium Access Points</span>
                            <span>Switch Configuration</span>
                            <span>Active Directory</span>
                            <span>Server Monitoring</span>
                            <span>POS / GRE Systems</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <p className="skill-group-label">Web Development</p>
                        <div className="skills">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>HTML / CSS</span>
                            <span>Tailwind CSS</span>
                            <span>MongoDB</span>
                            <span>MySQL</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <p className="skill-group-label">Programming</p>
                        <div className="skills">
                            <span>C</span>
                            <span>Python</span>
                            <span>SQL</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <p className="skill-group-label">Tools &amp; Systems</p>
                        <div className="skills">
                            <span>Windows</span>
                            <span>Linux</span>
                            <span>macOS</span>
                            <span>Wireshark</span>
                            <span>Nmap</span>
                            <span>BurpSuite</span>
                            <span>PuTTY</span>
                            <span>Remote Desktop</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Languages */}
            <section id="education" className="section education-grid">
                <div>
                    <p className="section-label">&gt; education</p>
                    <h2>Education</h2>

                    <div className="edu-list">
                        <div className="edu-item">
                            <div>
                                <h3>Bachelor of Computer Applications</h3>
                                <p className="timeline-org">Don Bosco College, Panjim, Goa</p>
                            </div>
                            <span className="timeline-date">2021 — 2024</span>
                        </div>
                        <div className="edu-item">
                            <div>
                                <h3>Higher Secondary, Commerce</h3>
                                <p className="timeline-org">Don Bosco Higher Secondary School</p>
                            </div>
                            <span className="timeline-date">2019 — 2021</span>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="section-label">&gt; languages</p>
                    <h2>Languages</h2>

                    <div className="lang-list">
                        <div className="lang-item">
                            <div className="lang-row">
                                <span>Hindi</span>
                                <span className="lang-level">Native</span>
                            </div>
                            <div className="lang-bar"><span style={{ width: "100%" }}></span></div>
                        </div>
                        <div className="lang-item">
                            <div className="lang-row">
                                <span>English</span>
                                <span className="lang-level">Proficient</span>
                            </div>
                            <div className="lang-bar"><span style={{ width: "80%" }}></span></div>
                        </div>
                        <div className="lang-item">
                            <div className="lang-row">
                                <span>Konkani</span>
                                <span className="lang-level">Intermediate</span>
                            </div>
                            <div className="lang-bar"><span style={{ width: "60%" }}></span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="section contact">
                <p className="section-label">&gt; contact</p>
                <h2>Let's Connect</h2>

                <p>Interested in working together or discussing an IT opportunity?</p>

                <div className="contact-panel">
                    <button
                        type="button"
                        className="contact-row"
                        onClick={() => copyToClipboard("nitunjaychauhan@gmail.com", "email")}
                    >
                        <span>email</span>
                        <strong>nitunjaychauhan@gmail.com</strong>
                        <span className="copy-hint">{copied === "email" ? "copied" : "copy"}</span>
                    </button>

                    <button
                        type="button"
                        className="contact-row"
                        onClick={() => copyToClipboard("+918468964354", "phone")}
                    >
                        <span>phone</span>
                        <strong>+91 84689 64354</strong>
                        <span className="copy-hint">{copied === "phone" ? "copied" : "copy"}</span>
                    </button>

                    <div className="contact-row contact-row--static">
                        <span>based</span>
                        <strong>Old Goa, Goa, India</strong>
                    </div>
                </div>

                <div className="buttons contact-buttons">
                    <a href="mailto:nitunjaychauhan@gmail.com" className="btn primary">
                        Contact Me
                    </a>
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="btn">
                        [GitHub]
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="btn">
                        [LinkedIn]
                    </a>
                </div>
            </section>

            <footer>
                &gt;_ NITUNJAY CHAUHAN
                <span>© 2026</span>
            </footer>
        </div>
    );
}

export default App;