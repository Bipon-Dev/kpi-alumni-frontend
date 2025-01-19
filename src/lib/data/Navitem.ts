import { IconType } from "react-icons";
import {
  FaHome,
  FaRegNewspaper,
  FaCalendarAlt,
  FaUserPlus,
  FaEnvelope,
} from "react-icons/fa";

export interface NavItem {
  id: number;
  label: string; // Display name of the navigation item
  path: string; // URL or route path
  icon?: IconType; // Optional icon component from React Icons
  children?: NavItem[]; // Optional array for sub-navigation items
}

export const navItems: NavItem[] = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    id: 2,
    label: "Alumni Stories",
    path: "/stories",
    icon: FaRegNewspaper,
    children: [
      {
        id: 3,
        label: "Success Stories",
        path: "/stories/success",
      },
      {
        id: 4,
        label: "Featured Alumni",
        path: "/stories/featured",
      },
    ],
  },
  {
    id: 5,
    label: "Events",
    path: "/events",
    icon: FaCalendarAlt,
    children: [
      {
        id: 6,
        label: "Upcoming Events",
        path: "/events/upcoming",
      },
      {
        id: 7,
        label: "Past Events",
        path: "/events/past",
      },
    ],
  },
  {
    id: 8,
    label: "Join Us",
    path: "/join",
    icon: FaUserPlus,
  },
  {
    id: 9,
    label: "Contact",
    path: "/contact",
    icon: FaEnvelope,
  },
];
