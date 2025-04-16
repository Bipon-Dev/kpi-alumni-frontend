import dayjs from "dayjs";

export function GetDate(timeStamp: number | null | undefined): string | null {
  if (!timeStamp) return null;

  const dateFormat = dayjs(timeStamp).format("DD MMM YYYY"); // No *1000
  return dateFormat !== "Invalid Date" ? dateFormat : "--";
}

export function GetTime(timeStamp: number | null | undefined): string | null {
  if (!timeStamp) return null;

  const dateFormat = dayjs(timeStamp).format("h:mm:ss A"); // No *1000
  return dateFormat || null;
}

export const timeAgo = (timestamp: number) => {
  const now = Date.now();
  const date = timestamp; // already in ms
  const seconds = Math.floor((now - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} years ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} months ago`;

  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval} days ago`;

  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval} hours ago`;

  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval} minutes ago`;

  return `${seconds} seconds ago`;
};

export const timeRemaining = (timestamp: number) => {
  const now = Date.now();
  const seconds = Math.floor((timestamp - now) / 1000);

  if (seconds < 0) return "Time has already passed";

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} years remaining`;

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} months remaining`;

  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval} days remaining`;

  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval} hours remaining`;

  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval} minutes remaining`;

  return `${seconds} seconds remaining`;
};
