import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE } from "../config";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? `${API_BASE}/api/auth/login`
      : `${API_BASE}/api/auth/register`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Server error");
        return;
      }

      if (isLogin) {
        localStorage.setItem("token", data.token);
        alert("Login successful ✅");
        navigate("/");
      } else {
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

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p>
        {isLogin ? "No account? " : "Already have account? "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Register" : "Login"}
        </a>
      </p>

      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default Login;
