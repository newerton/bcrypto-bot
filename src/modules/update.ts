import axios from 'axios';
import { resolve } from 'path';

const packageJsonFile = resolve(__dirname, '..', '..', 'package.json');
const packageJson = require(packageJsonFile);

export async function checkUpdate() {
  const currentVersion = packageJson.version;
  const url =
    'https://raw.githubusercontent.com/newerton/gobarber-2-backend/master/package.json';

  return await axios
    .get(url)
    .then(response => {
      const { version } = response.data;
      console.log(`ℹ️ Git Version: ${version}`);
      console.log(`ℹ️ Version installed: ${currentVersion}`);
      if (version > currentVersion) {
        console.log(
          `🎉 New version '${currentVersion}' available, please update`,
        );
      }
    })
    .catch(error => {
      const { status } = error.response;
      if (status !== 200) {
        console.log('🔄️ Version not found, exiting');
        process.exit();
      }
    });
}
