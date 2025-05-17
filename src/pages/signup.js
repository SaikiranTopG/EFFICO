import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const apiUrl = "http://localhost:8000/register/";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === "duplicate") {
        alert("User already exists!");
      } else if (result.status === "fail") {
        alert("Signup failed. Please try again.");
      } else if (result.status === "success" || result.username) {
        alert("Signup successful!");
        navigate("/");
      } else {
        alert("Unexpected response from server.");
      }
    } catch (err) {
      alert("Error signing up!");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="login-box">
          <h1>Welcome to Effico</h1>
          <p>Create your account</p>

          <form className="form-box" onSubmit={handleSignup}>
            <label>Username</label>
            <input name="username" type="text" required />

            <label>Email ID</label>
            <input name="email" type="email" required />

            <label>Name</label>
            <input name="name" type="text" required />

            <label>Password</label>
            <input name="password" type="password" required />

            <label>Skills</label>
            <input name="skills" type="text" placeholder="e.g. React, Python" />

            <button type="submit">Sign up</button>
          </form>

          <p className="signup">
            Already registered? <Link to="/">Login</Link>
          </p>
        </div>
      </div>

      <div className="right-panel">
        <div className="overlay-text">
          <h2>Designed for Excellence</h2>
          <p>"Efficiency reimagined with intelligent task assignment"</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
