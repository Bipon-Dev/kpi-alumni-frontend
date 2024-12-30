import { FC } from "react";

const PermissionsTable: FC = () => {
  const permissions = [
    {
      title: "Super Admin",
      description:
        "With this role user can manage other admin, products and settings.",
    },
    {
      title: "Customer",
      description:
        "With this role user can manage customers and can change customers basic information. Can view the subscriptions, invoices, payments & support ticket information of each customers.",
    },
    {
      title: "Technical",
      description:
        "With this role user can manage subscription information of the customers. Can view the invoices, payments & support ticket information of each customers.",
    },
    {
      title: "Finance",
      description:
        "With this role user can manage invoices and payments of the customers. Can view the support ticket information of each customers.",
    },
    {
      title: "Support",
      description:
        "With this role user can manage the support tickets, can reply. Can view the subscriptions, invoices, payments & support ticket information of each customers.",
    },
    {
      title: "Reports",
      description: "With this role user can view all of the reports.",
    },
    {
      title: "Logs",
      description: "With this role user can view all of the logs.",
    },
    {
      title: "Developer",
      description: "With this role user can manage the API keys.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Permissions</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-3 border border-gray-200">Title</th>
            <th className="text-left p-3 border border-gray-200">
              Description
            </th>
            <th className="text-center p-3 border border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border border-gray-200">{permission.title}</td>
              <td className="p-3 border border-gray-200">
                {permission.description}
              </td>
              <td className="p-3 border border-gray-200 text-center">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 peer-focus:ring-4 peer-focus:ring-green-300 transition"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:left-6 transition"></div>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsTable;
