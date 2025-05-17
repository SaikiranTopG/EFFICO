import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Permission = () => {
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted to admin for role change to 'Manager'.");
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        backgroundColor: "#010105",
        minHeight: "100vh",
        color: "#cfbfa8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#1f2937",
          padding: "30px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2>Request Manager Access</h2>

        <label style={{ display: "block", marginTop: "20px" }}>Reason:</label>
        <textarea
          required
          rows={4}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Why do you need manager access?"
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#2d3748",
            color: "#cfbfa8",
            border: "1px solid #444",
            borderRadius: "5px",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#cfbfa8",
            color: "#1a1a1a",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Permission;
