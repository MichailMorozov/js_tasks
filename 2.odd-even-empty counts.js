/* 
Необходимо создать функцию getSumOfNumbers(). Она будет считать сумму от 0 до переданного числа. Выберите любой из 3 типов при создании функции.

getSumOfNumbers() принимает в себя 2 параметра: number и type.

Параметр number - это число, до которого будет считаться сумма. То есть, если было передано число 10,
 то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10). Если параметр не передан или значение было не числом, то из функции необходимо вернуть NaN.

Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть одним из 3-х значений:
 "odd", "even" и "". Если type равняется "odd", то в сумму должны входить только нечетные числа,
  "even" - четные числа, пустая строка "" - все числа. По умолчанию параметр type должен быть равен "odd".

Функция getSumOfNumbers() должна возвращать итоговую сумму с помощью return.

Возможные результаты функции getSumOfNumbers():

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55
*/

console.log('1: ' + getSumOfNumbers(10, 'odd'));  
console.log('2: ' + getSumOfNumbers(10, 'even'));  
console.log('3: ' + getSumOfNumbers(10, ''));  
console.log('4: ' + getSumOfNumbers(true, 'odd'));  
console.log('5: ' + getSumOfNumbers(10, 'blabla'));  
console.log('6: ' + getSumOfNumbers(10));  
console.log('7: ' + getSumOfNumbers('blabla', 'blabla'));  

function getSumOfNumbers(number, type = 'odd') {
    let result = 0;
    let checkResult = false;

    checkResult = checkInput(number, type);
    if (checkResult === true) {
        result = getSum(number, type);  
    }else {
        result = checkResult;
    }

    return result; 
}   

function checkInput(number, type){
    let result = 0;
    let isNumber = false;
    let correctType = false;

    isNumber = checkNumber(number);
    correctType = checkType(type);

    if (isNumber === true && correctType === true) {
        result = true;
    } else if(isNumber !== true && correctType !== true ){
        result = `${isNumber} and ${correctType}`;
    } else if (isNumber !== true) {
        result = isNumber;
    } else { 
        result = correctType;
    }

    return result;
} 

function checkNumber(number) {
    let isCorrect = '';
    
    if (typeof number === 'number') {
        isCorrect = true;
    } else {
        isCorrect = NaN;
    }
    
    
    return isCorrect; 
}

function checkType(type){
    let isCorrect = false;
    
    switch(type) {
      case 'even':
      case 'odd':
      case '':
        isCorrect = true;
        break;
      default:
        isCorrect = 'Wrong type!'
        break;
    }

    return isCorrect; 
}

function getSum(number, type) {
    let result = 0;

    for (let i = 0; i < (number + 1); i++) {
        
        switch (type) {
            case 'odd':
                if (i % 2 !== 0){
                    result += i;
                }
            break;
            case 'even':
                if(i % 2 === 0) {
                    result += i;
                }
            break;
            case '':
                result += i;
            break;
        }        
    }

    return result;
}