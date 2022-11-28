const mainScreen = document.getElementById("main-screen");
let screen = mainScreen.getContext("2d");
screen.globalAlpha = 0.5;
mainScreen.width = 1280;
mainScreen.height = 222;


const randomizerArr = (w, h) => {
  let res = [];
  let subRes = [];
  for (let i = 0; i <= w; i++) {
    for (let j = 0; j <= h; j++) {
      subRes.push(`${i}-${j}`);
    }
  }

  while (subRes.length > 0) {
    let index = Math.floor(Math.random() * subRes.length);
    let removed = subRes.splice(index, 1);
    res.push(...removed);
  }
  return res;
};

const rndColor = (num) => {
  return Math.floor(Math.random() * num) || 0;
};

const rndArr = () => {
  let res = [];
  for (let x = 0; x <= 105; x++) {
    //105
    let sub = [];
    for (let y = 0; y <= 17; y++) {
      //17
      sub.push(Math.floor(Math.random() * 2));
    }
    res.push(sub);
  }
  return res;
};

const renderMainScreen = (arr) => {
  
  let initialArr = randomizerArr(arr[0].length - 1, arr.length - 1);

  const renderElement = (a, b) => {
    if (arr[a][b] === 0) {
      screen.clearRect(12 * a, 12 * b, 10, 10);
    } else {
      screen.fillStyle = "#d9534d";
      screen.fillRect(12 * a, 12 * b, 10, 10);
    }
  };

  initialArr.forEach((adress) => {
    let cut = adress.indexOf("-");
    let y = adress.slice(0, cut);
    let x = adress.slice(cut + 1, adress.length);
    setTimeout(() => {renderElement(x, y)}, 500)
  });
};

export { rndArr,  renderMainScreen};

