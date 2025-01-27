import dayjs from "dayjs";

export function GetDate(timeStamp: number | null | undefined): string | null {
  if (!timeStamp) {
    return null;
  }
  const dateFormat = dayjs(timeStamp * 1000).format(
    `DD ${`MMMM`.slice(0, 3)} YYYY`
  );
  return dateFormat.toString() !== "Invalid Date" ? dateFormat : "--";
}

export function GetTime(timeStamp: number | null | undefined): string | null {
  if (!timeStamp) {
    return null;
  }
  const dateFormat = dayjs(timeStamp * 1000).format("h:mm:ss A");
  return dateFormat.toString() || null;
}

export const timeAgo = (timestamp: number) => {
  const now: any = new Date();
  const date: any = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const seconds = Math.floor((now - date) / 1000);

  let interval = Math.floor(seconds / 31536000); // 1 year in seconds

  if (interval > 1) return `${interval} years ago`;
  interval = Math.floor(seconds / 2592000); // 1 month in seconds
  if (interval > 1) return `${interval} months ago`;
  interval = Math.floor(seconds / 86400); // 1 day in seconds
  if (interval > 1) return `${interval} days ago`;
  interval = Math.floor(seconds / 3600); // 1 hour in seconds
  if (interval > 1) return `${interval} hours ago`;
  interval = Math.floor(seconds / 60); // 1 minute in seconds
  if (interval > 1) return `${interval} minutes ago`;
  return `${seconds} seconds ago`;
};

export const timeRemaining = (timestamp: number) => {
  const now: Date = new Date();
  const date: Date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const seconds = Math.floor((date.getTime() - now.getTime()) / 1000); // Remaining seconds

  if (seconds < 0) {
    return "Time has already passed"; // Handle past timestamp
  }

  let interval = Math.floor(seconds / 31536000); // 1 year in seconds

  if (interval > 1) return `${interval} years remaining`;
  interval = Math.floor(seconds / 2592000); // 1 month in seconds
  if (interval > 1) return `${interval} months remaining`;
  interval = Math.floor(seconds / 86400); // 1 day in seconds
  if (interval > 1) return `${interval} days remaining`;
  interval = Math.floor(seconds / 3600); // 1 hour in seconds
  if (interval > 1) return `${interval} hours remaining`;
  interval = Math.floor(seconds / 60); // 1 minute in seconds
  if (interval > 1) return `${interval} minutes remaining`;

  return `${seconds} seconds remaining`;
};
