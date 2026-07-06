function HowItWorks() {
    const steps = [
        "Upload Resume",
        "AI Reads Resume",
        "Analyze ATS Score",
        "Download Report",
    ];

    return (
        <section
            style={{
                padding: "80px 20px",
                background: "#ffffff",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "42px",
                        fontWeight: "bold",
                        marginBottom: "60px",
                        color: "#1e3a8a",
                    }}
                >
                    How It Works
                </h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "30px",
                        flexWrap: "wrap",
                    }}
                >
                    {steps.map((step, index) => (
                        <div
                            key={step}
                            style={{
                                flex: "1",
                                minWidth: "220px",
                                textAlign: "center",
                                padding: "30px 20px",
                                background: "#f8fafc",
                                borderRadius: "12px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                            }}
                        >
                            <div
                                style={{
                                    width: "70px",
                                    height: "70px",
                                    borderRadius: "50%",
                                    background: "#2563eb",
                                    color: "#fff",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "0 auto",
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                }}
                            >
                                {index + 1}
                            </div>

                            <h3
                                style={{
                                    marginTop: "25px",
                                    fontSize: "22px",
                                    fontWeight: "600",
                                    color: "#1f2937",
                                }}
                            >
                                {step}
                            </h3>

                            <p
                                style={{
                                    marginTop: "12px",
                                    color: "#6b7280",
                                    lineHeight: "1.6",
                                    fontSize: "15px",
                                }}
                            >
                                {index === 0 &&
                                    "Select and upload your resume in PDF or DOCX format."}

                                {index === 1 &&
                                    "Our AI scans your resume for skills, formatting and content quality."}

                                {index === 2 &&
                                    "Get a detailed ATS score with keyword and grammar analysis."}

                                {index === 3 &&
                                    "Download the complete report and improve your resume instantly."}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;  