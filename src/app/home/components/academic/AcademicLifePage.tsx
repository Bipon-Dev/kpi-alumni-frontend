import { Button } from "@/lib/ui/button";
import { FC } from "react";

const AcademicLifePage: FC = () => (
  <div className="container mx-auto flex flex-wrap justify-center gap-5 pt-12">
    {[
      {
        title: "Academic Life & Research",
        items: [
          "Programs and Areas",
          "Graduate & Postdoctoral Programs",
          "Continuing Studies",
          "International Activities",
          "Course Calendars & Listings",
        ],
      },
      {
        title: "Campus Life",
        items: [
          "Athletics & Recreation",
          "Clubs & Extra-curricular Activities",
          "Housing & Residence",
          "Arts & Culture",
          "Student IT Services",
        ],
      },
    ].map((section, index) => (
      <div key={index} className="w-90">
        <span className="text-2xl font-normal underline">{section.title}</span>
        <ul className="text-xs list-disc list-inside space-y-2 pt-4">
          {section.items.map((item, idx) => (
            <li key={idx}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}
    <div className="w-90">
      <span className="text-2xl font-normal underline">Newsletter</span>
      <div className="border border-primary-200 flex justify-between items-center rounded-md mt-4">
        <input
          type="email"
          className="outline-none pl-5  flex-grow"
          placeholder="Your email..."
        />
        <Button variant="secondary" className="text-white px-4 py-2">
          Send
        </Button>
      </div>
      <p className="text-xs pt-4">
        Ut tincidunt, quam in tincidunt vestibulum, turpis ipsum porttitor nisi,
        et fermentum augue lit eu neque. In at tempor dolor, sit amet dictum
        lacus. Praesent porta orci eget laoreet ultrices.
      </p>
    </div>
  </div>
);

export default AcademicLifePage;
