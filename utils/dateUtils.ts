import { AMPMFormat, DateFormat, DateFormatOptions } from "@/types";

export const formatAMPM = (date: Date): AMPMFormat => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strMinutes = minutes < 10 ? "0" + minutes : minutes.toString();
  const strTime = `${hours}:${strMinutes} ${ampm}`;
  return strTime;
};

export const formatDate = (date: Date): DateFormat => {
  const options: DateFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
