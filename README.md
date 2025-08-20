# Project Employ

This is a frontend-focused React project for employee and admin task management. All data is stored in the browser's localStorage—no backend or server is required. The app demonstrates authentication, dashboards, and task management features using modern React and Tailwind CSS.

## What does this project do?

This app simulates a simple employee task management system:

- There are 5 employees in the system.
- The admin can assign tasks to any employee.
- Employees can view their active tasks, mark tasks as completed, or fail tasks if not done.
- Task statuses include: Active, Completed, and Failed.
- The admin dashboard shows an overview of all employees and their task histories.
- All data is stored locally in the browser, so refreshing or clearing browser data will reset the app.

**Example scenario:**

> The admin assigns a new task to Employee 1. Employee 1 sees the task in their dashboard as "Active". Once finished, Employee 1 marks it as "Completed". If an employee cannot finish a task, they can mark it as "Failed". The admin can track all employees' progress and task history from their dashboard.

**Admin Dashboard:**

![App Demo](/src/assets/image25.png)

**Employee Dashboard:**

![App Demo](/src/assets/image.png)

## Features

- User authentication (login)
- Admin dashboard
- Employee dashboard
- Task creation, acceptance, completion, and failure tracking
- Task history and overview

## Tech Stack

- React (frontend only)
- Vite
- Tailwind CSS
- Context API for state management
- LocalStorage for data persistence

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd projectEmploy
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

**Important:**

- This project is frontend-only. No backend or API is used.
- All user and task data is stored in browser localStorage. Clearing browser data will reset the app.
- For demo/testing purposes only. Not suitable for production use without a backend.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Customization

- Update Tailwind config in `tailwind.config.js`, u can opt for tailwind version 4 too
- Modify Vite settings in `vite.config.js`
