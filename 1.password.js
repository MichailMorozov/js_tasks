const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting)

leaveQueueWithoutParcel(peopleWaiting);

function giveParcel(array) {
  alert(`${array.shift()} получил(а) посылку. В очереди осталось ${array.length} человек(а).`);
}

function leaveQueueWithoutParcel(array) {
  for(let i = array.length; i > 0; i--) {
    let message = ' не получил(а) получил(а) посылку и ушел(ла) из очереди';
    alert(`${array.pop()} ${message}`);
  }   
}