const arr = [23, 56, 23, 65];

let x = true;

const y = arr[0];

for (let item of arr) {
  if (item !== y) {
    x = false;
  }
}
  console.log(x)
