import * as moment from 'moment'

export const getDateDiff = async (startDate: string): Promise<string> => {
  let start: moment.Moment = moment(startDate);
  const end: moment.Moment = moment();

  let text: string = "Il y a ";

  let years = end.diff(start, "years")
  if (years > 0) {
    text += years.toString();
    text += " an"
    if (years > 1) {
      text += "s"
    }
    return text
  }

  let months = end.diff(start, "months")
  if (months > 0) {
    text += months.toString();
    text += " mois"
    return text
  }

  let weeks = end.diff(start, "weeks")
  if (weeks > 0) {
    text += weeks.toString();
    text += " semaine"
    if (weeks > 1) {
      text += "s"
    }
    return text
  }

  let days = end.diff(start, "days")
  if (days > 0) {
    text += days.toString();
    text += " jour"
    if (days > 1) {
      text += "s"
    }
    return text
  }

  let hours = end.diff(start, "hours")
  if (hours > 0) {
    text += hours.toString();
    text += " heure"
    if (hours > 1) {
      text += "s"
    }
    return text
  }

  return "Il y a quelque minutes";
}
