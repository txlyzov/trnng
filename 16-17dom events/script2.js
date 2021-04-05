var firstTodoItem = document.querySelector('p');

firstTodoItem.addEventListener('mouseover',function () {
this.style.backgroundColor = 'green';
});

firstTodoItem.addEventListener('mouseout',function () {
this.style.backgroundColor = 'white';
});