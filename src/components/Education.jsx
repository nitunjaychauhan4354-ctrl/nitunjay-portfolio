function Education() {
    return (
        <section
            id="education"
            className="section education-grid"
        >
            <div>
                <p className="section-label">
                    &gt; education
                </p>

                <h2>Education</h2>

                <div className="edu-list">
                    <div className="edu-item">
                        <div>
                            <h3>
                                Bachelor of Computer Applications
                            </h3>

                            <p className="timeline-org">
                                Don Bosco College, Panjim, Goa
                            </p>
                        </div>

                        <span className="timeline-date">
                            2021 — 2024
                        </span>
                    </div>

                    <div className="edu-item">
                        <div>
                            <h3>
                                Higher Secondary, Commerce
                            </h3>

                            <p className="timeline-org">
                                Don Bosco Higher Secondary School
                            </p>
                        </div>

                        <span className="timeline-date">
                            2019 — 2021
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <p className="section-label">
                    &gt; languages
                </p>

                <h2>Languages</h2>

                <div className="lang-list">
                    <div className="lang-item">
                        <div className="lang-row">
                            <span>Hindi</span>
                            <span className="lang-level">
                                Native
                            </span>
                        </div>

                        <div className="lang-bar">
                            <span
                                style={{
                                    width: "100%",
                                }}
                            ></span>
                        </div>
                    </div>

                    <div className="lang-item">
                        <div className="lang-row">
                            <span>English</span>
                            <span className="lang-level">
                                Proficient
                            </span>
                        </div>

                        <div className="lang-bar">
                            <span
                                style={{
                                    width: "80%",
                                }}
                            ></span>
                        </div>
                    </div>

                    <div className="lang-item">
                        <div className="lang-row">
                            <span>Konkani</span>
                            <span className="lang-level">
                                Intermediate
                            </span>
                        </div>

                        <div className="lang-bar">
                            <span
                                style={{
                                    width: "60%",
                                }}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;