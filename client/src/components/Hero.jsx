import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <section
            style={{
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(135deg, #020617, #172554, #312e81)",
                color: "#fff",
                minHeight: "100vh",
            }}
        >
            {/* Background Blur Effects */}
            <div
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "rgba(6,182,212,0.2)",
                    filter: "blur(100px)",
                }}
            ></div>

            <div
                style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "rgba(168,85,247,0.2)",
                    filter: "blur(120px)",
                }}
            ></div>

            <div
                style={{
                    position: "relative",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "100px 40px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Left Content */}
                <div style={{ flex: "1", minWidth: "350px" }}>
                    <span
                        style={{
                            display: "inline-block",
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            padding: "10px 20px",
                            borderRadius: "30px",
                            color: "#67e8f9",
                            fontSize: "14px",
                        }}
                    >
                        🚀 AI Resume Analyzer
                    </span>

                    <h1
                        style={{
                            marginTop: "30px",
                            fontSize: "64px",
                            fontWeight: "800",
                            lineHeight: "1.2",
                        }}
                    >
                        Build a Resume
                        <br />
                        <span style={{ color: "#22d3ee" }}>Recruiters Love</span>
                    </h1>

                    <p
                        style={{
                            marginTop: "30px",
                            fontSize: "20px",
                            lineHeight: "1.8",
                            color: "#cbd5e1",
                            maxWidth: "550px",
                        }}
                    >
                        Upload your resume and instantly receive ATS score,
                        AI-powered suggestions, keyword optimization,
                        grammar improvements, and professional feedback.
                    </p>

                    {/* Buttons */}
                    <div
                        style={{
                            marginTop: "40px",
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap",
                        }}
                    >
                        <button
                            onClick={() => navigate("/upload")}
                            style={{
                                padding: "15px 30px",
                                border: "none",
                                borderRadius: "12px",
                                background: "#06b6d4",
                                color: "#fff",
                                fontSize: "18px",
                                fontWeight: "600",
                                cursor: "pointer",
                            }}
                        >
                            Upload Resume
                        </button>

                        <button
                            style={{
                                padding: "15px 30px",
                                border: "1px solid rgba(255,255,255,0.3)",
                                borderRadius: "12px",
                                background: "rgba(255,255,255,0.1)",
                                color: "#fff",
                                fontSize: "18px",
                                fontWeight: "600",
                                cursor: "pointer",
                            }}
                        >
                            Learn More
                        </button>
                    </div>

                    {/* Stats */}
                    <div
                        style={{
                            marginTop: "50px",
                            display: "flex",
                            gap: "50px",
                            flexWrap: "wrap",
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    color: "#22d3ee",
                                    fontSize: "36px",
                                    margin: 0,
                                }}
                            >
                                50K+
                            </h2>
                            <p style={{ color: "#cbd5e1" }}>Resumes Reviewed</p>
                        </div>

                        <div>
                            <h2
                                style={{
                                    color: "#22d3ee",
                                    fontSize: "36px",
                                    margin: 0,
                                }}
                            >
                                95%
                            </h2>
                            <p style={{ color: "#cbd5e1" }}>ATS Accuracy</p>
                        </div>

                        <div>
                            <h2
                                style={{
                                    color: "#22d3ee",
                                    fontSize: "36px",
                                    margin: 0,
                                }}
                            >
                                24/7
                            </h2>
                            <p style={{ color: "#cbd5e1" }}>AI Feedback</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div
                    style={{
                        flex: "1",
                        minWidth: "350px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
                        alt="AI Resume"
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                            borderRadius: "25px",
                            border: "2px solid rgba(255,255,255,0.2)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;