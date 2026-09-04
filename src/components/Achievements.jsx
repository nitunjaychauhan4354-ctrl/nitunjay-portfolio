function Achievements() {
    const achievements = [
        {
            number: "01",
            title: "GRE Deployment",
            description:
                "Supported deployment of 500+ smart devices for Guest Room Entertainment systems with Tata Sky and Hudini.",
        },

        {
            number: "02",
            title: "Cambium Wi-Fi",
            description:
                "Assisted with installation and configuration of 200+ Cambium Networks access points for hotel-wide wireless coverage.",
        },

        {
            number: "03",
            title: "#ABC2025 Support",
            description:
                "Part of the core on-site IT support team for IHCL's flagship event, keeping network operations running through peak load.",
        },
    ];

    return (
        <section id="achievements" className="section">
            <p className="section-label">
                &gt; achievements
            </p>

            <h2>Achievements</h2>

            <div className="project-grid">
                {achievements.map((achievement) => (
                    <div
                        className="project-card"
                        key={achievement.number}
                    >
                        <span>
                            {achievement.number}
                        </span>

                        <h3>
                            {achievement.title}
                        </h3>

                        <p>
                            {achievement.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Achievements;