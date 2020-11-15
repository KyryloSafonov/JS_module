/*// task 1
// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let text = document.createElement('div');
text.id = 'text';
text.innerHTML = 'Lorem ipsum dolor';
document.body.appendChild(text);
let btn = document.createElement('button');
btn.innerHTML = 'Hide';
document.body.appendChild(btn);
btn.onclick  = ev => {
    text.hidden
    ? text.hidden = false : text.hidden = true;
}*/

/*// task 2
//Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn = document.createElement('button');
btn.innerHTML = 'Hide';
document.body.appendChild(btn);
btn.onclick = ev => {
    btn.style.display = 'none';

}*/

/*
// task 3
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача
let btn = document.getElementById('btn');
btn.onclick = ev => {
    let inpt = document.getElementById('myInpt');
    let value  = inpt.value;
    if (value < 18 && value > 0){
        alert('You are very young')
    } else{
        alert('Welcome my friend')
    };
    if (value <= 0){
        alert('Incorrect value')
    };
    if (value > 150){
        alert('People don`t live so long');
    }

}
*/

/*// task 4
//- Создайте меню, которое раскрывается/сворачивается при клике
let a1 = document.getElementById('a1');
let submenu = document.getElementById('submenu');
submenu.style.display = 'none';
let view  = false;
a1.onclick = ev => {
    if(view){
        submenu.style.display = 'none';
        view = false;
    }else {
        submenu.style.display = 'block';
        view = true;
    }
}*/

// task 5
//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

