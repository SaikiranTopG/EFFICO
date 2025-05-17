import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const buttons = [
    { label: "Permission", onClick: () => navigate("/permission") },
    {
      label: "Logout",
      onClick: () => {
        alert("Logged out");
        navigate("/");
      },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        padding: "10px 20px",
        height: "60px",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginRight: "auto",
          color: "#cfbfa8",
        }}
      >
        🚀 Effico
      </div>
      {buttons.map((btn, i) => (
        <button
          key={i}
          onClick={btn.onClick}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            marginLeft: "10px",
            padding: "10px 16px",
            backgroundColor: hovered === i ? "#cfbfa8" : "hsl(240, 20%, 13%)",
            color: hovered === i ? "#1a1a1a" : "#cfbfa8",
            fontWeight: "bold",
            fontSize: "15px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
