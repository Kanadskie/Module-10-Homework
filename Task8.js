let vehicle = new Map([
  
    ['type', 'car'],
    ['color', 'red'],
    ['engine', 'petrol'],
    ['seats', 2],
    ['mileage', 10487]
    
  ]);
  
  vehicle.forEach(function(value, key) {
    console.log(`Ключ - ${key}, Значение - ${value}`);
  });