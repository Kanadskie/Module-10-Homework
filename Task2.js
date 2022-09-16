let x;

x = 56; // Example

if (typeof x === 'number') {

  console.log('x - число')
  
} else if (typeof x === 'string') {
  
    console.log('x - строка')
    
} else if (typeof x === 'boolean') {
  
    console.log('x - булев')
    
} else {
  
    console.log('Тип x не определён')
}