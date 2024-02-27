/*
Вам необходимо создать функцию getDivisorsCount(), которая будет высчитывать количество делителей для переданного числа. 
Если он не передан или значение было не числом, то из функции необходимо вернуть NaN.

Также если number меньше нуля либо является не целым (можно проверить при помощи функции 
Number.isInteger(number)), то выводите в модальное окно при помощи alert() сообщение “number должен быть целым числом и больше нуля!”.

Примеры:
console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
*/

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
console.log(getDivisorsCount(true));
console.log(getDivisorsCount(0));
console.log(getDivisorsCount(-2));
console.log(getDivisorsCount(2.2));

function getDivisorsCount(number) {
  let result = 0;
  let checkResult = false;
  
  checkResult = checkNumber(number);  
  
  if (checkResult === true) {
    result = calculateDivisors(number);
  } else {
    result = checkResult;
  }
  
  return result;
}

function checkNumber(number) {
  let isCorrect = false;
  let isInteger = Number.isInteger(number);
  
  if (typeof number === 'number') {
    if(number > 0 && isInteger === true) {
      isCorrect = true;
    }else {
      alert('number должен быть целым числом и больше нуля!')
      isCorrect = false;
    }
    
  } else {
    isCorrect = NaN;
  }
  
  return isCorrect;
}

function calculateDivisors(number) {
  let counter = 0;
  
  for (let i = 1; i <= number; i++)
    if ((number % i) === 0) {
      counter++;
    }
  
  return counter;
}