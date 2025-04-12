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

console.log(myArray.length); //выведет размер массива

myArray.push(100); // в конец массива добавляет элемент
console.log(myArray); 

myArray.splice(0, 2);
console.log(myArray);


//loops

let value = 1;

while (value <= 5) {
  console.log('hi');
  value += 1;
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let randomNumber = 0;
while (randomNumber < 0.5) {
  randomNumber = Math.random();
}
console.log(randomNumber);


const todoList = [
  'make dinner',
  'wash dishes',
  'watch youtub'
]

for (let i = 0; i <= todoList.length - 1; i++) {
  console.log(todoList[i]);
}


const nums = [1, 1, 3];
let total = 0;

// мы хотим узнать сумму всех элементов в массиве

for (let i = 0; i < nums.length; i++) {
  let value = nums[i];
  total += value;
}
console.log(total);

// теперь хотим все числа в массиве умножить на два

const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
  let value = nums[i];
  numsDoubled.push(value * 2);
}
console.log(numsDoubled);


//homework

const homeArray = [10, 20, 30];
homeArray[2] = 99;
console.log(homeArray);

function getLastValue(array) {
  console.log( array[array.length - 1]);

}
getLastValue([1, 20, 22, 24, 5]);
getLastValue(['name', 'surname', 'hi', 'hello']);

function arraySwap(array) {
  const tempArray = [];
  for (let i = array.length - 1 ; i >= 0; i--) {
    tempArray.push(array[i]);
  }
  console.log(tempArray);
}

arraySwap([1, 2, 3, 4]);

for (i = 0; i <= 10; i += 2) {
  console.log(i);
} 

for (i = 5; i >= 0; i--) {
  console.log(i);
} 

let ind1 = 0;
while (ind1 <= 10) {
  console.log(ind1);
  ind1 += 2;
}

let ind2 = 5;
while (ind2 >= 0) {
  console.log(ind2);
  ind2--;
}

function plusOneArray(array) {
  for (i = 0; i <= array.length - 1; i++) {
    array[i]++;
  }
  return array;

}

console.log(plusOneArray([1, 2, 3, 4]));

function addNum(array, num) {
  for (i = 0; i < array.length; i++) {
    array[i] += num;
  }

  return array;
}

console.log(addNum([1, 2, 3, 4, 5], 2));

function addArray(array1, array2) {
  tempArray = [];
  for (i = 0; i < array1.length; i++) {
    tempArray.push(array1[i] + array2[i]);
  }
  return tempArray;
}

console.log(addArray([1, 2, 3, 4], [1, 2, 3, 4]));

function countPositive(array) {
  count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count += array[i];
    }
  }
  return count;
}

console.log(countPositive([1, -2, 3, -4]));


function returnMinMax(array) {
  let minimum = null;
  let maximum = null;

  if (array.length === 0) {
    return 'That array is empty';
  }

  for (i = 0; i < array.length; i++){

    if (array[i] < minimum) {
      minimum = array[i];
    }

    if (array[i] > maximum) {
      maximum = array[i];
    }

  }
  if (maximum === null || minimum === null) {
    return 'That array has not min and max';
  }
  return `Max: ${maximum}; Min: ${minimum}`;

}

console.log(returnMinMax([1, -2, 3, -4]));
console.log(returnMinMax([]));
console.log(returnMinMax([3]));

function countWords(array) {
  let counter = 0;
  for (i = 0; i < array.length; i++) {
    for (k = 0; k < array.length; k++) {
      if (array[i] === array[k] && i !== k) {
        counter++; 
      }
    }
  }
  return counter;
}

console.log(countWords(['hello', 'hi', 'good', 'hi']));