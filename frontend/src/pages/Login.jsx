import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ CLEAN SINGLE handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 ONLY THIS URL CHANGED
    const url = isLogin
      ? "https://chic-threads-backend.onrender.com/api/auth/login"
      : "https://chic-threads-backend.onrender.com/api/auth/register";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // ❌ backend error
      if (!res.ok) {
        alert(data.error || "Server error");
        return;
      }

      // ✅ LOGIN SUCCESS
      if (isLogin) {
        localStorage.setItem("token", data.token);
        alert("Login successful ✅");
        navigate("/");
      }
      // ✅ REGISTER SUCCESS
      else {
        alert("Registration successful 🎉 Please login");
        setIsLogin(true);
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">
        {isLogin ? "Welcome Back" : "Create Account"}
      </h1>

      <p className="auth-subtitle">
        {isLogin
          ? "Sign in to continue shopping"
          : "Join us for exclusive offers"}
      </p>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        {isLogin && (
          <p style={{ textAlign: "right", marginBottom: "20px" }}>
            <span style={{ color: "#c48b8b", fontSize: "0.9rem" }}>
              Forgot Password?
            </span>
          </p>
        )}

        <button type="submit" className="auth-btn">
          {isLogin ? "Sign In" : "Create Account"}
        </button>
      </form>

      <p className="auth-footer">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Sign Up" : "Sign In"}
        </a>
      </p>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <Link to="/" style={{ color: "#7a6b6b", fontSize: "0.9rem" }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
