//task 1
// //- Дана textarea.
// //   В неё вводится текст.
// // Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textarea = document.getElementById(`textarea`);
// textarea.value = localStorage.getItem('text');
// textarea.oninput = ev => {
//     console.log(ev.target.value);
//     localStorage.setItem('text',ev.target.value);
//
//}

// //task 2
// //- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// // Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// // Сделайте ваш скрипт как можно более универсальным.
// let form1 = document.getElementById('form1');
// getData(form1);
//
// function saveForm (t) {
//     setData(t);
// }
//
// function setData(tag) {
//     for (let i = 0; i < tag.length; i++) {
//         let tagElement = tag[i];
//         if (tagElement.type === 'checkbox' || tagElement.type === 'radio' ){
//             tagElement.checked
//             ? tagElement.value = true :
//                 tagElement.value = false;
//         }
//         localStorage.setItem(tagElement.id, tagElement.value);
//
//     }
// }
//
// function getData(tag) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(tag.children[i].id)){
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//         }
//         if (tag.children[i].value === 'true'){
//             tag.children[i].setAttribute('checked', 'checked');
//         }
//     }
// }

/*
// task 3
//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
//Требование : хранить историю своих изменений (даже после перезагрузки страницы).
//Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
let text = document.getElementById('text');
let next = document.getElementById('next');
let back = document.getElementById('back');
let save = document.getElementById('save');

save.onclick = ev => {
    localStorage.setItem(localStorage.length + 1, text.value)
}
back.onclick = ev => {
    next.style.visibility = 'visible';
    let index;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)){
            if(localStorage.getItem(key) === text.value){
                index = key
            }
        }
    }
    if (index === '1'){
        back.style.visibility = 'hidden';
        return ;
    }
    text.value = localStorage.getItem(index - 1 );
}

next.onclick = ev =>  {
    back.style.visibility = 'visible';
    let index;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)){
            if(localStorage.getItem(key) === text.value){
                index = key
            }
        }
    }
    if (index === localStorage.length.toString()){
        next.style.visibility = 'hidden';
        return ;
    }
    text.value = localStorage.getItem(+index + 1);
}
*/

/*
// task 4
//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть
// все необходимые инпуты для редактирования, которые уже заполнены данными объекта
let form = document.getElementById('form1');
let sub = document.getElementsByName('submit1');
let enPon = document.getElementById('enterPoint');

let users = 'users';
let tempUser = {};

sub.onclick = ev => {
    let person = {...tempUser};
    tempUser = {};
    for (let i = 0; i < form.children.length; i++) {
        let formElement = form.children[i];
        if (formElement.name && formElement.type !== 'submit' ){
            person[formElement.name] = formElement.value;

        }
    }
    if (!person.id ){
        person.id = new Date().getTime();

    }
    saveUser(person);
}

getDataFromLocalStorage();

function saveUser(user) {
    if(localStorage.hasOwnProperty(users)){
        let arrayUsers = JSON.parse(localStorage.getItem(users));
        let find = arrayUsers.find(value => value.id === user.id);
        if (find){
            let filter = arrayUsers.filter(value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(users, JSON.stringify(filter));
        }else {
            arrayUsers.push(user);
            localStorage.setItem(users, JSON.stringify(arrayUsers));
        }
    } else {
        localStorage.setItem(users, JSON.stringify([user]));
    }
}

function getDataFromLocalStorage() {
    if(localStorage.hasOwnProperty(users)){
       let arrUser = JSON.parse(localStorage.getItem(users));
        for (let user of arrUser) {
            enPon.appendChild(CardGenerate(user))
        }
    }
}

function CardGenerate (user) {
    let main = document.createElement('div');
    let flag = true;
    for (let key in user) {
        if (flag){
            let h3 = document.createElement('h3');
            h3.innerHTML = key + ' : ' + user[key];
            main.appendChild(h3);
            flag = false;

        }else {
            let p = document.createElement('p');
            main.appendChild(p);
        }
    }
    main.style.width = '300px';
    main.style.border = 'pink 1px solid';
    main.style.float = 'left'
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');

    btn1.innerHTML = 'Edit';
    btn2.innerHTML = 'Delete';

    btn1.onclick = ev => {
        editUser(user.id)

    }

    btn2.onclick = ev => {
        deleteUser(user.id);
    }

    main.appendChild(btn1);
    main.appendChild(btn2);


    return main;
}


function deleteUser(id) {
    let parse = JSON.parse(localStorage.getItem(users));
    let filter = parse.filter(user => user.id !== id);
    localStorage.setItem(users, JSON.stringify(filter));
    location.reload();
}

function editUser (id) {
    let parse = JSON.parse(localStorage.getItem(users));
    let user = parse.find(user => user.id === id);
    for (let i = 0; i < form.children.length; i++) {
        let formElement = form.children[i];
        if (formElement.name && formElement.type !== 'submit' ){
            for (let key of users) {
                if (formElement.name === key){
                    formElement.value = user[key];
                }
            }

        }
    }
    tempUser = user ;
}
*/
