import React, { useState } from "react";
import { TrashIcon, PlusIcon } from "@heroicons/react/outline";

const UserTable = ({ users, addUser, deleteUser }) => {
  const [newUserName, setNewUserName] = useState("");

  const handleAddUser = () => {
    if (newUserName.trim()) {
      addUser({ id: Date.now(), name: newUserName, role: "Viewer" });
      setNewUserName("");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr className="bg-violet-600 text-white dark:bg-violet-700">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="New user name"
          className="px-3 py-2 border rounded mr-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <button
          onClick={handleAddUser}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition flex items-center"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserTable;
