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

export { randomizerArr };

[
  [1, 0, 1, 1],
  [1, 1, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 1],
];

[
    "0-1",
    "1-5",
    "3-4",
    "3-0",
    "0-3",
    "2-5",
    "2-3",
    "1-3",
    "1-2",
    "0-4",
    "1-0",
    "3-2",
    "0-0",
    "1-1",
    "2-0",
    "0-2",
    "0-5",
    "1-4",
    "2-1",
    "3-5",
    "3-1",
    "2-2",
    "2-4",
    "3-3"
]