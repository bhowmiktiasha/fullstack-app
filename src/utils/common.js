export const convertTimeFormat = (startDateTime, endDateTime) => {
  const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const formattedStartTime = formatTime(startDateTime);
  const formattedEndTime = formatTime(endDateTime);

  return `${formattedStartTime}-${formattedEndTime}`;
};

