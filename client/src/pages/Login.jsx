import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authServices";

function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
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
            const res = await loginUser(form);

            // Token Save
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert("Login Successful");

            navigate("/");

        } catch (err) {
            alert(err.response?.data?.message || "Invalid Email or Password");
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                    "linear-gradient(135deg,#0f4c81,#1976d2,#42a5f5)",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    width: "420px",
                    background: "#fff",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
                    textAlign: "center",
                }}
            >
                <h1
                    style={{
                        color: "#1565c0",
                        marginBottom: "10px",
                        fontSize: "35px",
                    }}
                >
                    Welcome Back
                </h1>

                <p
                    style={{
                        color: "#777",
                        marginBottom: "30px",
                    }}
                >
                    Login to AI Resume Analyzer
                </p>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "15px",
                        marginBottom: "20px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        boxSizing: "border-box",
                    }}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "15px",
                        marginBottom: "25px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        boxSizing: "border-box",
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "15px",
                        border: "none",
                        borderRadius: "10px",
                        background: "#1565c0",
                        color: "white",
                        fontSize: "18px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Login
                </button>

                <p style={{ marginTop: "20px" }}>
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        style={{
                            color: "#1565c0",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                    >
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;