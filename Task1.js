let inputData = prompt('Введите значение:');

let data = +inputData;

if (typeof(data) === 'number' && !isNaN(data)) {
  
  if (data === 0) {
    console.log('Ноль')
    
  } else if (typeof(data) === 'number' && data% 2 === 0) {
        console.log('Четное число')
    
  } else {
        console.log('Нечетное число')
    
  }
  
} else {
    
    console.log('Упс, кажется, вы ошиблись')
    
}
