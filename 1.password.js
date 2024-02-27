/* Пароль не длиннее 30 символов и не короче 3
Есть хотя бы одна большая буква
Есть хотя бы одно число.
*/

let input = prompt('Введите пароль: ').trim();
let minimumOfPasswordLength = 3;
let maximumOfPasswordLength = 30;
let hasUpperCase = false;
let hasDigits = /\d/.test(input);

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) {
    hasUpperCase = true;
  }
  if (!isNaN(input[i])) {
    hasDigits = true;
  }
}

if (input.length >= minimumOfPasswordLength){
  if (input.length <= maximumOfPasswordLength) {
    if (hasUpperCase) {
      if(hasDigits) {
        alert('Пароль валидный! Добро пожаловать в аккаунт!');
      }else { alert('Пароль не удовлетворяет условиям! Нет цифр! Перезагрузите страницу и попробуйте ввести его еще раз.'); }
    }else { alert('Пароль не удовлетворяет условиям! Нет заглавных букв! Перезагрузите страницу и попробуйте ввести его еще раз.'); }
  }else { alert('Пароль не удовлетворяет условиям! Слишком длинный! Перезагрузите страницу и попробуйте ввести его еще раз.'); } 
} else { alert('Пароль не удовлетворяет условиям! Слишком короткий! Перезагрузите страницу и попробуйте ввести его еще раз.'); }