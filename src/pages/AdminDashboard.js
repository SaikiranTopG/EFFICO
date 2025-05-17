import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AdminTopbar from "../components/AdminTopbar";
import "../styles/AdminDashboard.css";

export default function AdminDashboard() {
  const [employees, setEmployees] = useState([
    { id: "EMP001", name: "Amit Sharma", isManager: false },
    { id: "EMP002", name: "Neha Gupta", isManager: true },
    { id: "EMP003", name: "Ravi Kumar", isManager: false },
  ]);

  const [employeeRequests, setEmployeeRequests] = useState([
    { id: "REQ001", name: "Sneha Singh" },
    { id: "REQ002", name: "Pooja Verma" },
  ]);

  const [view, setView] = useState("all"); // "all" or "requests"

  const toggleManagerAccess = (empId, currentStatus) => {
    const updated = employees.map((emp) =>
      emp.id === empId ? { ...emp, isManager: !emp.isManager } : emp
    );
    setEmployees(updated);
  };

  const approveEmployee = (reqId) => {
    const approvedEmp = employeeRequests.find((req) => req.id === reqId);
    if (approvedEmp) {
      setEmployees([
        ...employees,
        { id: approvedEmp.id, name: approvedEmp.name, isManager: false },
      ]);
      setEmployeeRequests(employeeRequests.filter((req) => req.id !== reqId));
    }
  };

  return (
    <div className="admin-container">
      <AdminTopbar />
      <div className="admin-body">
        <Sidebar />
        <div className="admin-content">
          <h1>🛠 Admin Panel</h1>

          {/* Toggle Buttons */}
          <div className="toggle-buttons">
            <button
              onClick={() => setView("all")}
              className={view === "all" ? "active-btn" : ""}
            >
              All Employees
            </button>
            <button
              onClick={() => setView("requests")}
              className={view === "requests" ? "active-btn" : ""}
            >
              Employee Requests
            </button>
          </div>

          {/* All Employees Section */}
          {view === "all" && (
            <>
              <div className="admin-section">
                <h2>All Employees</h2>
                <ul>
                  {employees.map((emp) => (
                    <li key={emp.id} className="admin-user-row">
                      <span>
                        <strong>{emp.name}</strong> ({emp.id})
                      </span>
                      <button
                        onClick={() =>
                          toggleManagerAccess(emp.id, emp.isManager)
                        }
                        className={emp.isManager ? "revoke-btn" : "grant-btn"}
                      >
                        {emp.isManager
                          ? "Revoke Manager Access"
                          : "Grant Manager Access"}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="admin-section">
                <h2>Current Managers</h2>
                <ul>
                  {employees.filter((emp) => emp.isManager).length === 0 ? (
                    <li>No managers currently assigned.</li>
                  ) : (
                    employees
                      .filter((emp) => emp.isManager)
                      .map((manager) => (
                        <li key={manager.id}>
                          ✅ {manager.name} ({manager.id})
                        </li>
                      ))
                  )}
                </ul>
              </div>
            </>
          )}

          {/* Employee Requests Section */}
          {view === "requests" && (
            <div className="admin-section">
              <h2>Employee Requests</h2>
              <ul>
                {employeeRequests.length === 0 ? (
                  <li>No pending requests.</li>
                ) : (
                  employeeRequests.map((req) => (
                    <li key={req.id} className="admin-user-row">
                      <span>
                        <strong>{req.name}</strong> ({req.id})
                      </span>
                      <button
                        onClick={() => approveEmployee(req.id)}
                        className="approve-btn"
                      >
                        Approve Employee
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
