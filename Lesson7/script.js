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

/*// task 5
//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let comentArr = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
];

let content = document.getElementById('content');
comentArr.forEach(value => {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.onclick = ev => {
        p.hidden
        ? p.hidden = false : p.hidden = true;
    }
    btn.innerHTML = 'Hide';
    h3.innerHTML = value.title;
    p.innerHTML = value.body;
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(btn);
    content.appendChild(div)

    }
)*/

/*// task 6
//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let btn = document.getElementById('btn');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');

btn.onclick = ev => {
    console.log(document.forms.form1.input1.value);
    console.log(document.forms.form1.input2.value);
    console.log(document.forms.form2.input3.value);
    console.log(document.forms.form2.input4.value);

}*/

/*// task 7
//- Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
function createTable(rows,cols,elem) {
    let tag = document.createElement(elem);
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
                td.innerHTML =  i.toString() + j.toString();
                tr.appendChild(td);
        }
        table.appendChild(tr);
        
    }
     tag.appendChild(table);
    document.body.appendChild(tag);
}

createTable(3, 3 , 'div');*/

// task 8
//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



