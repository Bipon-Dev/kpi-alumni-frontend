/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/lib/ui/button";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileToggleSection from "./ProfileToggleSection";

type ProfileData = {
  id: string;
  name: string;
  photo: string;
  jobTitle: string;
  primaryEmail: string;
  position: string;
  company: string;
  workTime: string;
  askingMoney: string;
  address: string;
  phone: string;
  portfolio: string;
};
const ProfileInfoComp: FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className=" w-full flex bg-gradient-to-b from-gray-50 to-gray-200 shadow-md rounded-md p-9">
      <div className=" w-full ">
        <img
          alt="profile"
          src="https://github.com/shadcn.png"
          className="w-60 h-60 mb-5 rounded-full border-4 border-primary "
        />
        <div className="flex justify-between items-center ml-9">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-medium text-secondary ">
              {/* {data?.data.name || "--"} */}
              Anindo Roy Apu
            </h2>
            <p className="text-gray-500">
              {/* {data?.data.role || "--"} */}
              Devoloper
            </p>
            <p className="text-gray-500">
              {data?.primaryEmail || "anindoroy112@gmail.com"}
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <ProfileToggleSection />
      </div>

      <div className=" w-full border-l-2 pl-5">
        <div className=" w-full flex">
          <div className=" text-primary-700 w-42">Email:</div>
          <span className=" ">anindoroy112@gmail.com</span>
        </div>
        <div className=" w-full flex">
          <span className=" text-primary-700 w-42">Phone:</span>
          <span>01533780593</span>
        </div>
        <div className=" w-full flex">
          <span className=" text-primary-700 w-42">Blood Group:</span>
          <span>B+</span>
        </div>
        <div className=" w-full flex">
          <span className=" text-primary-700 w-42">Last Donate:</span>
          <span>12, sep 2024</span>
        </div>
        <div className=" w-full flex">
          <span className=" text-primary-700 w-42">Present Address:</span>
          <span className=" w-[calc(100%-168px)]">
            Fulbari Gate, KUET Road, Khulna-9202
          </span>
        </div>
        <div className=" w-full flex">
          <span className=" text-primary-700 w-42">Permanent Address:</span>
          <span className=" w-[calc(100%-168px)]">
            Gobra Bazar, Narial sadar, Narail-7501
          </span>
        </div>
      </div>
    </div>
  );
};

const ProfileActionComp: FC = () => {
  return (
    <div className="bg-gray-200 shadow-md rounded-md  min-w-[250px] p-6 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Button
          variant="secondary"
          className=" bg-secondary text-white py-2 rounded-lg"
        >
          Edit Profile
        </Button>
        <Button
          variant="secondary"
          className=" bg-secondary text-white py-2 rounded-lg"
        >
          Invite to Join
        </Button>
        <Button
          variant="secondary"
          className=" bg-secondary text-white py-2 rounded-lg"
        >
          Upload CV
        </Button>
        <Button
          variant="secondary"
          className=" bg-secondary text-white py-2 rounded-lg"
        >
          Message
        </Button>
      </div>
    </div>
  );
};
const ProfileWorkComp: FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className=" bg-white shadow-md rounded-md p-6">
      <h3 className="font-semibold text-lg">Work Experience</h3>
      <div className="mt-2">
        <p className="font-medium">{data?.position || "--"}</p>
        <p className="text-gray-500">{data?.company || "--"}</p>
        <p className="text-gray-500">{data?.workTime || "--"}</p>
      </div>
    </div>
  );
};
const ProfileStudyComp: FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="w-full p-6 flex gap-2 bg-white shadow-md rounded-md">
      <div className=" w-full border-r-2 pr-5">
        <h3 className="font-semibold text-lg">Education</h3>
        <p className="font-medium">{data?.position || "--"}</p>
        <p className="text-gray-500">{data?.company || "--"}</p>
        <p className="text-gray-500">{data?.workTime || "--"}</p>
      </div>

      <div className=" w-full border-l-2 pl-5">
        <h3 className="font-semibold text-lg">Portfolio</h3>
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
    </div>
  );
};
const ProfileDetailsComp: FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="w-full p-6 flex gap-2 bg-white shadow-md rounded-md">
      <div className=" w-full border-r-2 pr-5">
        <h3 className="font-semibold text-lg">Bio</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className=" w-full border-l-2 pl-5">
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
    </div>
  );
};
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
    <div className=" rounded-xl flex flex-col gap-6 ">
      <div className="flex justify-between gap-5">
        <ProfileInfoComp data={data} />

        <ProfileActionComp />
      </div>
      <ProfileDetailsComp data={data} />
      <ProfileStudyComp data={data} />
      <ProfileWorkComp data={data} />
    </div>
  );
};

export default ProfilePage;
