function CTA() {
    return (
        <section
            style={{
                background: "linear-gradient(135deg, #1565C0, #1E88E5, #42A5F5)",
                padding: "80px 20px",
                textAlign: "center",
                color: "#fff",
            }}
        >
            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                <h2
                    style={{
                        fontSize: "48px",
                        fontWeight: "700",
                        marginBottom: "20px",
                    }}
                >
                    Ready to Improve Your Resume?
                </h2>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#E3F2FD",
                        lineHeight: "1.7",
                        marginBottom: "40px",
                    }}
                >
                    Join thousands of job seekers who use AI to optimize their
                    resumes, increase ATS scores, and land interviews faster.
                </p>

                <button
                    style={{
                        background: "#fff",
                        color: "#1565C0",
                        border: "none",
                        padding: "15px 40px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        cursor: "pointer",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                        transition: "0.3s",
                    }}
                    onMouseOver={(e) => {
                        e.target.style.background = "#FFD54F";
                        e.target.style.color = "#000";
                        e.target.style.transform = "translateY(-3px)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.background = "#fff";
                        e.target.style.color = "#1565C0";
                        e.target.style.transform = "translateY(0)";
                    }}
                >
                    🚀 Get Started
                </button>
            </div>
        </section>
    );
}

export default CTA;