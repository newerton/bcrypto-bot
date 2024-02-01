import { sleep } from '@modules/actions';
import { login } from '@modules/auth';
import { currentScreen } from '@modules/browser';
import { positions } from '@modules/desktop';
import { verifyScreenError } from '@modules/error';
import { logger } from '@modules/log';
import { checkUpdate } from '@modules/update';

async function main() {
  await checkUpdate();
  console.log('🔳 Press Enter to start bot');
  // await keypress();
  await logger('Starting bot', '🤖');

  const last = {
    login: 0,
    heroes: 0,
    new_map: 0,
    refresh_heroes: 0,
    check_updates: 0,
  };

  // await positions();
  const screen = await currentScreen();

  let i = 0;
  while (true) {
    // await verifyScreenError();

    await sleep(1);

    // const screen = await currentScreen()

    if (i === 20000) {
      return false;
    }
  }
}

function flush() {
  process.stdout.cursorTo(0);
}

const keypress = async () => {
  process.stdin.setRawMode(true);
  return new Promise<void>(resolve =>
    process.stdin.once('data', () => {
      process.stdin.setRawMode(false);
      resolve();
    }),
  );
};
process.on('SIGINT', function () {
  logger('Shutting down the bot', '😓');
  process.exit();
});

process.on('exit', function () {
  logger('Bye', '👋');
});

main();
