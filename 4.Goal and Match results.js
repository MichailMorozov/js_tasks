const goals = [8, 1, 1, 3, 2, -1, 5];
let bestResult = 0;
let bestGameNumber = 0;
let minGoals = 0;
let minGoalsMatches = [];
let minResult = Infinity;
let sumOfGoals = 0;
let gameCounter = 0;
let autoDefeatGamesCounter = 0;

for(let i = 0; i < goals.length; i++) {
  
  if (bestResult < goals[i]) {
    bestResult = goals[i];
    bestGameNumber = i+1;
  }
  
  if(goals[i] >= 0 && goals[i] <= minResult){
    if(goals[i] < minResult) {
      minGoals = goals[i];
      minGoalsMatches = [];
      minResult = goals[i];
    }
    minGoals = goals[i];
    minGoalsMatches.push(i);
  } 
  
  if (goals[i] > 0){
    sumOfGoals += goals[i]; 
    gameCounter += 1;
  }
  
  if(goals[i] === -1) {
    autoDefeatGamesCounter += 1;
  }  
}

showBestGameResult(bestResult, bestGameNumber);
showWorstGamesResults(minGoalsMatches, minGoals);
showSumOfGoals(sumOfGoals);
showAutoDefeatStatus(autoDefeatGamesCounter);
showAverageNumbersOfGoals(sumOfGoals, gameCounter);
sortGoals(goals);

function showBestGameResult(numberOfGoals, number) {
  alert(`Самый результативный матч был под номером ${number}. В нём забито ${numberOfGoals} голов.`);
}

function showWorstGamesResults(numbers, numberOfGoals) {
  if (numbers.length === 1 ) {
    alert(`Самые нерезультативный матч был под номером ${numbers[0]}. В нём был забит ${numberOfGoals} мяч.`);
  }else if (numbers.length === 2){
    alert(`Самые нерезультативные матчи были под номерами ${numbers[0]} и ${numbers[1]}. В каждом из них было забито по ${numberOfGoals} мячу.`);
  }else {
    let numberList = numbers.slice(0, numbers.length - 1).join(", ") + " и " + numbers[numbers.length - 1];
  alert(`Самые нерезультативные матчи были под номерами ${numberList}. В каждом из них было забито по ${numberOfGoals} мячу.`);
  }
}

function showSumOfGoals(goals) {
  alert(`Общее количество голов за сезон равно ${goals}.`);
}

function showAutoDefeatStatus(autoDefeatGamesCounter) {
  let status = '';
  if (autoDefeatGamesCounter > 0) {
    status = 'Да';
  }else {
    status = 'Нет';
  }
    
  alert(`Были автоматические поражения: ${status}`);
}

function showAverageNumbersOfGoals(goals, gameCounter) {
  let average = goals/gameCounter;
  alert(`Среднее количество голов за матчи: ${average.toFixed(2)}.`)
}

function sortGoals(array) {
  let filteredArray = array.filter(element => element !== -1)
  let sortedArray = filteredArray.sort();
  let string = sortedArray.join(' ');

  alert(`Голы по возрастанию: ${string}`);
}