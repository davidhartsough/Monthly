const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const currentMonthIndex = date.getMonth();
const lastMonthIndex = currentMonthIndex - 1;
const currentMonthNumber = currentMonthIndex + 1;
const currentYear = date.getFullYear();
const startingYear = 2020;
function getMonthOptions() {
  const options = months
    .slice(0, currentMonthNumber)
    .map((m, i) => ({
      value: `${currentYear}-${i + 1}`,
      label: `${m} ${currentYear}`,
    }))
    .reverse();
  if (currentYear > startingYear) {
    for (let year = currentYear - 1; year >= startingYear; year--) {
      for (let i = 11; i >= 0; i--) {
        options.push({
          value: `${year}-${i + 1}`,
          label: `${months[i]} ${year}`,
        });
      }
    }
  }
  return options;
}

const allMonthOptions = getMonthOptions();
export const monthOptions = allMonthOptions.slice(1);
export const currentMonth = `${currentYear}-${currentMonthNumber}`;
export const lastMonth = allMonthOptions[1].value;
export const currentMonthFormatted = `${monthsLong[currentMonthIndex]} ${currentYear}`;
export const lastMonthFormatted = `${monthsLong[lastMonthIndex]}`;
const yearAndMonthPattern = /^20\d{2}-([1-9]|10|11|12)$/;
export function isValidMonth(yearAndMonth) {
  if (yearAndMonthPattern.test(yearAndMonth)) {
    const [yearNum, monthNum] = yearAndMonth.split("-").map((i) => Number(i));
    const yearIsValid = yearNum >= 2020 && yearNum <= currentYear;
    const monthIsValid =
      yearNum === currentYear ? monthNum < currentMonthNumber : true;
    return yearIsValid && monthIsValid;
  }
  return false;
}
