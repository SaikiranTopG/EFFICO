import React from "react";

const NotificationBar = ({ notifications, onAccept, onDeny }) => {
  return (
    <div
      style={{
        backgroundColor: "#1a1a27",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "20px",
        color: "#cfbfa8",
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>🔔 Task Requests</h3>
      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        notifications.map((task, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#2d2d3a",
              padding: "10px",
              borderRadius: "6px",
              marginBottom: "10px",
            }}
          >
            <p>
              <strong>{task.title}</strong>
            </p>
            <p style={{ fontSize: "14px" }}>{task.description}</p>
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => onAccept(task)}
                style={{
                  marginRight: "10px",
                  padding: "6px 12px",
                  backgroundColor: "#cfbfa8",
                  color: "#1a1a1a",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Accept
              </button>
              <button
                onClick={() => onDeny(task)}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Deny
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationBar;
