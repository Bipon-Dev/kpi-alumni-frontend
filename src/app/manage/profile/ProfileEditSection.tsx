import { FC } from "react";

const ProfileCard: FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <img
          src="/profile-image-placeholder.png"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold">Noman Gazi</h1>
          <p className="text-gray-500">Admin</p>
        </div>
        <button className="ml-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Change Image
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: "First Name", value: "Noman" },
          { label: "Last Name", value: "Gazi" },
          { label: "Email Address", value: "nomangazix@gmail.com" },
          { label: "Phone Number", value: "01726387661" },
          { label: "Username", value: "nomangazix@gmail.com" },
          { label: "Organization", value: "Noman Gazi" },
          { label: "Date of Birth", value: "16 Dec 2002" },
          { label: "Gender", value: "Male" },
          { label: "Administrative Address", value: "Bikiran, KUET" },
          { label: "Billing Address", value: "Bikiran, KUET" },
          {
            label: "Technical Address",
            value: "Bikiran, Hospital Mor, Doulatpur",
          },
        ].map((field, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="text-gray-600 text-sm">{field.label}</p>
              <p className="text-gray-800 font-medium">{field.value}</p>
            </div>
            <button className="text-gray-500 hover:text-gray-700">✏️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
