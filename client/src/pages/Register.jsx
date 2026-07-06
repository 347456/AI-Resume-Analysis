import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authServices";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await registerUser(form);

            alert(res.data.message);

            navigate("/login");

        } catch (err) {

            alert(err.response?.data?.message || "Registration Failed");

        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg,#0d47a1,#1976d2,#42a5f5)",
                padding: "20px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    width: "420px",
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "40px",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#1565c0",
                        fontSize: "34px",
                        marginBottom: "10px",
                        fontWeight: "bold",
                    }}
                >
                    Create Account
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        color: "#666",
                        marginBottom: "30px",
                    }}
                >
                    Register to AI Resume Analyzer
                </p>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "14px",
                        marginBottom: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        fontSize: "16px",
                        boxSizing: "border-box",
                    }}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "14px",
                        marginBottom: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        fontSize: "16px",
                        boxSizing: "border-box",
                    }}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "14px",
                        marginBottom: "25px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        fontSize: "16px",
                        boxSizing: "border-box",
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "15px",
                        background: "#1565c0",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Register
                </button>

                <p
                    style={{
                        textAlign: "center",
                        marginTop: "20px",
                        color: "#555",
                    }}
                >
                    Already have an account?

                    <Link
                        to="/login"
                        style={{
                            color: "#1565c0",
                            marginLeft: "8px",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Register;