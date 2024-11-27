import React, { useState } from "react";
import { TrashIcon, PlusIcon } from "@heroicons/react/outline";

const RoleTable = ({ roles, addRole, deleteRole }) => {
  const [newRoleName, setNewRoleName] = useState("");

  const handleAddRole = () => {
    if (newRoleName.trim()) {
      addRole({ id: Date.now(), name: newRoleName, users: 0 });
      setNewRoleName("");
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Roles</h2>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr className="bg-violet-600 text-white dark:bg-violet-700">
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Users</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                <td className="px-4 py-2">{role.name}</td>
                <td className="px-4 py-2">{role.users}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteRole(role.id)}
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
          value={newRoleName}
          onChange={(e) => setNewRoleName(e.target.value)}
          placeholder="New role name"
          className="px-3 py-2 border rounded mr-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <button
          onClick={handleAddRole}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition flex items-center"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Role
        </button>
      </div>
    </div>
  );
};

export default RoleTable;
