# Role-Based Access Control (RBAC) Dashboard

## Overview

This project is a React-based dashboard that demonstrates a Role-Based Access Control (RBAC) system. It includes a sidebar, main content area, and interactive components for managing roles, users, and permissions. The application supports both light and dark modes, interactive UI elements, and animations for a modern user experience.

## Features
- **Interactive Sidebar**: Contains navigation links with icons.
- **User Management**: View, add, and delete users.
- **Role Management**: Create, view, and delete roles.
- **Permission List**: Display permissions associated with roles.
- **Dark/Light Mode Toggle**: Switch between light and dark themes.
- **Splash Screen**: A loading screen that appears on app startup.

## Project Structure

```
my-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   ├── SplashScreen.js
│   │   ├── RoleTable.js
│   │   ├── UserTable.js
│   │   └── PermissionList.js
│   ├── App.js
│   ├── index.js
│   └── tailwind.css
├── package.json
└── README.md
```

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **npm** or **Yarn**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-app.git
   ```

2. Navigate into the project directory:
   ```bash
   cd my-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Running the App

1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

2. Open your web browser and visit `http://localhost:3000` to see the app in action.

## Components Overview

### 1. **Sidebar.js**
- A responsive sidebar component that provides navigation links.
- Uses **Heroicons** for icons.
- Styled using **Tailwind CSS**.

### 2. **Header.js**
- Displays the application title and includes a toggle button for switching between light and dark modes.

### 3. **SplashScreen.js**
- A loading screen that appears when the app is first initialized.

### 4. **RoleTable.js**
- Displays roles in a table format with options to add and delete roles.
- Includes UI interactivity with Tailwind CSS hover effects.

### 5. **UserTable.js**
- Displays a list of users and their roles.
- Includes buttons to add and delete users.

### 6. **PermissionList.js**
- Lists permissions associated with different roles.

## Technologies Used
- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **Heroicons**: For UI icons.
- **React Hooks (useState, useEffect)**: For state management and side effects.

## How to Customize
- **Dark/Light Mode**: Toggle between themes using the button in the `Header` component.
- **Adding Data**: Use the `addRole`, `addUser`, and `addPermission` functions to add data.
- **Deleting Data**: Use the `deleteRole`, `deleteUser`, and `deletePermission` functions to remove data.

## Potential Enhancements
- **Backend Integration**: Connect the app to a backend server for CRUD operations.
- **Authentication**: Implement user authentication for more secure access.
- **Data Persistence**: Store data in local storage or a database.

## Troubleshooting
- **Sidebar not fitting the screen**: Ensure the `h-screen` class is applied to the `Sidebar` component.
- **Light/Dark mode not toggling**: Confirm that the `theme` state is correctly managed in `App.js`.

## Acknowledgments
- **React** and **Tailwind CSS** for their powerful capabilities.
- **Heroicons** for providing high-quality icons.


