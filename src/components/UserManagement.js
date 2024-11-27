import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });

  const addUser = () => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: "", role: "", status: "Active" });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <section className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="User Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
        </select>
        <button onClick={addUser} className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
      </div>

      <ul className="list-disc pl-6">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center">
            <span>{user.name} ({user.role})</span>
            <button
              onClick={() => deleteUser(user.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserManagement;