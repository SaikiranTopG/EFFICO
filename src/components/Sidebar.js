// --- components/Sidebar.jsx ---
import React from "react";

export default function Sidebar({ employee }) {
  return (
    <div
      style={{
        width: "360px",
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "32px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        boxShadow: "2px 0 10px rgba(0, 0, 0, 0.5)",
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          marginBottom: "24px",
          fontWeight: "600",
          color: "#cfbfa8",
          borderBottom: "1px solid #374151",
          paddingBottom: "12px",
          textAlign: "center",
        }}
      >
        👤 Employee Details
      </h2>

      <div
        style={{
          lineHeight: "2",
          fontSize: "16px",
          backgroundColor: "#2c2c2e",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.5)",
          transition: "all 0.3s ease",
        }}
      >
        <p>
          <strong style={{ color: "#cfbfa8" }}>👤 Name:</strong>{" "}
          <span style={{ color: "#e5e7eb" }}>Amit Sharma</span>
        </p>
        <p>
          <strong style={{ color: "#cfbfa8" }}>💼 Role:</strong>{" "}
          <span style={{ color: "#e5e7eb" }}>Frontend Developer</span>
        </p>
        <p>
          <strong style={{ color: "#cfbfa8" }}>📧 Email:</strong>{" "}
          <span style={{ color: "#e5e7eb" }}>amit.sharma@effico.com</span>
        </p>
        <p>
          <strong style={{ color: "#cfbfa8" }}>🎂 DOB:</strong>{" "}
          <span style={{ color: "#e5e7eb" }}>1999-06-15</span>
        </p>
        <p>
          <strong style={{ color: "#cfbfa8" }}>🆔 ID:</strong>{" "}
          <span style={{ color: "#e5e7eb" }}>EMP1024</span>
        </p>
      </div>
    </div>
  );
}
