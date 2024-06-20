import './style.css';

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (DayOfWeek.Saturday | DayOfWeek.Sunday) {
    return false;
  } else {
    return true;
  }
};

const todays = DayOfWeek.Monday;

console.log(isWeekend(todays));
