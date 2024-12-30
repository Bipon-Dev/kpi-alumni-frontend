import { FC } from "react";

const ProfilePage: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <img
            className="w-24 h-24 rounded-full"
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="Profile Picture"
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Skills</h2>
          <p className="text-gray-700 mt-2">
            JavaScript, TypeScript, React, Node.js
          </p>
        </div>
        <div className="mt-6">
          <button className="bg-secondary text-white px-4 py-2 rounded">
            Edit Profile
          </button>
        </div>
        <div className="font-sans leading-normal tracking-normal  items-center ">
          <div className="flex justify-between ">
            {/* Profile Details */}
            <div className=" w-full py-6">
              <h2 className="text-lg font-semibold text-gray-600 border-b pb-2">
                Contact Information
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Email:</strong> john.doe@example.com
                </li>
                <li>
                  <strong>Phone:</strong> +123 456 7890
                </li>
                <li>
                  <strong>Location:</strong> New York, USA
                </li>
                <li>
                  <strong>Social Links:</strong>
                  <a href="#" className="text-indigo-500 hover:underline">
                    LinkedIn
                  </a>{" "}
                  |
                  <a href="#" className="text-indigo-500 hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div className=" w-full py-6">
              <h2 className="text-lg font-semibold text-gray-600 border-b pb-2">
                Professional Details
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Current Job Title:</strong> Software Engineer
                </li>
                <li>
                  <strong>Company:</strong> Tech Solutions Inc.
                </li>
                <li>
                  <strong>Experience:</strong> 8 years
                </li>
                <li>
                  <strong>Skills:</strong> JavaScript, React, Tailwind CSS,
                  Node.js
                </li>
              </ul>
            </div>

            <div className=" w-full py-6">
              <h2 className="text-lg font-semibold text-gray-600 border-b pb-2">
                Alumni Activities
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Role:</strong> Mentor
                </li>
                <li>
                  <strong>Events Attended:</strong> Annual Meetup 2023,
                  Hackathon 2022
                </li>
              </ul>
            </div>
          </div>
          {/* Call to Action */}
          <div className=" py-6 text-center">
            <button className="px-4 py-2 bg-secondary text-white rounded hover:bg-indigo-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
