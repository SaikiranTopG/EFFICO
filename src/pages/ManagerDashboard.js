import React, { useState, useEffect } from "react";
import ManagerTopbar from "../components/ManagerTopbar";
import Sidebar from "../components/Sidebar";
import CreatableSelect from "react-select/creatable";
import "../styles/ManagerDashboard.css";

export default function ManagerDashboard() {
  const [form, setForm] = useState({
    taskId: "",
    title: "",
    description: "",
    skills: [],
    complexity: "medium",
    timeEstimate: "",
    dependency: "",
  });

  const [showCreate, setShowCreate] = useState(true);
  const [assignedTasks, setAssignedTasks] = useState([
    { employeeId: "EMP001", title: "Build Dashboard", complexity: "Hard" },
    { employeeId: "EMP002", title: "API Integration", complexity: "Medium" },
    { employeeId: "EMP003", title: "UI Polishing", complexity: "Easy" },
  ]);

  const dummyTasks = [
    "T001 - Login Page",
    "T002 - Fix API Bug",
    "T003 - Landing UI",
  ];

  const skillOptions = ["React", "Node.js", "MongoDB", "UI/UX", "APIs"];

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === "select-multiple") {
      const selected = Array.from(selectedOptions, (option) => option.value);
      setForm({ ...form, [name]: selected });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Created:", form);
    alert(`Task "${form.title}" assigned.`);
    setForm({
      taskId: "",
      title: "",
      description: "",
      skills: [],
      complexity: "medium",
      timeEstimate: "",
      dependency: "",
    });
  };

  // useEffect(() => {
  //   if (!showCreate) {
  //     fetch("https://your-backend-api.com/api/assignedTasks")
  //       .then((res) => res.json())
  //       .then((data) => setAssignedTasks(data))
  //       .catch((err) => console.error("Failed to fetch tasks:", err));
  //   }
  // }, [showCreate]);

  return (
    <div className="manager-container">
      <ManagerTopbar />

      <div className="manager-body">
        <Sidebar />
        <div className="manager-content">
          <h1>📝 Task Management</h1>

          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <button
              className={`submit-btn ${showCreate ? "active" : ""}`}
              onClick={() => setShowCreate(true)}
            >
              ➕ Create Task
            </button>
            <button
              className={`submit-btn ${!showCreate ? "active" : ""}`}
              onClick={() => setShowCreate(false)}
            >
              📋 View Assigned Tasks
            </button>
          </div>

          {showCreate ? (
            <div
              className="manager-card"
              style={{ maxWidth: "550px", backgroundColor: "#cfbfa8" }}
            >
              <form className="task-form" onSubmit={handleSubmit}>
                <label>Task ID</label>
                <input
                  type="text"
                  name="taskId"
                  value={form.taskId}
                  onChange={handleChange}
                  required
                />

                <label>Task Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                />

                <label>Task Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  rows={4}
                />

                <label>Skills Needed</label>
                <CreatableSelect
                  isMulti
                  className="select-theme"
                  classNamePrefix="select"
                  options={skillOptions.map((skill) => ({
                    value: skill,
                    label: skill,
                  }))}
                  value={form.skills.map((skill) => ({
                    value: skill,
                    label: skill,
                  }))}
                  onChange={(selected) =>
                    setForm({
                      ...form,
                      skills: selected.map((item) => item.value),
                    })
                  }
                />

                <label>Complexity</label>
                <select
                  name="complexity"
                  value={form.complexity}
                  onChange={handleChange}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>

                <label>Estimated Time (hrs)</label>
                <input
                  type="number"
                  name="timeEstimate"
                  value={form.timeEstimate}
                  onChange={handleChange}
                  required
                />

                <label>Task Dependency</label>
                <select
                  name="dependency"
                  value={form.dependency}
                  onChange={handleChange}
                >
                  <option value="">None</option>
                  {dummyTasks.map((task) => (
                    <option key={task} value={task}>
                      {task}
                    </option>
                  ))}
                </select>

                <button type="submit" className="submit-btn">
                  Assign Task
                </button>
              </form>
            </div>
          ) : (
            <div
              className="manager-card"
              style={{
                color: "#1a1a1a",
                maxWidth: "550px",
                backgroundColor: "#cfbfa8",
              }}
            >
              <h3>📋 Assigned Tasks</h3>
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                {assignedTasks.length > 0 ? (
                  assignedTasks.map((task, idx) => (
                    <li key={idx}>
                      🔹 {task.employeeId} - {task.title} ({task.complexity})
                    </li>
                  ))
                ) : (
                  <li>No assigned tasks found.</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
