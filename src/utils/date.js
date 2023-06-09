import format from 'date-fns/format';
import parse from 'date-fns/parse';

export const formatShortDate = val => {
  return format(new Date(val), 'LLL d');
};
export const formatDay = val => {
  return format(new Date(val), 'd');
};

export const formatDate = (val, dateFormat = 'LLL d yy') => {
  return format(new Date(val), dateFormat);
};

export const formatLongDate = val => {
  return format(new Date(val), 'dd-MM-yyyy HH:mm:ss');
};

export const formatDayMonth = val => {
  return format(new Date(val), 'do MMM, yyyy');
};

export const formatTime = val => {
  return format(parse(val, 'H:mm', new Date()), 'hh:mm a');
};

export const formatDateString = val => {
  return format(new Date(val), 'yyyy-MM-dd');
};
export const calculateNoOfDays = (start, end, excludeDays = []) => {
  const dates = [];

  while (start.getTime() <= end.getTime()) {
    if (!excludeDays.includes(start.getDay())) {
      dates.push(new Date(start));
    }
    start.setDate(start.getDate() + 1);
  }
  dates.push(end);
  return dates.length - 1;
};

