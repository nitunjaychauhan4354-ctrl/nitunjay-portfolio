import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const SOCIAL_LINKS = {
    github:
        "https://github.com/nitunjaychauhan4354-ctrl",
    linkedin:
        "https://linkedin.com/in/your-username",
};

function Contact() {
    const [copied, setCopied] = useState("");

    const [state, handleSubmit] = useForm("xvkoqaaj");

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

            {state.succeeded ? (
                <div className="contact-panel">
                    <div className="contact-row contact-row--static">
                        <span>status</span>

                        <strong>
                            ✓ Message sent successfully
                        </strong>
                    </div>

                    <div className="contact-row contact-row--static">
                        <span>response</span>

                        <strong>
                            Thanks for reaching out. I'll get
                            back to you soon.
                        </strong>
                    </div>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="contact-form"
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">
                                name
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                            />

                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                email
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                required
                            />

                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">
                            subject
                        </label>

                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            placeholder="What would you like to discuss?"
                            required
                        />

                        <ValidationError
                            prefix="Subject"
                            field="subject"
                            errors={state.errors}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Write your message..."
                            required
                        ></textarea>

                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    {state.errors && (
                        <div className="form-error">
                            Unable to send your message.
                            Please try again.
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn primary"
                        disabled={state.submitting}
                    >
                        {state.submitting
                            ? "Sending..."
                            : "Send Message"}
                    </button>
                </form>
            )}

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
                    GitHub
                </a>

                <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}

export default Contact;