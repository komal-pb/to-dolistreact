### Todo App

A simple and functional Todo App built with React.js.
Users can add, edit, delete, and track tasks, with data persisted in the browser using localStorage.

---

## Features

### Todos
- Add new tasks
- Edit existing tasks
- Delete tasks
- Persistent data using MySQL

### Components
- **TodoInput** – Input field for adding tasks
- **TodoList** – Displays all tasks
- **TodoCard** – Individual task with edit/delete actions

---

## State Management & Hooks
- Managed state using React Hooks (useState, useEffect)
- Lifted state up to App.jsx to share data across components
- Used props to pass data and functions from parent to child

---

## Tech Stack
- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express
- **Database:** MySQL
- **State Management:** React Hooks (`useState`, `useEffect`)
- **API Requests:** Axios
  
---
## Backend & Database Setup

### 1. Backend
1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Update `db.js` with your MySQL credentials:
    ```js
    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "your_password",
      database: "todo_db"
    });
    ```
4. Start the backend server:
    ```bash
    npm run start
    ```
5. Server runs on: `http://localhost:5000`

### 2. MySQL Database
1. Create the database and table:
    ```sql
    CREATE DATABASE IF NOT EXISTS todo_db;
    USE todo_db;

    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL
    );
    ```
2. The backend will read/write tasks to this database.

### 3. API Endpoints
- **GET `/api/todos`** – Fetch all todos  
- **POST `/api/todos`** – Add a new todo  
  ```json
  { "title": "Sample Task" }
  ```
---

## Usage
- Type a task in the input field and click **Add**.
- The task appears below in a list
- Use the edit button to modify a task
- Use the delete button to remove a task
- Tasks persist in MySQL

---

## Screenshots / Demo
<img width="1911" height="1000" alt="image" src="https://github.com/user-attachments/assets/70818581-e408-4bbd-ab64-6e20837de4f3" />


