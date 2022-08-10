function getFirstDayOfTheWeek(date) {
  let dayOfTheWeek = date.getDay() || 7;

  let firstDayOfTheWeek = date.getDate() + 1 - dayOfTheWeek;

  return new Date(date.setDate(firstDayOfTheWeek));
}

function getLastDayOfTheWeek(date) {
  let dayOfTheWeek = date.getDay() || 7;

  let lastDayOfTheWeek = date.getDate() + 7 - dayOfTheWeek;

  return new Date(date.setDate(lastDayOfTheWeek));
}

function getFirstDayOfTheMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getLastDayOfTheMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function getDatesFromRange(startDate, endDate) {
  const dates = [];

  for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
    dates.push(new Date(i));
  }

  return dates;
}

function getMonthName(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return months[date.getMonth()];
}

export default {
  getFirstDayOfTheMonth,
  getLastDayOfTheMonth,
  getFirstDayOfTheWeek,
  getLastDayOfTheWeek,
  getDatesFromRange,
  getMonthName,
};
