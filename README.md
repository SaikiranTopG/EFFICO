# 📘 Effico Employee Dashboard (React)

Effico is a frontend employee task management dashboard built using React. It provides login/signup functionality, task assignment views, employee detail sidebars, and progress tracking for tasks.

---

## 🚀 Features

- 🔐 Login & Signup pages (with toggle between new and existing employees)
- 📋 Task management dashboard
- 🔔 Notification bar for manager-assigned task requests
- 📈 Progress slider per task with live status update (Pending, In Progress, Completed)
- 🧾 Sidebar with dynamic employee details (ID, Name, Role, Email, DOB)
- 🌙 Dark-themed layout using custom styles

---

## 📁 Folder Structure

```
EFFICO/
├── public/
├── src/
│   ├── components/
│   │   ├── Topbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── NotificationBar.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   ├── App.js
│   ├── index.js
├── package.json
```

---

## 🛠️ Setup Instructions

1. **Install dependencies:**

```bash
npm install
```

2. **Start the development server:**

```bash
npm start
```

3. **Deafult login**

Username:- abc123
Password:-123

4. **Backend API:** Ensure you have an endpoint like:

```http
GET /api/employee/:id
```

To return JSON data like:

```json
{
  "id": "EMP1024",
  "name": "Amit Sharma",
  "role": "Frontend Developer",
  "email": "amit.sharma@effico.com",
  "dob": "1999-06-15"
}
```

---

## 📦 Technologies Used

- React
- React Router DOM
- JavaScript (ES6+)
- CSS3 (custom styling with a dark palette)

---

## 👨‍💻 Author

by Saikiran

---
