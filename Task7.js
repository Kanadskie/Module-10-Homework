const arr = [542, 0, 'git', 88, 1, false, 'top', 'bot', 4, 90, 0, 11, 13, 0, null, 'root', true];

let even = 0,
    odd = 0,
    zero = 0,
    str = 0,
    booleans = 0;
    
for (let i = 0; i < arr.length; i++) {
  if (typeof(arr[i]) === 'number' && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zero += 1;
    } else if (arr[i]% 2 === 0) {
      even += 1;
    } else {
        odd += 1;
    }
  }
  
  if (typeof(arr[i]) === 'string') {
    str += 1;
  }
  
    if (typeof(arr[i]) === 'boolean') {
    booleans += 1;
  }
  
}

console.log(`В массиве четных элементов - ` + even);
console.log(`В массиве нечетных элементов - ` + odd);
console.log(`В массиве нулей - ` + zero);
console.log(`В массиве строк - ` + str);
console.log(`В массиве булев - ` + booleans);