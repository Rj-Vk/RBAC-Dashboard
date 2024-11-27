import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RoleTable from "./components/RoleTable";
import PermissionList from "./components/PermissionList";
import UserTable from "./components/UserTable";

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [theme, setTheme] = useState("light");

  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", users: 5 },
    { id: 2, name: "Editor", users: 3 },
    { id: 3, name: "Viewer", users: 10 },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Editor" },
    { id: 3, name: "Charlie", role: "Viewer" },
  ]);

  const [permissions, setPermissions] = useState([
    { role: "Admin", access: "Full Access" },
    { role: "Editor", access: "Edit and View" },
    { role: "Viewer", access: "View Only" },
  ]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const addRole = (newRole) => setRoles([...roles, newRole]);
  const deleteRole = (id) => setRoles(roles.filter((role) => role.id !== id));
  const addUser = (newUser) => setUsers([...users, newUser]);
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  if (!splashDone) {
    return <SplashScreen setSplashDone={setSplashDone} />;
  }

  return (
    <div className="flex min-h-screen transition-all dark:bg-gray-900 dark:text-white">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header title="Role-Based Access Control" toggleTheme={toggleTheme} theme={theme} />
        <RoleTable roles={roles} addRole={addRole} deleteRole={deleteRole} />
        <PermissionList permissions={permissions} />
        <UserTable users={users} addUser={addUser} deleteUser={deleteUser} />
      </main>
    </div>
  );
}

export default App;
