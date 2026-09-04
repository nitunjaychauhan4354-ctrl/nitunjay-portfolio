import projects from "../data/Projects";

function Projects() {
    return (
        <section id="projects" className="section">
            <p className="section-label">
                &gt; projects
            </p>

            <h2>Projects</h2>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-card ${
                            project.placeholder
                                ? "project-card--placeholder"
                                : ""
                        }`}
                    >
                        <span>
                            {project.number}
                        </span>

                        <h3>
                            {project.title}
                        </h3>

                        <p>
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;