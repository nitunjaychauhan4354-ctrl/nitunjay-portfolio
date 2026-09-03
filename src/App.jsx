import "./index.css";

function App() {
    return (
        <div className="portfolio">
            {/* Background overlay */}
            <div className="background"></div>

            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">
                    &gt;_ NITUNJAY CHAUHAN
                </div>

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
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
                    </h1>

                    <h2>
                        IT Infrastructure &amp; Network Specialist
                    </h2>

                    <p>
                        I build, manage and troubleshoot reliable IT
                        infrastructure, networks and enterprise systems.
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
                    BCA Graduate and IT Support Engineer with hands-on
                    experience in hotel IT infrastructure, networking,
                    Active Directory, Wi-Fi, hardware and enterprise
                    systems.
                </p>
            </section>

            {/* Projects */}
            <section id="projects" className="section">
                <p className="section-label">&gt; projects</p>
                <h2>Projects &amp; Experience</h2>

                <div className="project-grid">
                    <div className="project-card">
                        <span>01</span>
                        <h3>GRE Deployment</h3>
                        <p>
                            Supported deployment of 500+ smart devices
                            for Guest Room Entertainment systems.
                        </p>
                    </div>

                    <div className="project-card">
                        <span>02</span>
                        <h3>Cambium Wi-Fi</h3>
                        <p>
                            Assisted with installation and configuration
                            of 200+ Cambium Networks access points.
                        </p>
                    </div>

                    <div className="project-card">
                        <span>03</span>
                        <h3>Level Up</h3>
                        <p>
                            Fitness application focused on exercise,
                            recipes, calorie tracking and alarms.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="section">
                <p className="section-label">&gt; skills</p>
                <h2>Technical Skills</h2>

                <div className="skills">
                    <span>Networking</span>
                    <span>Active Directory</span>
                    <span>Wi-Fi</span>
                    <span>Windows</span>
                    <span>Linux</span>
                    <span>Wireshark</span>
                    <span>Nmap</span>
                    <span>Python</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>SQL</span>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="section contact">
                <p className="section-label">&gt; contact</p>
                <h2>Let's Connect</h2>

                <p>
                    Interested in working together or discussing an IT
                    opportunity?
                </p>

                <a
                    href="mailto:nitunjaychauhan@gmail.com"
                    className="btn primary"
                >
                    Contact Me
                </a>
            </section>

            <footer>
                &gt;_ NITUNJAY CHAUHAN
                <span>© 2026</span>
            </footer>
        </div>
    );
}

export default App;