import { useEffect, useRef, useState } from "react";

const COMMANDS = {
    help: [
        "Available commands:",
        "about        - About Nitunjay",
        "skills       - Technical skills",
        "experience   - Work experience",
        "projects     - View projects",
        "contact      - Contact information",
        "clear        - Clear terminal",
        "whoami       - Display user information",
        "date         - Display current date",
    ],

    about: [
        "Nitunjay Chauhan",
        "IT Infrastructure & Network Specialist",
        "",
        "BCA graduate with experience in IT infrastructure,",
        "networking, technical support and hotel IT systems.",
    ],

    skills: [
        "Technical Skills",
        "----------------",
        "",
        "Networking",
        "  > Wi-Fi Troubleshooting",
        "  > Network Monitoring",
        "  > Cambium Access Points",
        "  > Switch Configuration",
        "  > Active Directory",
        "  > Server Monitoring",
        "  > POS / GRE Systems",
        "",
        "Development",
        "  > React",
        "  > JavaScript",
        "  > HTML / CSS",
        "  > Tailwind CSS",
        "  > MongoDB",
        "  > MySQL",
        "  > Python",
        "  > C",
    ],

    experience: [
        "Work Experience",
        "----------------",
        "",
        "Senior Technical Support Engineer",
        "ACCEL IT | Aug 2025 - Present",
        "",
        "Help Desk Engineer & IT Support",
        "MICROSENCE | Jul 2024 - Aug 2025",
        "",
        "Computer Hardware Technician",
        "Bits Bytes Technologies | Apr 2024 - Jul 2024",
    ],

    projects: [
        "Projects",
        "--------",
        "",
        "01  Level Up",
        "    Fitness application",
        "",
        "02  Personal Portfolio",
        "    React + Vite + Tailwind CSS",
        "",
        "Use the Projects section above to explore more.",
    ],

    contact: [
        "Contact Information",
        "-------------------",
        "",
        "Email    : nitunjaychauhan@gmail.com",
        "Phone    : +91 84689 64354",
        "Location : Old Goa, Goa, India",
        "",
        "GitHub   : github.com/nitunjaychauhan4354-ctrl",
    ],

    whoami: [
        "nitunjay@portfolio",
        "IT Infrastructure & Network Specialist",
    ],
};

function Terminal() {
    const [history, setHistory] = useState([
        {
            type: "output",
            lines: [
                "Welcome to Nitunjay's terminal.",
                "Type 'help' to see available commands.",
            ],
        },
    ]);

    const [command, setCommand] = useState("");
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current?.focus();
    // }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop =
                terminalRef.current.scrollHeight;
        }
    }, [history]);

    const executeCommand = (event) => {
        event.preventDefault();

        const input = command.trim().toLowerCase();

        if (!input) {
            return;
        }

        if (input === "clear") {
            setHistory([]);
            setCommand("");
            return;
        }

        let output;

        if (input === "date") {
            output = [
                new Date().toLocaleString(),
            ];
        } else if (COMMANDS[input]) {
            output = COMMANDS[input];
        } else {
            output = [
                `Command not found: ${input}`,
                "Type 'help' to see available commands.",
            ];
        }

        setHistory((previous) => [
            ...previous,
            {
                type: "command",
                text: input,
            },
            {
                type: "output",
                lines: output,
            },
        ]);

        setCommand("");
    };

    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    return (
        <section
            id="terminal"
            className="section terminal-section"
        >
            <p className="section-label">
                &gt; terminal
            </p>

            <h2>Interactive Terminal</h2>

            <p>
                Explore my portfolio using the command line.
            </p>

            <div
                className="terminal-window"
                onClick={handleTerminalClick}
            >
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <span className="terminal-title">
                        root@nitunjay:~
                    </span>
                </div>

                <div
                    className="terminal-body"
                    ref={terminalRef}
                >
                    {history.map((item, index) => {
                        if (item.type === "command") {
                            return (
                                <div
                                    className="terminal-line"
                                    key={index}
                                >
                                    <span className="terminal-prompt">
                                        nitunjay@portfolio:~$
                                    </span>

                                    <span>
                                        {item.text}
                                    </span>
                                </div>
                            );
                        }

                        return (
                            <div
                                className="terminal-output"
                                key={index}
                            >
                                {item.lines.map(
                                    (line, lineIndex) => (
                                        <div
                                            key={lineIndex}
                                        >
                                            {line ||
                                                "\u00A0"}
                                        </div>
                                    )
                                )}
                            </div>
                        );
                    })}

                    <form
                        onSubmit={executeCommand}
                        className="terminal-input-line"
                    >
                        <span className="terminal-prompt">
                            root@nitunjay: ~$
                        </span>

                        <input
                            ref={inputRef}
                            type="text"
                            value={command}
                            onChange={(event) =>
                                setCommand(
                                    event.target.value
                                )
                            }
                            autoComplete="off"
                            spellCheck="false"
                            aria-label="Terminal command"
                        />

                        <span className="terminal-cursor">
                            █
                        </span>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Terminal;