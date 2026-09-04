import experience from "../data/Experience";

function Experience() {
    return (
        <section id="experience" className="section">
            <p className="section-label">
                &gt; experience
            </p>

            <h2>Work History</h2>

            <div className="timeline">
                {experience.map((item, index) => (
                    <div
                        className="timeline-item"
                        key={index}
                    >
                        <div className="timeline-meta">
                            <span className="timeline-date">
                                {item.date}
                            </span>

                            {item.current && (
                                <span
                                    className="status"
                                    title="Current role"
                                ></span>
                            )}
                        </div>

                        <div className="timeline-body">
                            <h3>{item.role}</h3>

                            <p className="timeline-org">
                                {item.company}

                                <span>
                                    {" "}
                                    — {item.description}
                                </span>
                            </p>

                            <p>
                                {item.details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;