const randomizerArr = (w, h) => {
  let res = [];
  let subRes = [];
  for (let i = 0; i <= w; i++) {
    for (let j = 0; j <= h; j++) {
      subRes.push(`${i}${j}`);
    }
  }

  while (subRes.length > 0) {
    let index = Math.floor(Math.random() * subRes.length);
    let removed = subRes.splice(index, 1);
    res.push(...removed);
  }
  return res;
};
