let randomNum = getRandomInt(0, 100);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNum);