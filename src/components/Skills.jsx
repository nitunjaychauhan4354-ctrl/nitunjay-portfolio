import skills from "../data/Skills";

function SkillGroup({ label, items }) {
    return (
        <div className="skill-group">
            <p className="skill-group-label">
                {label}
            </p>

            <div className="skills">
                {items.map((skill) => (
                    <span key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Skills() {
    return (
        <section id="skills" className="section">
            <p className="section-label">
                &gt; skills
            </p>

            <h2>Technical Skills</h2>

            <div className="skill-groups">
                <SkillGroup
                    label="Networking & Security"
                    items={skills.networking}
                />

                <SkillGroup
                    label="Systems & Infrastructure"
                    items={skills.systems}
                />

                <SkillGroup
                    label="Enterprise & Support"
                    items={skills.enterprise}
                />
                
                <SkillGroup
                    label="Development & Tools"
                    items={skills.tools}
                />

            </div>
        </section>
    );
}

export default Skills;