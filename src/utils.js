export const menuDisplayHandler = (state, cb) => {
  return !state ? cb(true) : cb(false);
};

export const date = (date) => {
  let dateTime = new Date(date);

  const getCurrentMonth = () => {
    const month = dateTime.getMonth() + 1;
    if (month < 10) {
      return `0${month}`;
    } else {
      return month;
    }
  };

  const getCurrentDay = () => {
    const day = dateTime.getDate();
    if (day < 10) {
      return `0${day}`;
    } else {
      return day;
    }
  };

  const formatTime = (cb) => {
    let time = cb;
    let time_format = time < 10 ? `0${time}` : time;
    return time_format;
  };

  let date_formatted =
    dateTime.getFullYear() +
    "-" +
    getCurrentMonth() +
    "-" +
    getCurrentDay() +
    " ";
  let time_formatted =
    formatTime(dateTime.getHours()) +
    ":" +
    formatTime(dateTime.getMinutes()) +
    ":" +
    formatTime(dateTime.getSeconds());

  return [date_formatted, time_formatted];
};
