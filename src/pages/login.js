import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      // Handle login result
      if (result.role) {
        localStorage.setItem("role", result.role);
        localStorage.setItem("employeeId", username);

        if (result.role === "admin") navigate("/admin");
        else if (result.role === "manager") navigate("/manager-dashboard");
        else navigate("/dashboard");
      } else {
        alert("Invalid login. Please check your credentials.");
      }
    } catch (error) {
      alert("Login failed. Server error.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      {/* Left Panel */}
      <div className="left-panel">
        <form className="login-box" onSubmit={handleLogin}>
          <h1>Welcome to Effico</h1>
          <p>Login Page</p>

          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="options">
            <label className="options-label">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="options-link">
              Forgot password
            </a>
          </div>

          <button type="submit">Login</button>

          <p className="signup">
            New user? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="overlay-text">
          <h2>Designed for Excellence</h2>
          <p>“Efficiency reimagined with intelligent task assignment.”</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
