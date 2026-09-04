import { useState } from "react";

const SOCIAL_LINKS = {
    github:
        "https://github.com/nitunjaychauhan4354-ctrl",
    linkedin:
        "https://linkedin.com/in/your-username",
};

function Contact() {
    const [copied, setCopied] = useState("");

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(label);

            setTimeout(() => {
                setCopied("");
            }, 1500);
        });
    };

    return (
        <section
            id="contact"
            className="section contact"
        >
            <p className="section-label">
                &gt; contact
            </p>

            <h2>Let's Connect</h2>

            <p>
                Interested in working together or discussing
                an IT opportunity?
            </p>

            <div className="contact-panel">
                <button
                    type="button"
                    className="contact-row"
                    onClick={() =>
                        copyToClipboard(
                            "nitunjaychauhan@gmail.com",
                            "email"
                        )
                    }
                >
                    <span>email</span>

                    <strong>
                        nitunjaychauhan@gmail.com
                    </strong>

                    <span className="copy-hint">
                        {copied === "email"
                            ? "copied"
                            : "copy"}
                    </span>
                </button>

                <button
                    type="button"
                    className="contact-row"
                    onClick={() =>
                        copyToClipboard(
                            "+918468964354",
                            "phone"
                        )
                    }
                >
                    <span>phone</span>

                    <strong>
                        +91 84689 64354
                    </strong>

                    <span className="copy-hint">
                        {copied === "phone"
                            ? "copied"
                            : "copy"}
                    </span>
                </button>

                <div className="contact-row contact-row--static">
                    <span>based</span>

                    <strong>
                        Old Goa, Goa, India
                    </strong>
                </div>
            </div>

            <div className="buttons contact-buttons">
                <a
                    href="mailto:nitunjaychauhan@gmail.com"
                    className="btn primary"
                >
                    Contact Me
                </a>

                <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                >
                    [GitHub]
                </a>

                <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                >
                    [LinkedIn]
                </a>
            </div>
        </section>
    );
}

export default Contact;