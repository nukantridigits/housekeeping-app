import { format as dateFormat, isToday, parseISO } from 'date-fns';

import {
  DEFAULT_DATE_FORMAT,
  TODAY_DATE_FORMAT,
} from '../containers/RoomPage/constants';

const getRoomFormattedDate = (date, checkIsToday = true) => {
  let text = '';
  let format = DEFAULT_DATE_FORMAT;
  const parsed = parseISO(date);

  if (checkIsToday) {
    if (isToday(parsed)) {
      format = TODAY_DATE_FORMAT;
      text = 'Today, ';
    }
  }

  return `${text}${dateFormat(parsed, format)}`;
};

const getCurrentTimeMs = () => parseInt(new Date().getTime());

export { getRoomFormattedDate, getCurrentTimeMs };
