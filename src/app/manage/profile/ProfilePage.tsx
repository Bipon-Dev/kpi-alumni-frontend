import { Button } from "@/lib/ui/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileEditSection";

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
    <div className=" bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3">
      <div
        className="h-28 bg-slate-400 relative flex items-center justify-start col-span-1 md:col-span-3 bg-cover bg-center"
        style={{
          backgroundImage: `url("../../../../assets/images/banner.jpg")`,
        }}
      >
        <img
          src={data?.data?.photo || "https://via.placeholder.com/150"}
          className="w-30 h-30 bg-gray-400 rounded-full absolute top-12 left-7 border-4 border-white"
        />
      </div>

      <div className="px-6 pt-6 pb-6 col-span-2">
        <div className="flex justify-between items-center">
          <div className="text-center md:text-left pt-5">
            <h2 className="text-xl font-medium">
              {data?.data.fullName || "--"}
            </h2>
            <p className="text-gray-500">{data?.data.jobTitle || "--"}</p>
            <p className="text-gray-500">{data?.data.primaryEmail || "--"}</p>
          </div>
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
        </div>

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
      <div className="bg-gray-100 p-6 border-t md:border-l md:border-t-0">
        <div className="text-center">
          <p className="text-xl font-bold text-secondary-700">
            {data?.data.askingMoney || "--"}
          </p>
          <p className="text-sm text-gray-500">Avg Salary</p>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-600">
            {data?.data.primaryEmail || "--"}
          </p>
          <p className="text-sm text-gray-600">{data?.data.address || "--"}</p>
          <p className="text-sm text-gray-600">{data?.data.phone || "--"}</p>
          <p className="text-sm text-secondary">
            {data?.data.portfolio || "--"}
          </p>
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
