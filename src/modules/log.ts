import { dateFormatted } from '@modules/date';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

const logFolder = resolve(__dirname, '..', '..', 'logs');

export async function logger(message: string, emoji: string | null = null) {
  const date = dateFormatted();
  let consoleMessage = `${date} - ${message}`;
  if (emoji != null) {
    consoleMessage = `${date} - ${emoji} ${message}`;
  }

  console.log(consoleMessage);
  saveMessageInLogFile(consoleMessage);
}

export function saveMessageInLogFile(message: string) {
  writeFileSync(`${logFolder}/log.txt`, `${message}\n`, {
    encoding: 'utf8',
    flag: 'a',
  });
}
