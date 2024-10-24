# Fullstack Demo Project (React Front-End)

This is the front-end part of a full-stack demo project, showcasing various features and best practices using **React**. The project demonstrates CRUD operations, form management, data pagination, and state handling, along with clean architecture principles.

## Features

- **Form Handling**: Manage forms with `react-hook-form` and validate them with `Zod`.
- **Pagination**: Custom-built paginated table using React event handlers and state management for smoother navigation.
- **State Management**: Managed using React’s `useState`, `useEffect`, and `useContext` to handle application data efficiently.
- **Modals and Buttons**: Modal dialogs for user interactions with reusable button components.
- **Props Drilling Avoidance**: React’s `createContext` and `useContext` are used to avoid props drilling in deeply nested components.

## Technologies Used

- **React** (with TypeScript)
- **React Hook Form** (for form management)
- **Zod** (for form validation)
- **Axios** (for API requests)
- **Bootstrap** (for UI components)

## Setup and Installation

### Prerequisites

- Node.js (version 18 or higher)
- Git

### Steps

1. **Clone the repository**:
```bash
   git clone https://github.com/yourusername/FullStackDemo.Frontend.git
```

2. Navigate to the project directory:
```bash
  cd FullStackDemo.WebReact
```

3. Install dependencies:
```bash
   npm install
```

4. Additional package installations: Install the required packages individually if not installed automatically:
```bash
   npm install react-router-dom
   npm install react-bootstrap bootstrap
   npm install --save-dev @types/node
   npm install axios
   npm install zod react-hook-form @hookform/resolvers
```
5. Backend Setup: Ensure that the backend API is running by following the instructions here: [FullStackDemo Backend](https://github.com/projectfernan/FullStackDemo.Backend)    The frontend will not function correctly without the backend service running.

6. Run the React app:
```bash
   npm run dev
```
The app will run on http://localhost:5173 by default.
