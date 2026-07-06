import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                position: "sticky",
                top: "0",
                left: "0",
                width: "100%",
                zIndex: "1000",
                background: "linear-gradient(to right, #1d4ed8, #2563eb, #4f46e5)",
                boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 30px",
                    height: "65px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Logo */}
                <Link
                    to="/"
                    style={{
                        color: "#fff",
                        fontSize: "28px",
                        fontWeight: "bold",
                        textDecoration: "none",
                        letterSpacing: "1px",
                    }}
                >
                    AI Resume
                </Link>

                {/* Navigation Links */}
                <div
                    style={{
                        display: "flex",
                        gap: "30px",
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "17px",
                        }}
                    >
                        Home
                    </Link>

                    <Link
                        to="/features"
                        style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "17px",
                        }}
                    >
                        Features
                    </Link>

                    <Link
                        to="/howitworks"
                        style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "17px",
                        }}
                    >
                        How It Works
                    </Link>
                </div>

                {/* Buttons */}
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                    }}
                >
                    <Link
                        to="/login"
                        style={{
                            padding: "10px 18px",
                            borderRadius: "8px",
                            background: "#fff",
                            color: "#2563eb",
                            textDecoration: "none",
                            fontWeight: "600",
                        }}
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        style={{
                            padding: "10px 18px",
                            borderRadius: "8px",
                            background: "#facc15",
                            color: "#000",
                            textDecoration: "none",
                            fontWeight: "600",
                        }}
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;