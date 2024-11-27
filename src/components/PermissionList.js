import React from "react";

const PermissionList = ({ permissions }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Permissions</h2>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr className="bg-violet-600 text-white dark:bg-violet-700">
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Access</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((perm, index) => (
              <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                <td className="px-4 py-2">{perm.role}</td>
                <td className="px-4 py-2">{perm.access}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionList;
