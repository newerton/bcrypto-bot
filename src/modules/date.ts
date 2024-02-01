import dayjs from 'dayjs';
export function dateFormatted() {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
}
