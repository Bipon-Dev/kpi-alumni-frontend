import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ProfileData {
  id: string;
  name: string;
  photo: string;
  jobTitle: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `http://localhost:5050/api/v1/member/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result: ProfileData = await response.json();
        setData(result);
      } catch (err) {
        setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    // id?.map((id) => (
    <div className="container mx-auto p-4" key={id}>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <img
            className="w-24 h-24 rounded-full"
            src={data?.photo || "https://via.placeholder.com/150"}
            alt="Profile Picture"
          />
          <div>
            <h1 className="text-2xl font-bold">{id?.name}</h1>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-600">{id?.email}</p>
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
