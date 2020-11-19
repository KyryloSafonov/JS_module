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

// // task 8
// //- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// let btn = document.getElementById('btn');
// btn.onclick = ev => {
//     let row = document.getElementById('rows').value;
//     let col = document.getElementById('cols').value;
//     let text = document.getElementById('value').value;
//     let table = document.createElement('table');
//
//     for(let i =0; i< row; i++) {
//         let tr = document.createElement('tr');
//         for(let j =0; j< col; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = text;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr)
//     }
//     document.body.appendChild(table)
// }

/*// task 9
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let images = [
    {id:1, imageURL:'pictures/1.jpg'},
    {id:2, imageURL:'pictures/2.jpg'},
    {id:3, imageURL:'pictures/3.jpg'},
    {id:4, imageURL:'pictures/4.jpg'},
    {id:5, imageURL:'pictures/5.jpg'},
    {id:6, imageURL:'pictures/6.jpg'}
]
let div = document.getElementById('photos');
let img = document.createElement('img');
let btnLeft = document.getElementById('left');
let btnRight = document.getElementById('right');

let i = 0;
img.width = 400;
img.height = 400;
img.src = images[i].imageURL;

btnLeft.onclick = ev => {
    i - 1 < 0
        ? i = images.length - 1
        : i = i - 1

    img.src = images[i].imageURL;
}
btnRight.onclick = ev => {
    i + 1 > images.length - 1
        ? i = 0
        : i = i + 1

    img.src = images[i].imageURL;
}
div.appendChild(img);*/

/*// task 10
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let badWords = ['suck', 'fuck', 'fuck up', 'fuck off', 'fuck you', 'fucking ass', 'bitch', 'freak' +
'whore', 'douchebag'];
let btn = document.getElementById('btn');
btn.onclick = ev => {
    let input = document.getElementById('input');
    for (let i = 0; i < badWords.length; i++) {
       if (input.value.toLowerCase() === badWords[i].toLowerCase()){
           alert('Dont say that')
       }

    }
}*/

/*
// task 11
// не смог сделать
//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
let badWords = ['suck', 'fuck', 'fuck up', 'fuck off', 'fuck you', 'fucking ass', 'bitch', 'freak',
'whore', 'douchebag'];
let btn = document.getElementById('btn');
btn.onclick = ev => {
    let input = document.getElementById('input');
    input = input.value.toLowerCase();
    console.log(input);
    for (let i = 0; i < badWords.length; i++) {
        if (input){
            alert('Dont say that');
        }

    }
}
*/

/*// task 12
//-- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
let h2Arr = document.getElementsByTagName(`h2`);
let content = document.getElementById('content');
let wrap = document.getElementById('wrap');
let ul = document.createElement(`ul`);
for (let i = 0; i < h2Arr.length; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let checkpoint = 'checkpoint' + i;
    a.href = '#' + checkpoint;
    h2Arr[i].setAttribute('id',checkpoint);
    a.innerHTML = h2Arr[i].innerText;
    li.appendChild(a);
    ul.appendChild(li);

}
content.appendChild(ul);
content.style.width = '30%';
wrap.style.width = '70%';
content.style.float = 'left';
wrap.style.float = 'left';*/

/*// task 13
// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let content = document.getElementById('content');
let UserDiv = document.createElement('div');
UserDiv.appendChild(renderContent(usersWithAddress));

let  input1 = document.createElement('input');
let  input2 = document.createElement('input');
let  input3 = document.createElement('input');

let label1 = document.createElement('label');
let label2 = document.createElement('label');
let label3 = document.createElement('label');

let btn = document.createElement('button');

label1.innerHTML = 'со статусом false';
label2.innerHTML = 'старше 29 лет включительно';
label3.innerHTML = 'город киев';

btn.innerHTML = 'Filter On';

input1.type = 'checkbox';
input2.type = 'checkbox';
input3.type = 'checkbox';

content.appendChild(UserDiv);

content.appendChild(label1);
content.appendChild(input1);
content.appendChild(label2);
content.appendChild(input2);
content.appendChild(label3);
content.appendChild(input3);
content.appendChild(btn);

btn.onclick = ev => {
    let myArr = JSON.parse(JSON.stringify(usersWithAddress));

    if(input1.checked){
        myArr = myArr.filter(value => !value.status)
    };
    if(input2.checked){
        myArr = myArr.filter(value => value.age >= 29)
    };
    if(input3.checked){
        myArr = myArr.filter(value => value.address.city === 'Kyiv');
    };

    UserDiv.innerHTML = '';
    UserDiv.appendChild(renderContent(myArr));
}



function renderContent(arr) {
    let main = document.createElement('div');
    arr.forEach(value => {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerText = value.name;
        div. innerHTML = JSON.stringify(value);
        div.appendChild(h3);
        main.appendChild(div)
    })
    return main;
}*/







