import { FC } from "react";

const FooterPage: FC = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex justify-between text-white p-5">
        <a href="/">KPI Alimni @2024</a>
        <div className="flex gap-5">
          <a href="facebook">F</a>
          <a href="facebook">W</a>
          <a href="facebook">C</a>
        </div>
        <div className="flex gap-5">
          <a href="facebook">About us</a>
          <a href="facebook">Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
