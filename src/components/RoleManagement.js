import React, { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const addRole = () => {
    setRoles([...roles, { id: roles.length + 1, ...newRole }]);
    setNewRole({ name: "", permissions: [] });
  };

  const updateRolePermissions = (id, permissions) => {
    setRoles(
      roles.map((role) =>
        role.id === id ? { ...role, permissions } : role
      )
    );
  };

  return (
    <section className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Role Management</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Permissions (comma-separated)"
          value={newRole.permissions.join(", ")}
          onChange={(e) =>
            setNewRole({
              ...newRole,
              permissions: e.target.value.split(", "),
            })
          }
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button onClick={addRole} className="bg-green-500 text-white px-4 py-2 rounded">Add Role</button>
      </div>

      <ul className="list-disc pl-6">
        {roles.map((role) => (
          <li key={role.id} className="flex justify-between items-center">
            <span>{role.name} - Permissions: {role.permissions.join(", ")}</span>
            <button
              onClick={() =>
                updateRolePermissions(
                  role.id,
                  prompt("Update permissions (comma-separated):", role.permissions.join(", "))?.split(", ") ||
                    role.permissions
                )
              }
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit Permissions
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RoleManagement;