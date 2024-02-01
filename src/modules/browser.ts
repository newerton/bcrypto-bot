import robot from 'robotjs';
import * as cv from 'opencv4nodejs'
import fs from 'fs';

export async function currentScreen() {
  const login = isLogin();
}

function isLogin() {
  const srcBuffer = fs.readFileSync('./images/targets/connect_wallet_button.png');
  console.log(srcBuffer)
  const dstBuffer = fs.readFileSync('images/dst.jpg');

  const srcMat = cv.imdecode(srcBuffer)
  const dstMat = cv.imdecode(dstBuffer)
}
