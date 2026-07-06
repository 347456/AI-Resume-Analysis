function Footer() {
    return (
        <footer
            style={{
                background: "#111827",
                color: "#ffffff",
                padding: "50px 20px 30px",
                marginTop: "50px",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        marginBottom: "15px",
                        color: "#60a5fa",
                    }}
                >
                    AI Resume Analysis
                </h2>

                <p
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto 25px",
                        color: "#d1d5db",
                        lineHeight: "1.8",
                        fontSize: "16px",
                    }}
                >
                    Build ATS-friendly resumes with the power of Artificial Intelligence.
                    Get instant resume analysis, AI suggestions, keyword optimization,
                    grammar checking, and professional feedback to improve your chances of
                    getting hired.
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px",
                        flexWrap: "wrap",
                        marginBottom: "30px",
                    }}
                >
                    <a
                        href="/"
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                        }}
                    >
                        Home
                    </a>

                    <a
                        href="/features"
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                        }}
                    >
                        Features
                    </a>

                    <a
                        href="/how"
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                        }}
                    >
                        How It Works
                    </a>

                    <a
                        href="/contact"
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                        }}
                    >
                        Contact
                    </a>
                </div>

                <hr
                    style={{
                        border: "none",
                        borderTop: "1px solid #374151",
                        margin: "20px 0",
                    }}
                />

                <p
                    style={{
                        color: "#9ca3af",
                        fontSize: "15px",
                    }}
                >
                    © 2026 AI Resume Analysis. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;