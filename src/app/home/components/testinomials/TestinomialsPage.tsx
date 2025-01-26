import { FC } from "react";
import mainPhoto from "@/assets/images/kpi-main-photo.jpeg";
const TestinomialsPage: FC = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center py-12">
      <div className="text-black bg-primary-100 p-9 m-5 w-[62%] flex items-center justify-center  gap-5">
        <img src={mainPhoto} alt="" className="size-18 rounded-full" />
        Morbi nec nisi ante. Quisque lacus ligula, iaculis in elit et, interdum
        semper quam. Fusce in interdum tortor. Ut sollicitudin lectus dolor eget
        imperdiet libero pulvinar sit amet.
        <br />
        _John Doe
      </div>
    </div>
  );
};

export default TestinomialsPage;
