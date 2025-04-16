import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="home-Page pt-[70px] h-screen scrollbar-hide ">
      <div className="text-center text-4xl  font-bold my-10 text-primary flex justify-center">
        <h1 className="border-b-4 pb-4 border-primary">
          Please Design This Page For Event Details
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 h-full  max-w-[1200px] mx-auto w-ful">
        this is id which is coming from the url: {id}
        <br />
        Now Just filter the data of event by this id and show the details of the
        event
      </div>
    </div>
  );
};

export default EventDetailsPage;
