import terminal from "./Terminal";

function Hero() {
    return (
        <main className="hero">
            <section className="hero-left">
                <div className="tags">
                    <span>IT Infrastructure</span>
                    <span>Network Operations</span>
                    <span>Systems Administration</span>
                    <span>IT Operations</span>
                </div>

                <h1>
                    Hi, I'm <span>Nitunjay.</span>
                    <span className="cursor" aria-hidden="true">
                        _
                    </span>
                </h1>

                <h2>
                    IT Infrastructure &amp;  Technology Operations
                </h2>

                {/* <p>
                    Experienced IT professional with expertise in infrastructure management, network operations, enterprise systems, and IT service delivery. Focused on maintaining resilient technology environments, leading technical operations, coordinating vendors, and delivering solutions that support business continuity and operational excellence.
                </p> */}

                <p>
                    I manage and optimize enterprise IT infrastructure, networks, and critical systems, combining hands-on technical expertise with operational leadership to deliver secure, reliable, and business-focused technology solutions.
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
                    IT OPERATIONS
                </div>

                <div className="terminal-list">
                    <p>▸ Systems, Active Directory &amp; Microsoft 365</p>
                    <p>▸ Operations Monitoring &amp; Vendor Coordination</p>
                    <p>▸ Enterprise IT &amp; Hotel Systems</p>
                    <p>▸ LAN, WAN &amp; Wi-Fi Operations</p>
                    <p>▸ Server Monitoring</p>
                </div>

                <div className="card-divider"></div>

                <div className="card-item">
                    <span>Current Role</span>

                    <strong>
                        IT Executive at  
                        <a href="https://www.hilton.com/en/" target="_blank" rel="noopener noreferrer"> Double Tree by Hilton</a> 
                    </strong>
                </div>

                <div className="card-item">
                    <span>Focus</span>

                    <strong>
                        IT Infrastructure &amp; Operations
                    </strong>
                </div>
            </section>
        </main>
    );
}

export default Hero;