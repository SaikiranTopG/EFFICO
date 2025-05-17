// --- pages/Dashboard.jsx ---
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import NotificationBar from '../components/NotificationBar';

const Dashboard = () => {
  const employeeId = 'EMP1024'; // Replace with dynamic ID if available from login context

  const [notifications, setNotifications] = useState([
    {
      id: 101,
      title: 'Prepare Client Report',
      description: 'Client XYZ needs a detailed project summary by Friday.'
    },
    {
      id: 102,
      title: 'Update Documentation',
      description: 'Revise the onboarding documents for new hires.'
    }
  ]);

  const [assignedTasks, setAssignedTasks] = useState([
    {
      id: 1,
      title: 'Design Landing Page',
      status: 'Pending',
      dueDate: '2025-04-15',
      progress: 0
    },
    {
      id: 2,
      title: 'Fix Login Bug',
      status: 'Pending',
      dueDate: '2025-04-12',
      progress: 0
    },
    {
      id: 3,
      title: 'Submit Sprint Report',
      status: 'Completed',
      dueDate: '2025-04-10',
      progress: 100
    }
  ]);

  const handleAccept = (task) => {
    setAssignedTasks([...assignedTasks, { ...task, status: 'Pending', dueDate: 'TBD', progress: 0 }]);
    setNotifications(notifications.filter((t) => t.id !== task.id));
  };

  const handleDeny = (task) => {
    const reason = prompt(`Please provide a reason for denying "${task.title}"`);
    if (reason) {
      console.log(`Task denied: ${task.title}, Reason: ${reason}`);
      setNotifications(notifications.filter((t) => t.id !== task.id));
    }
  };

  const handleRequestTask = async () => {
    const dummyTask = {
      id: Date.now(),
      title: 'Manager Assigned Task',
      description: 'This is a task request from the manager.'
    };
    setNotifications([dummyTask, ...notifications]);

    try {
      const response = await fetch('/api/request-manager-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ employeeId, message: 'Requesting manager role' })
      });

      if (!response.ok) throw new Error('Failed to send manager request');
      console.log('Manager request sent successfully');
    } catch (error) {
      console.error('Error sending manager request:', error);
    }
  };

  const handleProgressChange = async (id, newProgress) => {
    let newStatus = 'Pending';
    if (newProgress > 0 && newProgress < 100) newStatus = 'In Progress';
    else if (newProgress === 100) newStatus = 'Completed';

    setAssignedTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, progress: newProgress, status: newStatus } : task
      )
    );

    try {
      const response = await fetch('/api/update-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, progress: newProgress, status: newStatus })
      });

      if (!response.ok) throw new Error('Failed to update progress');
      console.log(`Progress updated for task ${id} to ${newProgress}%, status: ${newStatus}`);
    } catch (error) {
      console.error('Error updating task progress:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#010105', minHeight: '100vh' }}>
      <Topbar onRequestTask={handleRequestTask} />
      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px', color: 'white' }}>
          <h1>Welcome to the Employee Dashboard</h1>

          <NotificationBar
            notifications={notifications}
            onAccept={handleAccept}
            onDeny={handleDeny}
          />

          <h2 style={{ marginTop: '30px', marginBottom: '10px' }}>
            📋 Tasks Assigned
          </h2>
          <div
            style={{
              background: '#1f2937',
              padding: '20px',
              borderRadius: '8px'
            }}
          >
            {assignedTasks.map((task) => (
              <div
                key={task.id}
                style={{
                  marginBottom: '20px',
                  padding: '10px',
                  background: '#2d3748',
                  borderRadius: '5px'
                }}
              >
                <h3>{task.title}</h3>
                <p>
                  Status: <strong>{task.status}</strong>
                </p>
                <p>Due: {task.dueDate}</p>
                <label htmlFor={`slider-${task.id}`} style={{ display: 'block', marginTop: '10px' }}>
                  Progress: {task.progress}%
                </label>
                <input
                  id={`slider-${task.id}`}
                  type="range"
                  min="0"
                  max="100"
                  value={task.progress}
                  onChange={(e) => handleProgressChange(task.id, Number(e.target.value))}
                  style={{ width: '100%', marginTop: '5px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
