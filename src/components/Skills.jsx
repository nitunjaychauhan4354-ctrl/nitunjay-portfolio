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
                    label="Networking & Hardware"
                    items={skills.networking}
                />

                <SkillGroup
                    label="Web Development"
                    items={skills.webDevelopment}
                />

                <SkillGroup
                    label="Tools & Systems"
                    items={skills.tools}
                />
                
                <SkillGroup
                    label="Programming"
                    items={skills.programming}
                />

            </div>
        </section>
    );
}

export default Skills;