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

let day: DayOfWeek = DayOfWeek.Monday;

isWeekend(day);
