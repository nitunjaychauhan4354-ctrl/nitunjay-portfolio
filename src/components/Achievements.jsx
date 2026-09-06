import { achievements } from "../data/Achivemnets";

function Achievements() {
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