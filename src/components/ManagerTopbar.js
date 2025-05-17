import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManagerTopbar() {
  const [hovered, setHovered] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const buttons = [
    {
      label: "🔔 Notifications",
      onClick: () => setShowNotifications(!showNotifications),
    },
    {
      label: "🚪 Logout",
      onClick: () => {
        alert("Logged out");
        navigate("/");
      },
    },
  ];

  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
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
          🚀 Effico Manager
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

      {showNotifications && (
        <div
          style={{
            backgroundColor: "#2c2c3a",
            padding: "10px 20px",
            borderTop: "1px solid #444",
            color: "#cfbfa8",
          }}
        >
          <h4>📢 Notifications</h4>
          <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <li>New task request from EMP123</li>
            <li>EMP456 completed UI Design</li>
            <li>Pending review for EMP789's task</li>
          </ul>
        </div>
      )}
    </div>
  );
}
