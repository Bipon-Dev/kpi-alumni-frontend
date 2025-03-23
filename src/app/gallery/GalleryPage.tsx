import { galleryImg } from "./image/image";

const GalleryPage = () => {
  return (
    <div
      className="home-Page pt-[70px] scrollbar-hide bg-gray-100
    "
    >
      <div className="text-center text-4xl  font-bold my-10 text-primary flex justify-center ">
        <h1 className="border-b-4 pb-4 border-primary">
          Khulna Polytechnic Institute Alumni Gallery
        </h1>
      </div>
      <div className=" flex flex-wrap gap-2  justify-center my-16">
        {Array.isArray(galleryImg) &&
          galleryImg.map((img: any, index: number) => (
            <div
              key={index}
              className="gallery-img bg-white p-2 h-[400px] w-auto "
            >
              <img src={img.src} alt={img.alt} className=" h-full" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryPage;
