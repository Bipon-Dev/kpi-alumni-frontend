import JobCardListSection from "./JobCardListSection";

const JobPage = () => {
  return (
    <div className="home-Page  pt-[70px] h-screen scrollbar-hide ">
      <div className="text-center text-4xl  font-bold my-10 text-primary flex justify-center">
        <h1 className="border-b-4 pb-4 border-primary">
          Khulna Polytechnic Institute Alumni Job
        </h1>
      </div>
      <div className="h-full  max-w-[1200px] mx-auto w-full">
        <JobCardListSection />
      </div>
    </div>
  );
};

export default JobPage;
