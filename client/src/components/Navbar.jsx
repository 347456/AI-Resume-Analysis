// import { Link } from "react-router-dom";

// function Navbar() {
//     return (
//         <nav
//             style={{
//                 position: "sticky",
//                 top: "0",
//                 left: "0",
//                 width: "100%",
//                 zIndex: "1000",
//                 background: "linear-gradient(to right, #1d4ed8, #2563eb, #4f46e5)",
//                 boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
//             }}
//         >
//             <div
//                 style={{
//                     maxWidth: "1200px",
//                     margin: "0 auto",
//                     padding: "0 30px",
//                     height: "65px",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                 }}
//             >
//                 {/* Logo */}
//                 <Link
//                     to="/"
//                     style={{
//                         color: "#fff",
//                         fontSize: "28px",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                         letterSpacing: "1px",
//                     }}
//                 >
//                     AI Resume
//                 </Link>

//                 {/* Navigation Links */}
//                 <div
//                     style={{
//                         display: "flex",
//                         gap: "30px",
//                     }}
//                 >
//                     <Link
//                         to="/"
//                         style={{
//                             color: "#fff",
//                             textDecoration: "none",
//                             fontSize: "17px",
//                         }}
//                     >
//                         Home
//                     </Link>

//                     <Link
//                         to="/features"
//                         style={{
//                             color: "#fff",
//                             textDecoration: "none",
//                             fontSize: "17px",
//                         }}
//                     >
//                         Features
//                     </Link>

//                     <Link
//                         to="/howitworks"
//                         style={{
//                             color: "#fff",
//                             textDecoration: "none",
//                             fontSize: "17px",
//                         }}
//                     >
//                         How It Works
//                     </Link>
//                 </div>

//                 {/* Buttons */}
//                 <div
//                     style={{
//                         display: "flex",
//                         gap: "15px",
//                     }}
//                 >
//                     <Link
//                         to="/login"
//                         style={{
//                             padding: "10px 18px",
//                             borderRadius: "8px",
//                             background: "#fff",
//                             color: "#2563eb",
//                             textDecoration: "none",
//                             fontWeight: "600",
//                         }}
//                     >
//                         Login
//                     </Link>

//                     <Link
//                         to="/register"
//                         style={{
//                             padding: "10px 18px",
//                             borderRadius: "8px",
//                             background: "#facc15",
//                             color: "#000",
//                             textDecoration: "none",
//                             fontWeight: "600",
//                         }}
//                     >
//                         Register
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
        window.location.reload();
    };

    return (
        <nav
            style={{
                position: "sticky",
                top: "0",
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
                    }}
                >
                    AI Resume
                </Link>

                {/* Navigation */}
                <div
                    style={{
                        display: "flex",
                        gap: "30px",
                    }}
                >
                    <Link
                        to="/"
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        Home
                    </Link>

                    <Link
                        to="/features"
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        Features
                    </Link>

                    <Link
                        to="/howitworks"
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        How It Works
                    </Link>
                </div>

                {/* Right Side */}
                {token && user ? (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                        }}
                    >
                        {/* Avatar */}
                        <div
                            style={{
                                width: "45px",
                                height: "45px",
                                borderRadius: "50%",
                                background: "#fff",
                                color: "#2563eb",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "bold",
                                fontSize: "20px",
                            }}
                        >
                            {user.name.charAt(0).toUpperCase()}
                        </div>

                        {/* User Info */}
                        <div style={{ color: "#fff" }}>
                            <div style={{ fontWeight: "bold" }}>
                                {user.name}
                            </div>

                            <div
                                style={{
                                    fontSize: "13px",
                                    opacity: 0.9,
                                }}
                            >
                                {user.email}
                            </div>
                        </div>

                        <button
                            onClick={logout}
                            style={{
                                padding: "10px 18px",
                                border: "none",
                                borderRadius: "8px",
                                background: "#ef4444",
                                color: "#fff",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
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
                )}
            </div>
        </nav>
    );
}

export default Navbar;