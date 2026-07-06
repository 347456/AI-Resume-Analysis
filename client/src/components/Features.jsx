import { useNavigate } from "react-router-dom";

function Features() {
    const navigate = useNavigate();

    const features = [
        {
            title: "ATS Resume Score",
            desc: "Get an instant ATS compatibility score to know how likely your resume is to pass recruiter software."
        },
        {
            title: "AI Resume Suggestions",
            desc: "Receive smart recommendations to improve grammar, formatting and professional writing."
        },
        {
            title: "Keyword Optimization",
            desc: "Find missing keywords from your target job description and increase your chances of getting shortlisted."
        },
        {
            title: "Resume Analysis",
            desc: "Detailed report showing strengths, weaknesses and sections that need improvement."
        },
        {
            title: "Grammar Checker",
            desc: "Automatically detect spelling and grammar mistakes for a polished resume."
        },
        {
            title: "Professional Formatting",
            desc: "Improve spacing, headings and layout to create a clean and attractive resume."
        }
    ];

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f4f7fb",
                padding: "60px 30px"
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "auto"
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "45px",
                        marginBottom: "15px",
                        color: "#1e3a8a"
                    }}
                >
                    Our Features
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        fontSize: "18px",
                        color: "#555",
                        maxWidth: "700px",
                        margin: "0 auto 50px"
                    }}
                >
                    Our AI-powered Resume Analyzer helps job seekers create professional,
                    ATS-friendly resumes with detailed feedback, keyword optimization,
                    grammar checking and intelligent suggestions.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                        gap: "25px"
                    }}
                >
                    {features.map((item) => (
                        <div
                            key={item.title}
                            style={{
                                background: "#fff",
                                padding: "30px",
                                borderRadius: "12px",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                            }}
                        >
                            <h2
                                style={{
                                    color: "#2563eb",
                                    marginBottom: "15px"
                                }}
                            >
                                {item.title}
                            </h2>

                            <p
                                style={{
                                    color: "#555",
                                    lineHeight: "1.7"
                                }}
                            >
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Extra Section */}
                <div
                    style={{
                        marginTop: "70px",
                        background: "#fff",
                        padding: "40px",
                        borderRadius: "12px",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                    }}
                >
                    <h2
                        style={{
                            color: "#1e3a8a",
                            marginBottom: "20px"
                        }}
                    >
                        Why Choose Our AI Resume Analyzer?
                    </h2>

                    <ul
                        style={{
                            lineHeight: "2",
                            color: "#444",
                            fontSize: "17px"
                        }}
                    >
                        <li>✔ Instant ATS Resume Score</li>
                        <li>✔ AI-Powered Resume Review</li>
                        <li>✔ Smart Keyword Suggestions</li>
                        <li>✔ Grammar & Spell Checking</li>
                        <li>✔ Professional Resume Formatting</li>
                        <li>✔ Easy to Use Interface</li>
                        <li>✔ Secure Resume Upload</li>
                        <li>✔ Detailed Performance Report</li>
                    </ul>

                    <div style={{ marginTop: "30px" }}>
                        <button
                            onClick={() => navigate("/upload")}
                            style={{
                                padding: "15px 30px",
                                background: "#2563eb",
                                color: "#fff",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "17px"
                            }}
                        >
                            Analyze My Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;