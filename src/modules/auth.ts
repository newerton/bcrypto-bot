import robot from 'robotjs';

export function login() {
  const screenSize = robot.getScreenSize();
  console.log('Relogou');
  robot.setMouseDelay(1000);
  robot.moveMouse(
    screenSize.width === 1366 && screenSize.height === 768 ? 604 : 656,
    screenSize.width === 1366 && screenSize.height === 768 ? 537 : 705
  );
  robot.mouseClick();

  var saidaRelogar = getCoordsFromPixelRelogar(
    screenSize.width === 1366 && screenSize.height === 768 ? 587 : 543,
    screenSize.width === 1366 && screenSize.height === 768 ? 452 : 580,
    screenSize.width === 1366 && screenSize.height === 768 ? 'eb8223' : 'f68c24'
  );
  console.log('saidaRelogar:', saidaRelogar);
  if (saidaRelogar === true) {
    console.log('Achou o botao 1');
    robot.moveMouse(
      screenSize.width === 1366 && screenSize.height === 768 ? 587 : 543,
      screenSize.width === 1366 && screenSize.height === 768 ? 452 : 580
    );
    robot.mouseClick();
  } else {
    console.log('Não achou botao 1');
  }
}

function getCoordsFromPixelRelogar(x: number, y: number, colorsR: any) {
  var colorPixelRelogar = robot.getPixelColor(x, y);
  console.log('colorPixelRelogar', colorPixelRelogar);
  console.log('colorsR', colorsR);
  if (colorPixelRelogar === colorsR) {
    console.log('Valor Encontrado');
    return true;
  }
  console.log('Valor não encontrado');
  return false;
}
