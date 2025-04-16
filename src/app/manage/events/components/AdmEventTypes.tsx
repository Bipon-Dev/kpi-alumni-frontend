export type TEventType = {
  id: number;
  title: string;
  organizer: string;
  status: string;
  creatorId: number;
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
  description: string;
  dateStart: number;
  dateEnd: number;
  location: string;
  photoUrl: string;
};

export type TEventAdmData = {
  eventStatus: TEventStatus[];
  events: TEventType[];
};

export type TEventStatus =
  | "Upcoming"
  | "Ongoing"
  | "Postponed"
  | "Cancelled"
  | "Finished";
