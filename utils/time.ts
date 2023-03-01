export default function formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      };
    const formattedDate = new Intl.DateTimeFormat(undefined, options).format(date);
    return formattedDate;
};

const dhms = (time: string|number) => {
    if (typeof time === "string") time = parseInt(time);
    let d:number ,h:number ,m: number;
    d = Math.floor(time / (1000 * 60 * 60 * 24));
    h = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    return `${d} Day(s) ${h} hours ${m} minutes.`;

}

function timeAgo(timestamp: number): string {
    const now = new Date().getTime();
    const difference = now - timestamp;
  
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsPerHour = 1000 * 60 * 60;
  
    const daysAgo = Math.floor(difference / millisecondsPerDay);
    const hoursAgo = Math.floor((difference % millisecondsPerDay) / millisecondsPerHour);
  
    const dayString = daysAgo > 1 ? 'days' : 'day';
    const hourString = hoursAgo > 1 ? 'hours' : 'hour';
  
    if (daysAgo > 0) {
      return `${daysAgo} ${dayString} and ${hoursAgo} ${hourString}`;
    } else {
      return `${hoursAgo} ${hourString}`;
    }
  }
  

export { dhms, timeAgo };