let vehicle = new Map([ // 1. Задаем произвольный массив
  
    ['type', 'car'],
    ['color', 'red'],
    ['engine', 'petrol'],
    ['seats', 2],
    ['mileage', 10487]
    
  ]);
  
  vehicle.forEach(function(value, key) { // 2. Перебираем элементы массива с помощью метода .forEach передавая в качестве аргумента функцию callback c параментами value, key
    console.log(`Ключ - ${key}, Значение - ${value}`); // 3. Выводим в консоль значения в виде «Ключ — Х, значение — Y» с помощью шаблонных строк
  });