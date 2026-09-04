function Hero() {
    return (
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
                    <span className="cursor" aria-hidden="true">
                        _
                    </span>
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

                    <strong>
                        Senior Technical Support Engineer
                    </strong>
                </div>

                <div className="card-item">
                    <span>Focus</span>

                    <strong>
                        IT Infrastructure &amp; Networking
                    </strong>
                </div>
            </section>
        </main>
    );
}

export default Hero;