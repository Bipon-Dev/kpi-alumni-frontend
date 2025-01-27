/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/lib/ui/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "@/assets/images/banner.jpg";

interface ProfileData {
  id: string;
  name: string;
  photo: string;
  jobTitle: string;
  email: string;
  position: string;
  company: string;
  workTime: string;
  askingMoney: string;
  address: string;
  phone: string;
  portfolio: string;
}

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>();
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
    <div className=" shadow-md rounded-lg flex justify-between gap-5">
      <div className=" w-full bg-white ">
        <img
          alt="profile"
          src={ProfileCard}
          className="w-60 h-60 m-9 rounded-full border-4 border-primary "
        />
        <div className="flex justify-between items-center ml-9">
          <div className="text-center md:text-left ">
            <h2 className="text-xl font-medium">{data?.data.name || "--"}</h2>
            <p className="text-gray-500">{data?.data.role || "--"}</p>
            <p className="text-gray-500">{data?.data.primaryEmail || "--"}</p>
          </div>
        </div>
      </div>

      <div className="px-6 pt-6 pb-6 ">
        {/* Bio Section */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Bio</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "User Interface",
              "Web Design",
              "Mobile App Design",
              "Responsive Web Design",
              "Figma",
              "Business",
              "Marketing",
              "Campaign",
              "Copy Writer",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-secondary-100 text-secondary-700 px-3 py-1 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Work Experience</h3>
          <div className="mt-2">
            <p className="font-medium">{data?.data.position || "--"}</p>
            <p className="text-gray-500">{data?.data.company || "--"}</p>
            <p className="text-gray-500">{data?.data.workTime || "--"}</p>
          </div>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="bg-gray-200  min-w-[300px] p-6 floart-right">
        <div className="flex flex-col gap-2">
          <Button variant="secondary" className=" text-white">
            Edit
          </Button>
          <Button variant="secondary" className=" text-white">
            Invite
          </Button>
          <Button variant="secondary" className=" text-white">
            CV
          </Button>
          <Button variant="secondary" className=" text-white">
            Message
          </Button>
        </div>
        <button className="w-full mt-6 bg-secondary text-white py-2 rounded-lg transition">
          Connect
        </button>
      </div>
      {/* <ProfileCard /> */}
    </div>
  );
};

export default ProfilePage;
