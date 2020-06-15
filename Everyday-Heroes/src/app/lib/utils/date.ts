import * as moment from 'moment'

export const getDateDiff = async (startDate: string): Promise<string> => {
  const start: moment.Moment = moment(startDate);
  const end: moment.Moment = moment();

  let text = 'Il y a ';

  const years: number = end.diff(start, 'years');
  if (years > 0) {
    text += years.toString();
    text += 'an';
    if (years > 1) {
      text += 's';
    }
    return text;
  }

  const months: number = end.diff(start, 'months');
  if (months > 0) {
    text += months.toString();
    text += 'mois';
    return text;
  }

  const weeks: number = end.diff(start, 'weeks');
  if (weeks > 0) {
    text += weeks.toString();
    text += 'semaine';
    if (weeks > 1) {
      text += 's';
    }
    return text;
  }

  const days: number = end.diff(start, 'days');
  if (days > 0) {
    text += days.toString();
    text += 'jour';
    if (days > 1) {
      text += 's';
    }
    return text;
  }

  const hours: number = end.diff(start, 'hours');
  if (hours > 0) {
    text += hours.toString();
    text += 'heure';
    if (hours > 1) {
      text += 's';
    }
    return text;
  }

  return 'Il y a quelque minutes';
};
