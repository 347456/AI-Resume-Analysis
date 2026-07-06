import { useState } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UploadResume() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [text, setText] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setMessage("");
        setText("");
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("⚠️ Please select a resume first.");
            return;
        }

        const formData = new FormData();
        formData.append("resume", file);

        try {
            setLoading(true);
            setMessage("⏳ Uploading and analyzing with Llama...");

            const response = await axios.post(
                "http://localhost:5000/api/resume/upload",
                formData
            );

            setMessage(response.data.message || "✅ Upload Successful!");

            const extracted =
                response.data.resume?.extractedText ||
                response.data.extractedText ||
                response.data.text ||
                "";

            setText(extracted);

        } catch (error) {
            console.error("Upload Error:", error);
            setMessage(
                "❌ " + (error.response?.data?.message || error.message || "Upload Failed")
            );
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadPDF = () => {
        if (!text) return;

        const element = document.getElementById("pdf-report-content");

        const opt = {
            margin: 10,
            filename: `Resume_Analysis_Report_${Date.now()}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    };

    const styles = {
        pageWrapper: {
            width: "100%",
            backgroundColor: "#f4f7fe",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        },
        mainContent: {
            width: "100%",
            padding: "60px 0",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            width: "90%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "45px 35px",
            fontFamily: "'Inter', system-ui, sans-serif",
            backgroundColor: "#ffffff",
            color: "#475569",
            borderRadius: "16px",
            boxShadow: "0 15px 35px rgba(37, 99, 235, 0.06), 0 5px 15px rgba(0, 0, 0, 0.04)",
            border: "1px solid #e2e8f0",
            textAlign: "center"
        },
        title: {
            fontSize: "32px",
            fontWeight: "800",
            color: "#1d4ed8",
            margin: "0 0 12px 0",
        },
        subtitle: {
            color: "#64748b",
            fontSize: "15px",
            margin: "0 0 35px 0",
            lineHeight: "1.6"
        },
        dropzone: {
            border: "2px dashed #93c5fd",
            padding: "60px 20px",
            borderRadius: "12px",
            backgroundColor: "#f8fafc",
            cursor: "pointer",
            transition: "all 0.2s ease",
            marginBottom: "25px",
            position: "relative",
        },
        fileInput: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: "pointer",
        },
        uploadIcon: {
            fontSize: "46px",
            color: "#2563eb",
            marginBottom: "12px",
            display: "block",
        },
        fileName: {
            color: "#1d4ed8",
            fontWeight: "700",
            fontSize: "16px",
            margin: 0,
        },
        button: {
            width: "100%",
            padding: "15px",
            backgroundColor: loading ? "#cbd5e1" : "#facc15",
            color: "#0f172a",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "700",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            boxShadow: loading ? "none" : "0 4px 12px rgba(250, 204, 21, 0.3)",
        },
        downloadButton: {
            padding: "10px 20px",
            backgroundColor: "#2563eb", // Premium Blue
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 10px rgba(37, 99, 235, 0.2)",
        },
        message: {
            margin: "20px 0 0 0",
            fontSize: "14px",
            fontWeight: "600",
            padding: "12px",
            borderRadius: "8px",
            backgroundColor: message ? "#f1f5f9" : "transparent",
            color: message.includes("❌") ? "#dc2626" : message.includes("✅") ? "#16a34a" : "#2563eb",
        },
        textareaContainer: {
            marginTop: "35px",
            textAlign: "left",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "30px",
        },
        headerFlex: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
        },
        textareaLabel: {
            fontSize: "18px",
            fontWeight: "700",
            color: "#1d4ed8",
            margin: 0,
        },
        pdfTemplate: {
            padding: "25px",
            backgroundColor: "#f8fafc",
            border: "1px solid #cbd5e1",
            borderRadius: "12px",
            color: "#1e293b",
            fontSize: "15px",
            lineHeight: "1.7",
            whiteSpace: "pre-wrap", 
            fontFamily: "inherit",
        }
    };

    return (
        <div style={styles.pageWrapper}>
            <Navbar />
            <main style={styles.mainContent}>
                <div style={styles.container}>
                    <h2 style={styles.title}>Analyze Your Resume</h2>
                    <p style={styles.subtitle}>
                        Upload your document to run an instant ATS compatibility and keyword check.
                    </p>

                    <div style={{
                        ...styles.dropzone,
                        borderColor: file ? "#2563eb" : "#93c5fd",
                        backgroundColor: file ? "#eff6ff" : "#f8fafc"
                    }}>
                        <span style={styles.uploadIcon}>📂</span>
                        {file ? (
                            <p style={styles.fileName}>📄 {file.name}</p>
                        ) : (
                            <p style={{ margin: 0, color: "#64748b", fontSize: "15px" }}>
                                Drag and drop your resume here, or <span style={{ color: "#2563eb", fontWeight: "700" }}>browse</span>
                                <br /><small style={{ fontSize: "12px", color: "#94a3b8" }}>Supports PDF, DOC, DOCX</small>
                            </p>
                        )}
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            style={styles.fileInput}
                        />
                    </div>

                    <button
                        onClick={handleUpload}
                        disabled={loading}
                        style={styles.button}
                        onMouseOver={(e) => !loading && (e.target.style.backgroundColor = "#eab308")}
                        onMouseOut={(e) => !loading && (e.target.style.backgroundColor = "#facc15")}
                    >
                        {loading ? "Processing..." : "Upload & Analyze"}
                    </button>

                    {message && <p style={styles.message}>{message}</p>}

                    {text && (
                        <div style={styles.textareaContainer}>
                            <div style={styles.headerFlex}>
                                <label style={styles.textareaLabel}>📋 AI Analysis Report</label>
                               
                                <button
                                    onClick={handleDownloadPDF}
                                    style={styles.downloadButton}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
                                >
                                    📥 Download Report PDF
                                </button>
                            </div>


                            <div id="pdf-report-content" style={styles.pdfTemplate}>
                                <h2 style={{ color: '#1d4ed8', marginTop: 0, borderBottom: '2px solid #2563eb', paddingBottom: '10px' }}>
                                    AI Resume Analysis Report
                                </h2>
                                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
                                    Generated on: {new Date().toLocaleDateString()}
                                </p>
                                {text}
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default UploadResume;