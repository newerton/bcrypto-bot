import yaml from 'js-yaml';
import fs from 'fs';
try {
  const doc = yaml.load(fs.readFileSync('./config.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}

interface IConfig {
  serviceMessage: 'telegram';
  wallet: 'metamask';

  timeIntervals: {
    send_heroes_for_work: Array<[number, number]>;
    refresh_heroes_positions: Array<[number, number]>;
    interval_between_movements: Array<[number, number]>;
  };

  chests: {
    values: {
      chest_01: number;
      chest_02: number;
      chest_03: number;
      chest_04: number;
    };
  };

  threshold: {
    default: number;
    error: number;
    select_wallet_buttons: number;
    go_to_work_btn: number;
    green_bar: number;
    full_bar: number;
    chest: number;
  };

  offsets: {
    work_button: Array<[number, number]>;
    work_button_full: Array<[number, number]>;
    work_button_all: Array<[number, number]>;
    character_indicator: Array<[number, number]>;
  };

  scroll: {
    size: number;
    attempts: number;
  };

  use_click_and_drag_instead_of_scroll: boolean;
  click_and_drag_amount: number;
  select_heroes_mode: string;
  save_log_to_file: boolean;
  monitor_to_use: number;

  message: {
    console: {
      emoji: boolean;
    };
  };

  debug: boolean;
}

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,
  uploadsFolder,

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename: (request, file, callback) => {
        const fileHash = crypto.randomBytes(10).toString('HEX');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
  config: {
    disk: {},
    aws: {
      bucket: 'gobarber-assets',
    },
  },
} as IUploadConfig;
