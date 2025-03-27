const myArray = [
  10,
  30,
  50
];
console.log(myArray);

console.log(myArray[0]);

myArray[0] = 90;
console.log(myArray);

[1, 'hello', {name: 'socks'}, [1, 2]]

console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2])); //содержит ли массив такое внутри себя

myArray.push(100); // в конец массива добавляет элемент
console.log(myArray); 

myArray.splice(0, 2);
console.log(myArray);

