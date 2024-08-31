const MINUTES_TO_MILLISECONDS = 60000;

const getCurrentTimeForTimezone = (timezoneSec: number) => {
  const localDate = new Date();
  const localOffsetMs = localDate.getTimezoneOffset() * MINUTES_TO_MILLISECONDS;
  const utcDate = new Date(localDate.getTime() + localOffsetMs);
  const timezomeMs = timezoneSec * 1000;
  const dateInTimeZone = new Date(utcDate.getTime() + timezomeMs);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(dateInTimeZone);

  return formattedTime;
};

export default getCurrentTimeForTimezone;
