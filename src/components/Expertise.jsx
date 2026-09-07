import { expertise } from "../data/Expertise";

function Expertise() {
    return (
        <section id="expertise" className="section">
            <p className="section-label">
                &gt; expertise
            </p>

            <h2>Core IT Expertise</h2>

            <div className="project-grid">
                {expertise.map((item) => (
                    <div
                        className="project-card"
                        key={item.number}
                    >
                        <span>
                            {item.number}
                        </span>

                        <h3>
                            {item.title}
                        </h3>

                        <p>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Expertise;